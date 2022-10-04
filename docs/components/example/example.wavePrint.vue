

<template>
    <div class="example_lightSaberDuel fullscreen" ref="container">
    </div>
</template>

<script lang="ts" setup>
import Sketch from "@scripts/practice.setup.ts";
import * as THREE from "three";
import { ref, nextTick, onUnmounted } from "vue";
// import shader
import fs from '@shaders/examples/shaderToy/wavePrint/fragment.glsl'
import vs from '@shaders/examples/shaderToy/wavePrint/vertex.glsl'
import cityFs from '@shaders/examples/shaderToy/fractalCity/fragment.glsl'
import cityVs from '@shaders/examples/shaderToy/fractalCity/vertex.glsl'
import priFs from '@shaders/examples/shaderToy/primitives/fragment.glsl'
import priVs from '@shaders/examples/shaderToy/primitives/vertex.glsl'

//simpleTruchetPattern
import stpFs from '@shaders/examples/shaderToy/simpleTruchetPattern/fragment.glsl'
import stpVs from '@shaders/examples/shaderToy/simpleTruchetPattern/vertex.glsl'

//simpleTruchetPattern
import edFs from '@shaders/examples/shaderToy/ed209/fragment.glsl'
import edVs from '@shaders/examples/shaderToy/ed209/vertex.glsl'
const props = defineProps({
  type:String
});

let fragmentShader : string = fs,vertexShader:string  = vs;
let doRotate  = true,geometryX = 6,geometryY=5;
if(props.type){
    switch(props.type){
        case 'Default':{
            fragmentShader = fs;
            vertexShader = vs;
            break;
        }
        case 'fractalCity':{
            fragmentShader = cityFs;
            vertexShader = cityVs;
            doRotate = false;
            geometryY=2;
            break;
        }
        case 'primitives':{
            fragmentShader = priFs;
            vertexShader = priVs;
            doRotate = false;
            geometryX = 1.92;
            geometryY = 1.08;
            break;
        }
        case 'simpleTruchetPattern':{
            fragmentShader = stpFs;
            vertexShader = stpVs;
            doRotate = false;
            geometryX = 5.6;
            geometryY = 3;
            break;
        }

        case 'ed209':{
            fragmentShader = edFs;
            vertexShader = edVs;
            doRotate = false;
            geometryX = 5.12;
            geometryY = 2.88;
            break;
        }

    }  
}
const container = ref(null);
const uniforms = {

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
};
const clock = new THREE.Clock();
const sketch = new Sketch();
sketch.animate = function () {
    // if(doRotate){
    //     this.mesh.rotation.x += this.time / 1000;
    //     this.mesh.rotation.y += this.time / 1000;
    //     this.mesh.rotation.z += this.time / 1000;
    // }
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

sketch.addObject = function () {

    this.geometry = new THREE.PlaneGeometry(geometryX, geometryY);
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

nextTick(() => {
    const options = {
        container: container.value || document.body
    };
    sketch.init(options);
})

onUnmounted(() => {
    sketch.beforeDestroy();
})





</script>