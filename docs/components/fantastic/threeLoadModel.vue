<template>
    <div class="fullscreen" ref="container">
    </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, onUnmounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
interface optionsConfig {
    container: HTMLElement
}

class Sketch {
    time: number;
    geometry: any;
    material: any;
    mesh: any;
    scene: any;
    renderer: any;
    camera: any;
    container: any;
    width: any;
    height: any;
    control: any;

    init(options: optionsConfig) {
        this.time = 10;
        this.container = options.container;
        this.width = this.container.clientWidth || window.innerWidth;
        this.height = this.container.clientHeight || window.innerHeight;

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color('white');

        const fov = 45;
        const aspect = 2;  // the canvas default
        const near = 0.1;
        const far = 100;
        this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        this.camera.position.set(0, 10, 20);

        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        this.renderer.setSize(this.width, this.height);
        this.container.appendChild(this.renderer.domElement);

        this.control = new OrbitControls(this.camera, this.renderer.domElement);

        this.resize()
        addEventListener("resize", this.resize.bind(this), false)
        this.addObject();
        this.animate();
    }
    animate() {
        this.render();
        if (this.container.getBoundingClientRect().width > 0)
            requestAnimationFrame(this.animate.bind(this));
        else return;
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    resize() {
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.render();
    }

    addObject() {
        const objLoader = new OBJLoader();

        const mtlLoader = new MTLLoader();
        mtlLoader.load('/note/model/diaona.mtl', (mtl) => {
            mtl.preload();
            objLoader.setMaterials(mtl);
            objLoader.load('/note/model/diaona.obj', (root) => {
                this.scene.clear()
                this.scene.add(root);
            });
        })

    }

    beforeDestroy() {

        const disposeChild = (mesh: any) => {
            if (mesh instanceof THREE.Mesh) {
                if (mesh.geometry?.dispose) {
                    mesh.geometry.dispose();
                }
                if (mesh.material?.dispose) {
                    mesh.material.dispose();
                }
                if (mesh.material?.texture?.dispose) {
                    mesh.material.texture.dispose();
                }
            }
            if (mesh instanceof THREE.Group) {
                mesh.clear();
            }
            if (mesh instanceof THREE.Object3D) {
                mesh.clear();
            }
        }
        this.scene.traverse((item: any) => {
            disposeChild(item);
        })
        THREE.Cache.clear();
        this.scene.clear();
        this.renderer.dispose();
        this.renderer.forceContextLoss();
    }
}


const container = ref(null);
let sketch = new Sketch();



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