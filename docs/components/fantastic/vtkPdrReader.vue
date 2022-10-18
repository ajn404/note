<template>
    <div class="pdr-reader">
      <div class="vtk-container" ref="vtkContainer" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
  import { isClient } from "@vueuse/core";
import { ElLoading } from "element-plus";
  
  // import Navbar from '@vuepress/theme-default/lib/client/components/Navbar.vue'
  let vtkFullScreenRenderWindow,
    vtkActor,
    vtkPDBReader,
    vtkSphereMapper,
    vtkStickMapper,
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

  onMounted(() => {
    if (isClient) {
      const loadInstance = loading()
  
      import("https://unpkg.com/vtk.js@25.1.0/vtk.js").then(() => {
  
        loadInstance.close()
        vtkFullScreenRenderWindow = vtk.Rendering.Misc.vtkFullScreenRenderWindow;
        vtkActor = vtk.Rendering.Core.vtkActor;
        vtkPDBReader = vtk.IO.Misc.vtkPDBReader;
        vtkSphereMapper = vtk.Rendering.Core.vtkSphereMapper;
        vtkMoleculeToRepresentation =
          vtk.Filters.General.vtkMoleculeToRepresentation;
        vtkStickMapper = vtk.Rendering.Core.vtkStickMapper;
  
        nextTick(() => {
          if (!context.value) {
            const fullScreenRenderer = vtkFullScreenRenderWindow.newInstance({
              rootContainer: vtkContainer.value,
            });
            const renderer = fullScreenRenderer.getRenderer();
            const renderWindow = fullScreenRenderer.getRenderWindow();
  
            const reader = vtkPDBReader.newInstance();
            const filter = vtkMoleculeToRepresentation.newInstance();
            const sphereMapper = vtkSphereMapper.newInstance();
            const stickMapper = vtkStickMapper.newInstance();
            const sphereActor = vtkActor.newInstance();
            const stickActor = vtkActor.newInstance();
  
            filter.setInputConnection(reader.getOutputPort());
            filter.setHideElements(["H"]);
  
            // render sphere
            sphereMapper.setInputConnection(filter.getOutputPort(0));
            sphereMapper.setScaleArray(filter.getSphereScaleArrayName());
            sphereActor.setMapper(sphereMapper);
  
            // render sticks
            stickMapper.setInputConnection(filter.getOutputPort(1));
            stickMapper.setScaleArray("stickScales");
            stickMapper.setOrientationArray("orientation");
            stickActor.setMapper(stickMapper);
  
            reader.setUrl(`/note/data/2LYZ.pdb`).then(() => {
              renderer.resetCamera();
              renderWindow.render();
            });
  
            renderer.addActor(sphereActor);
            renderer.addActor(stickActor);
            renderer.resetCamera();
            renderWindow.render();
  
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
      });
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
      & > div {
        position: fixed !important;
        z-index: 1  ;
        top: 3.6rem!important;
      }
    }
  }
  </style>
  