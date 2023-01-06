<template>
    <div class="geometry-viewer">
        <div class="vtk-container" ref="vtkContainerUrl" />
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { isClient } from "@vueuse/core";
import { ElLoading } from "element-plus";

import { formatBytesToProperUnit, debounce } from '@kitware/vtk.js/macros';
import '@kitware/vtk.js/Rendering/Profiles/Geometry';
import HttpDataAccessHelper from '@kitware/vtk.js/IO/Core/DataAccessHelper/HttpDataAccessHelper';
import '@kitware/vtk.js/IO/Core/DataAccessHelper/HtmlDataAccessHelper';
import '@kitware/vtk.js/IO/Core/DataAccessHelper/JSZipDataAccessHelper';

import style from './geometryViewer.module.css'
const vtkContainerUrl = ref(null);
const context = ref(null);
const txt = ref(true)
const props = defineProps({
    url:Array
})
const loading = () => {
    return ElLoading.service({
        lock: true,
        text: "加载中",
        fullscreen: true,
        background: "rgba(0, 0, 0, 0.7)",
    });
};
let loadInstance;
let vtkActor,
    vtkDataArray,
    vtkScalarBarActor,
    vtkColorMaps,
    vtkColorTransferFunction,
    vtkFullScreenRenderWindow,
    vtkMapper,
    vtkURLExtract,
    vtkXMLPolyDataReader,
    vtkFPSMonitor;
let ColorMode,
    ScalarMode;
let fullScreenRenderWindow;
let renderWindow;
let renderer;
let scalarBarActor;

