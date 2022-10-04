<template>
    <div class="practice_blendingColor fullscreen" ref="container">
    </div>
</template>

<script lang="ts" setup>
import Sketch from "@scripts/practice.setup.ts";
import * as THREE from "three";
import { ref, nextTick ,onUnmounted ,defineProps } from "vue";
import fs from '@shaders/practice/shapingFunction/fragment.glsl'
import vs from '@shaders/practice/shapingFunction/vertex.glsl'


// import varingsFs from '@shaders/practice/blendingColor/varyingFs.glsl';
// import varingsVs from '@shaders/practice/blendingColor/varyingVs.glsl';

import rtsFs from '@shaders/practice/rotatingTheShape/fragment.glsl'
import rtsVs from '@shaders/practice/rotatingTheShape/vertex.glsl'


const props = defineProps({type:String});

let fragmentShader : string = fs,vertexShader : string  = vs ;
switch(props.type){
    case "rts":{
        fragmentShader = rtsFs;
        vertexShader = rtsVs;
        break;
    }
    default:{
        break;
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
    }
};
const clock = new THREE.Clock();

let sketch = new Sketch();
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
};
sketch.animate = function () {
    // this.mesh.rotation.x += this.time / 1000;
    // this.mesh.rotation.y += this.time / 1000;
    this.render();
    uniforms.u_time.value = clock.getElapsedTime();
    if(this.container.getBoundingClientRect().width>0)
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

    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.render();


}

nextTick(() => {
    const options = {
    container: container.value || document.body
    };
    sketch.init(options);
})

onUnmounted(()=>{
    sketch.beforeDestroy();
})





</script>