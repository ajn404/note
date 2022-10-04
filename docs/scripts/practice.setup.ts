import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface optionsConfig {
    container: HTMLElement
}
export default class Sketch {
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
        this.camera = new THREE.PerspectiveCamera(
            75,
            this.width / this.height,
            0.01,
            10
        );
        this.camera.position.z = 1;

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
    /**
     * 
     * @returns void
     */
    animate() {
        //   this.time += 0.05;
        this.mesh.rotation.x += this.time / 1000;
        this.mesh.rotation.y += this.time / 1000;
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
        this.geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        this.material = new THREE.MeshNormalMaterial();
        this.material = new THREE.ShaderMaterial(
            {
                fragmentShader: `
                    void main(){
                        gl_FragColor = vec4(1.0,0.,1,1.);
                    }
                `,
                vertexShader: `
                void main(){
                    gl_Position = projectionMatrix * modelViewMatrix * vec4 
                    (position,1.0);
                }`
            }
        );
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.mesh);
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

