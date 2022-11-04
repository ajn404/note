<template>
    <div class="pdr-reader">
        <div class="vtk-container" ref="vtkContainer" />
    </div>
</template>
    
<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { isClient } from "@vueuse/core";
import { ElLoading } from "element-plus";
let vtkFullScreenRenderWindow,
    vtkActor,
    vtkPDBReader,
    vtkSphereMapper,
    vtkStickMapper,
    vtkMapper,
    vtkMTLReader,
    vtkOBJReader,
    vtkMoleculeToRepresentation;
const vtkContainer = ref(null);
const context = ref(null);

const loading = () => {
    return ElLoading.service({
        lock: true,
        text: "加载中",
        fullscreen: true,
        background: "rgba(0, 0, 0, 0.7)",
    });
};
let loadInstance;   
const loadModel = () => {
    loadInstance.close()    
    vtkFullScreenRenderWindow = vtk.Rendering.Misc.vtkFullScreenRenderWindow;
    vtkActor = vtk.Rendering.Core.vtkActor;
    vtkMapper = vtk.Rendering.Core.vtkMapper
    vtkPDBReader = vtk.IO.Misc.vtkPDBReader;
    vtkMTLReader = vtk.IO.Misc.vtkMTLReader;
    vtkOBJReader = vtk.IO.Misc.vtkOBJReader;

    vtkSphereMapper = vtk.Rendering.Core.vtkSphereMapper;
    vtkMoleculeToRepresentation =
        vtk.Filters.General.vtkMoleculeToRepresentation;
    vtkStickMapper = vtk.Rendering.Core.vtkStickMapper;

    nextTick(() => {
        if (!context.value) {
            const fullScreenRenderer = vtkFullScreenRenderWindow.newInstance({
                rootContainer: vtkContainer.value,
                background: [0.5, 0.5, 0.5],
            });
            const renderer = fullScreenRenderer.getRenderer();
            const renderWindow = fullScreenRenderer.getRenderWindow();

            
            
            const reader = vtkOBJReader.newInstance({ splitMode: 'usemtl' });
            const materialsReader = vtkMTLReader.newInstance();
            const scene = [];


            const filter = vtkMoleculeToRepresentation.newInstance();
            const sphereMapper = vtkSphereMapper.newInstance();
            const stickMapper = vtkStickMapper.newInstance();
            const sphereActor = vtkActor.newInstance();
            const stickActor = vtkActor.newInstance();

            const resetCamera = renderer.resetCamera;
            const render = renderWindow.render;

            // filter.setInputConnection(reader.getOutputPort());
            // filter.setHideElements(["H"]);

            // // render sphere
            // sphereMapper.setInputConnection(filter.getOutputPort(0));
            // sphereMapper.setScaleArray(filter.getSphereScaleArrayName());
            // sphereActor.setMapper(sphereMapper);

            // // render sticks
            // stickMapper.setInputConnection(filter.getOutputPort(1));
            // stickMapper.setScaleArray("stickScales");
            // stickMapper.setOrientationArray("orientation");
            // stickActor.setMapper(stickMapper);

            // reader.setUrl(`/note/data/2LYZ.pdb`).then(() => {
            //     renderer.resetCamera();
            //     renderWindow.render();
            // });

            // renderer.addActor(sphereActor);
            // renderer.addActor(stickActor);
            // renderer.resetCamera();
            // renderWindow.render();


function onClick(event) {
  const el = event.target;
  const index = Number(el.dataset.index);
  const actor = scene[index].actor;
  const visibility = actor.getVisibility();

  actor.setVisibility(!visibility);
  if (visibility) {
    el.classList.remove('visible');
  } else {
    el.classList.add('visible');
  }
  render();
}

materialsReader
  .setUrl(`/note/model/diaona.mtl`)
  .then(() => {
    reader
      .setUrl(`/note/model/diaona.obj`)
      .then(() => {
        const size = reader.getNumberOfOutputPorts();
        for (let i = 0; i < size; i++) {
          const polydata = reader.getOutputData(i);
          const name = polydata.get('name').name;
          const mapper = vtkMapper.newInstance();
          const actor = vtkActor.newInstance();

          actor.setMapper(mapper);
          mapper.setInputData(polydata);

          materialsReader.applyMaterialToActor(name, actor);
          renderer.addActor(actor);

          scene.push({ name, polydata, mapper, actor });
        }
        resetCamera();
        render();

        // Build control ui
        const htmlBuffer = [
          '<style>.visible { font-weight: bold; } .click { cursor: pointer; min-width: 150px;}</style>',
        ];
        scene.forEach((item, idx) => {
          htmlBuffer.push(
            `<div class="click visible" data-index="${idx}">${item.name}</div>`
          );
        });

        fullScreenRenderer.addController(htmlBuffer.join('\n'));
        const nodes = document.querySelectorAll('.click');
        for (let i = 0; i < nodes.length; i++) {
          const el = nodes[i];
          el.onclick = onClick;
        }
      });
  });


            context.value = {
                fullScreenRenderer,
                renderWindow,
                renderer,
                reader,
                filter,
                sphereMapper,
                stickMapper,
                sphereActor,
                stickActor,
            };
        }
    });
}

onMounted(() => {
    if (isClient) {
        loadInstance = loading()
        let vtk = window["vtk"]
        if (!vtk)
            import("https://unpkg.com/vtk.js@25.1.0/vtk.js").then(() => {

                loadModel()
            });
        else {
            loadModel()
        }
    }
});

onBeforeUnmount(() => {
    if (context.value && isClient) {
        const {
            fullScreenRenderer,
            renderWindow,
            renderer,
            reader,
            filter,
            sphereMapper,
            stickMapper,
            sphereActor,
            stickActor,
        } = context.value;

        renderer.delete();
        filter.delete();
        sphereMapper.delete();
        stickMapper.delete();
        sphereActor.delete();
        stickActor.delete();
        reader.delete();

        // window.removeEventListener('resize',renderWindow.resize)
        // renderWindow.unbindEvents()
        renderWindow.delete();
        window.removeEventListener("resize", fullScreenRenderer.resize);
        fullScreenRenderer.delete();
        context.value = null;
    }
});
</script>
    
<style lang="scss" scoped>
.pdr-reader {
    overflow: hidden;
    min-width: 100%;
    min-height: calc(100vh - 3.6rem);

    :deep(.vtk-container) {
        position: relative;

        &>div {
            position: fixed !important;
            z-index: 1;
            top: 3.6rem !important;
        }
    }
}
</style>
    