const loadViewer = () => {
    if (loadInstance) loadInstance.close()
    vtkActor = vtk.Rendering.Core.vtkActor;
    vtkDataArray = vtk.Common.Core.vtkDataArray;
    vtkScalarBarActor = vtk.Rendering.Core.vtkScalarBarActor;
    vtkColorMaps = vtk.Rendering.Core.vtkColorTransferFunction.vtkColorMaps;
    vtkColorTransferFunction = vtk.Rendering.Core.vtkColorTransferFunction;
    vtkFullScreenRenderWindow = vtk.Rendering.Misc.vtkFullScreenRenderWindow;
    vtkMapper = vtk.Rendering.Core.vtkMapper
    vtkURLExtract = vtk.Common.Core.vtkURLExtract;
    vtkXMLPolyDataReader = vtk.IO.XML.vtkXMLPolyDataReader
    vtkFPSMonitor = vtk.Interaction.UI.vtkFPSMonitor
    ColorMode = vtk.Rendering.Core.vtkMapper.ColorMode
    ScalarMode = vtk.Rendering.Core.vtkMapper.ScalarMode
    nextTick(() => {

        if (!context.value) {
            let autoInit = true;
            let background = [0, 0, 0];
            // Process arguments from URL
            const userParams = vtkURLExtract.extractURLParameters();

            // Background handling
            if (userParams.background) {
                background = userParams.background.split(',').map((s) => Number(s));
            }
            const selectorClass =
                background.length === 3 && background.reduce((a, b) => a + b, 0) < 1.5
                    ? style.dark
                    : style.light;
            // lut
            const lutName = userParams.lut || 'erdc_rainbow_bright';

            // field
            const field = userParams.field || '';


            const updateCamera = camera => {
                ['zoom', 'pitch', 'elevation', 'yaw', 'azimuth', 'roll', 'dolly'].forEach(
                    (key) => {
                        if (userParams[key]) {
                            camera[key](userParams[key]);
                        }
                        renderWindow.render();
                    }
                );
            }

            const preventDefaults = e => {
                e.preventDefault();
                e.stopPropagation();
            }



            const rootControllerContainer = document.createElement('div');
            rootControllerContainer.setAttribute('class', style.rootController);

            const addDataSetButton = document.createElement('img');
            addDataSetButton.setAttribute('class', style.button);
            // addDataSetButton.setAttribute('src', icon);
            addDataSetButton.addEventListener('click', () => {
                const isVisible = rootControllerContainer.style.display !== 'none';
                rootControllerContainer.style.display = isVisible ? 'none' : 'flex';
            });

            const fpsMonitor = vtkFPSMonitor.newInstance();
            const fpsElm = fpsMonitor.getFpsMonitorContainer();
            fpsElm.classList.add(style.fpsMonitor);

            const iOS = /iPad|iPhone|iPod/.test(window.navigator.platform);

            if (iOS) {
                document.querySelector('body').classList.add('is-ios-device');
            }

            const emptyContainer = container => {
                fpsMonitor.setContainer(null);
                while (container.firstChild) {
                    container.removeChild(container.firstChild);
                }
            }

            const createViewer = container => {
                fullScreenRenderWindow = vtkFullScreenRenderWindow.newInstance({
                    background,
                    rootContainer: vtkContainerUrl.value,
                });
                renderer = fullScreenRenderWindow.getRenderer();
                renderWindow = fullScreenRenderWindow.getRenderWindow();
                renderWindow.getInteractor().setDesiredUpdateRate(15);

                container.appendChild(rootControllerContainer);
                container.appendChild(addDataSetButton);

                scalarBarActor = vtkScalarBarActor.newInstance();
                renderer.addActor(scalarBarActor);

                if (userParams.fps) {
                    if (Array.isArray(userParams.fps)) {
                        fpsMonitor.setMonitorVisibility(...userParams.fps);
                        if (userParams.fps.length === 4) {
                            fpsMonitor.setOrientation(userParams.fps[3]);
                        }
                    }
                    fpsMonitor.setRenderWindow(renderWindow);
                    fpsMonitor.setContainer(container);
                    fullScreenRenderWindow.setResizeCallback(fpsMonitor.update);
                }
            }

            const createPipeline = (fileName, fileContents) => {
                const presetSelector = document.createElement('select');
                presetSelector.setAttribute('class', selectorClass);
                presetSelector.innerHTML = vtkColorMaps.rgbPresetNames
                    .map(
                        (name) =>
                            `<option value="${name}" ${lutName === name ? 'selected="selected"' : ''
                            }>${name}</option>`
                    )
                    .join('');

                const representationSelector = document.createElement('select');
                representationSelector.setAttribute('class', selectorClass);
                representationSelector.innerHTML = [
                    '隐藏:0:-1:0',
                    'Points:1:0:0',
                    'Wireframe:1:1:0',
                    'Surface1:2:0',
                    'Surface with Edge:1:2:1',
                ]
                    .map(
                        (name, idx) =>
                            `<option value="${idx === 0 ? 0 : 1}:${idx < 4 ? idx - 1 : 2}:${idx === 4 ? 1 : 0
                            }">${name}</option>`
                    )
                    .join('');
                representationSelector.value = '1:2:0';

                const colorBySelector = document.createElement('select');
                colorBySelector.setAttribute('class', selectorClass);

                const componentSelector = document.createElement('select');
                componentSelector.setAttribute('class', selectorClass);
                componentSelector.style.display = 'none';

                const opacitySelector = document.createElement('input');
                opacitySelector.setAttribute('class', selectorClass);
                opacitySelector.setAttribute('type', 'range');
                opacitySelector.setAttribute('value', '100');
                opacitySelector.setAttribute('max', '100');
                opacitySelector.setAttribute('min', '1');

                const labelSelector = document.createElement('label');
                labelSelector.setAttribute('class', selectorClass);
                labelSelector.innerHTML = fileName;

                const immersionSelector = document.createElement('button');
                immersionSelector.setAttribute('class', selectorClass);
                immersionSelector.innerHTML = 'Start AR';

                const controlContainer = document.createElement('div');
                controlContainer.setAttribute('class', style.control);
                controlContainer.appendChild(labelSelector);
                controlContainer.appendChild(representationSelector);
                controlContainer.appendChild(presetSelector);
                controlContainer.appendChild(colorBySelector);
                controlContainer.appendChild(componentSelector);
                controlContainer.appendChild(opacitySelector);

                if (
                    navigator.xr !== undefined &&
                    navigator.xr.isSessionSupported('immersive-ar') &&
                    fullScreenRenderWindow.getApiSpecificRenderWindow().getXrSupported()
                ) {
                    controlContainer.appendChild(immersionSelector);
                }
                rootControllerContainer.appendChild(controlContainer);

                // VTK pipeline
                const vtpReader = vtkXMLPolyDataReader.newInstance();
                vtpReader.parseAsArrayBuffer(fileContents);

                const lookupTable = vtkColorTransferFunction.newInstance();
                const source = vtpReader.getOutputData(0);
                const mapper = vtkMapper.newInstance({
                    interpolateScalarsBeforeMapping: false,
                    useLookupTableScalarRange: true,
                    lookupTable,
                    scalarVisibility: false,
                });
                const actor = vtkActor.newInstance();
                const scalars = source.getPointData().getScalars();
                const dataRange = [].concat(scalars ? scalars.getRange() : [0, 1]);
                let activeArray = vtkDataArray;

                // --------------------------------------------------------------------
                // Color handling
                // --------------------------------------------------------------------

                function applyPreset() {
                    const preset = vtkColorMaps.getPresetByName(presetSelector.value);
                    lookupTable.applyColorMap(preset);
                    lookupTable.setMappingRange(dataRange[0], dataRange[1]);
                    lookupTable.updateRange();
                    renderWindow.render();
                }
                applyPreset();
                presetSelector.addEventListener('change', applyPreset);

                // --------------------------------------------------------------------
                // Representation handling
                // --------------------------------------------------------------------

                function updateRepresentation(event) {
                    const [visibility, representation, edgeVisibility] = event.target.value
                        .split(':')
                        .map(Number);
                    actor.getProperty().set({ representation, edgeVisibility });
                    actor.setVisibility(!!visibility);
                    renderWindow.render();
                }
                representationSelector.addEventListener('change', updateRepresentation);
                // --------------------------------------------------------------------
                // Opacity handling
                // --------------------------------------------------------------------

                function updateOpacity(event) {
                    const opacity = Number(event.target.value) / 100;
                    actor.getProperty().setOpacity(opacity);
                    renderWindow.render();
                }

                opacitySelector.addEventListener('input', updateOpacity);

                // --------------------------------------------------------------------
                // ColorBy handling
                // --------------------------------------------------------------------

                const colorByOptions = [{ value: ':', label: 'Solid color' }].concat(
                    source
                        .getPointData()
                        .getArrays()
                        .map((a) => ({
                            label: `(p) ${a.getName()}`,
                            value: `PointData:${a.getName()}`,
                        })),
                    source
                        .getCellData()
                        .getArrays()
                        .map((a) => ({
                            label: `(c) ${a.getName()}`,
                            value: `CellData:${a.getName()}`,
                        }))
                );
                colorBySelector.innerHTML = colorByOptions
                    .map(
                        ({ label, value }) =>
                            `<option value="${value}" ${field === value ? 'selected="selected"' : ''
                            }>${label}</option>`
                    )
                    .join('');

                function updateColorBy(event) {
                    const [location, colorByArrayName] = event.target.value.split(':');
                    const interpolateScalarsBeforeMapping = location === 'PointData';
                    let colorMode = ColorMode.DEFAULT;
                    let scalarMode = ScalarMode.DEFAULT;
                    const scalarVisibility = location.length > 0;
                    if (scalarVisibility) {
                        const newArray =
                            source[`get${location}`]().getArrayByName(colorByArrayName);
                        activeArray = newArray;
                        const newDataRange = activeArray.getRange();
                        dataRange[0] = newDataRange[0];
                        dataRange[1] = newDataRange[1];
                        colorMode = ColorMode.MAP_SCALARS;
                        scalarMode =
                            location === 'PointData'
                                ? ScalarMode.USE_POINT_FIELD_DATA
                                : ScalarMode.USE_CELL_FIELD_DATA;

                        const numberOfComponents = activeArray.getNumberOfComponents();
                        if (numberOfComponents > 1) {
                            // always start on magnitude setting
                            if (mapper.getLookupTable()) {
                                const lut = mapper.getLookupTable();
                                lut.setVectorModeToMagnitude();
                            }
                            componentSelector.style.display = 'block';
                            const compOpts = ['Magnitude'];
                            while (compOpts.length <= numberOfComponents) {
                                compOpts.push(`Component ${compOpts.length}`);
                            }
                            componentSelector.innerHTML = compOpts
                                .map((t, index) => `<option value="${index - 1}">${t}</option>`)
                                .join('');
                        } else {
                            componentSelector.style.display = 'none';
                        }
                        scalarBarActor.setAxisLabel(colorByArrayName);
                        scalarBarActor.setVisibility(true);
                    } else {
                        componentSelector.style.display = 'none';
                        scalarBarActor.setVisibility(false);
                    }
                    mapper.set({
                        colorByArrayName,
                        colorMode,
                        interpolateScalarsBeforeMapping,
                        scalarMode,
                        scalarVisibility,
                    });
                    applyPreset();
                }
                colorBySelector.addEventListener('change', updateColorBy);
                updateColorBy({ target: colorBySelector });

                function updateColorByComponent(event) {
                    if (mapper.getLookupTable()) {
                        const lut = mapper.getLookupTable();
                        if (event.target.value === -1) {
                            lut.setVectorModeToMagnitude();
                        } else {
                            lut.setVectorModeToComponent();
                            lut.setVectorComponent(Number(event.target.value));
                            const newDataRange = activeArray.getRange(Number(event.target.value));
                            dataRange[0] = newDataRange[0];
                            dataRange[1] = newDataRange[1];
                            lookupTable.setMappingRange(dataRange[0], dataRange[1]);
                            lut.updateRange();
                        }
                        renderWindow.render();
                    }
                }
                componentSelector.addEventListener('change', updateColorByComponent);

                // --------------------------------------------------------------------
                // Immersion handling
                // --------------------------------------------------------------------

                function toggleAR() {
                    const SESSION_IS_AR = true;
                    if (immersionSelector.textContent === 'Start AR') {
                        fullScreenRenderWindow.setBackground([...background, 0]);
                        fullScreenRenderWindow
                            .getApiSpecificRenderWindow()
                            .startXR(SESSION_IS_AR);
                        immersionSelector.textContent = 'Exit AR';
                    } else {
                        fullScreenRenderWindow.setBackground([...background, 255]);
                        fullScreenRenderWindow.getApiSpecificRenderWindow().stopXR(SESSION_IS_AR);
                        immersionSelector.textContent = 'Start AR';
                    }
                }
                immersionSelector.addEventListener('click', toggleAR);

                // --------------------------------------------------------------------
                // Pipeline handling
                // --------------------------------------------------------------------

                actor.setMapper(mapper);
                mapper.setInputData(source);
                renderer.addActor(actor);

                scalarBarActor.setScalarsToColors(mapper.getLookupTable());

                // Manage update when lookupTable change
                const debouncedRender = debounce(renderWindow.render, 10);
                lookupTable.onModified(debouncedRender, -1);

                // First render
                renderer.resetCamera();
                renderWindow.render();

                context.value = {
                    actor,
                    mapper,
                    source,
                    lookupTable,
                    renderer,
                    renderWindow,
                    fullScreenRenderWindow,
                    scalarBarActor
                };

                // Update stats
                fpsMonitor.update();
            }
            function load(container, options) {
                autoInit = false;
                emptyContainer(container);

                const urls = [].concat(options.fileURL);
                console.log(urls);
                const progressContainer = document.createElement('div');
                progressContainer.setAttribute('class', style.progress);
                container.appendChild(progressContainer);

                const progressCallback = (progressEvent) => {
                    if (progressEvent.lengthComputable) {
                        const percent = Math.floor(
                            (100 * progressEvent.loaded) / progressEvent.total
                        );
                        progressContainer.innerHTML = `Loading ${percent}%`;
                    } else {
                        progressContainer.innerHTML = formatBytesToProperUnit(
                            progressEvent.loaded
                        );
                    }
                };

                createViewer(container);
                const nbURLs = urls.length;
                let nbLoadedData = 0;

                /* eslint-disable no-loop-func */
                while (urls.length) {
                    const url = urls.pop();
                    const name = Array.isArray(userParams.name)
                        ? userParams.name[urls.length]
                        : `Data ${urls.length + 1}`;
                    HttpDataAccessHelper.fetchBinary(url, {
                        progressCallback,
                    }).then((binary) => {
                        nbLoadedData++;
                        if (nbLoadedData === nbURLs) {
                            container.removeChild(progressContainer);
                        }
                        createPipeline(name, binary);
                        updateCamera(renderer.getActiveCamera());
                    });
                }
            }

            const initLocalFileLoader = container => {
                const exampleContainer = vtkContainerUrl.value;
                const rootBody = document.querySelector('body');
                const myContainer = vtkContainerUrl.value || container || exampleContainer || rootBody;

                if (myContainer !== container) {
                    myContainer.classList.add(style.fullScreen);
                }
                const fileContainer = document.createElement('div');
                fileContainer.innerHTML = `<div class="${style.bigFileDrop}"/><input type="file" multiple accept=".vtp" style="display: none;"/>`;
                myContainer.appendChild(fileContainer);

                const fileInput = fileContainer.querySelector('input');

                function handleFile(e) {
                    preventDefaults(e);
                    const dataTransfer = e.dataTransfer;
                    const files = e.target.files || dataTransfer.files;
                    if (files.length > 0) {
                        myContainer.removeChild(fileContainer);
                        load(myContainer, { files });
                        txt.value = false
                    }
                }

                fileInput.addEventListener('change', handleFile);
                fileContainer.addEventListener('drop', handleFile);
                fileContainer.addEventListener('click', (e) => fileInput.click());
                fileContainer.addEventListener('dragover', preventDefaults);
            }


            let baseUrl = 'http://localhost:9999/note/'
            if (process.env.NODE_ENV !== 'development') {
                baseUrl = 'https://ajn404.gitee.io/note/'
            }
            if(props.url){
                let url = []
                baseUrl+='data/vtp/'
                props.url.forEach(item=>{
                    url.push(baseUrl+item)
                })
                userParams.fileURL = url
                console.log(userParams.fileURL);
            }
            else
            userParams.fileURL = `${baseUrl}data/diskout-stream-binary-zlib.vtp`
            console.log(userParams);

            if (userParams.url || userParams.fileURL) {
                const exampleContainer = vtkContainerUrl.value;
                const myContainer = exampleContainer;

                if (myContainer) {
                    myContainer.classList.add(style.fullScreen);
                }

                load(myContainer, userParams);
            }

            setTimeout(() => {
                if (autoInit) {
                    initLocalFileLoader(vtkContainerUrl.value);
                }
            }, 100);

        }

    })
}

onMounted(() => {
    if (isClient) {
        let vtk = window["vtk"]
        if (!vtk) {
            loadInstance = loading();
            import("https://unpkg.com/vtk.js/Sources/@25.1.0/vtk.js/Sources/").then(() => {
                loadViewer()
            });
        }
        else {
            loadViewer()
        }
    }
});

onBeforeUnmount(() => {
    if (context.value && isClient) {
        const {
            fullScreenRenderWindow,
            renderWindow,
            renderer,
            scalarBarActor
        } = context.value;
        renderer.delete();
        renderWindow.delete();
        scalarBarActor.delete();
        window.removeEventListener("resize", fullScreenRenderWindow.resize);
        fullScreenRenderWindow.delete();
        context.value = null;
    }
});

</script>

<style lang="scss" scoped>
.geometry-viewer {
    min-width: 100%;
}

</style>
  
    