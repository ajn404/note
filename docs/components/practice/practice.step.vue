<template>
    <div class="practice fullscreen" ref="container">
    </div>
</template>

<script lang="ts" setup>
import Sketch from "@scripts/practice.setup.ts";
import * as THREE from "three";
import { ref, nextTick, onUnmounted,reactive } from "vue";

// import shader
import fs from '@shaders/practice/usingStepDrawCircle/fragment.glsl'
import vs from '@shaders/practice/usingStepDrawCircle/vertex.glsl'
import squareFs from '@shaders/practice/usingStepDrawSquare/fragment.glsl'
import squareVs from '@shaders/practice/usingStepDrawSquare/vertex.glsl'

import uTimeFs from '@shaders/practice/usingStepDrawSquare/fragment_utime.glsl'


//@shaders/practice/usingTiling/
import tilingFs from '@shaders/practice/usingTiling/fragment.glsl'
import tilingVs from '@shaders/practice/usingTiling/vertex.glsl'

const props = defineProps({
  type:String
});

let fragmentShader : string = fs,vertexShader:string  = vs;
if(props.type){
    switch(props.type){
        case 'Square':{
            fragmentShader = squareFs;
            vertexShader = squareVs;
            break;
        } 
        case 'utime':{
            fragmentShader = uTimeFs;
            break;
        }

        case 'tiling':{
            fragmentShader = tilingFs;
            vertexShader = tilingVs;
            break;
        }
    }  
}

const container = ref(null);
const uniforms = reactive({

    u_time: { value: 0.0 },
    u_mouse: {
        value: {
            x: 0.0,
            y: 0.0
        }
    },
    u_resolution: {
        value: {
            x: 0.0,
            y: 0.0
        }
    },
    u_color: {
        value: new THREE.Color(0x00fff0)
    },
    u_frame: {
        type: "i",
        value: -1.
    },
    iChannel0: { type: 't', value: '' },
    iChannel1: { type: 't', value: '' },
});

const clock = new THREE.Clock();

let sketch = new Sketch();

sketch.animate = function () {
    // this.mesh.rotation.x += this.time / 1000;
    // this.mesh.rotation.y += this.time / 1000;
    this.render();
    uniforms.u_time.value = clock.getElapsedTime();
    uniforms.u_frame.value++;
    if (this.container.getBoundingClientRect().width > 0)
        requestAnimationFrame(this.animate.bind(this));
    else return;
};
sketch.move = function (evt: any) {
    uniforms.u_mouse.value.x = evt.touches ? evt.touches[0].clientX : evt.clientX;
    uniforms.u_mouse.value.y = evt.touches ? evt.touches[0].clientY : evt.clientY;
};

if ('ontouchstart' in window) {
    document.addEventListener('touchmove', sketch.move);
} else {
    document.addEventListener('mousemove', sketch.move);
}

sketch.resize = function () {
    if (uniforms.u_resolution !== undefined) {
        uniforms.u_resolution.value.x = this.width;
        uniforms.u_resolution.value.y = this.height;
    }
    uniforms.u_frame.value = 0;
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.render();
}

nextTick(() => {
    const options = {
    container: container.value || document.body
    };
    sketch.addObject = function () {
            this.geometry = new THREE.PlaneGeometry(2, 2);
            this.material = new THREE.ShaderMaterial(
                {
                    uniforms: uniforms,
                    side: THREE.DoubleSide,

                    fragmentShader: fragmentShader,
                    vertexShader: vertexShader,
                }
            );
            this.mesh = new THREE.Mesh(this.geometry, this.material);
            this.scene.add(this.mesh);
        }
    sketch.init(options);
    sketch.camera.position.z = 0.52;
})


onUnmounted(() => {
    sketch.beforeDestroy();
})

</script>