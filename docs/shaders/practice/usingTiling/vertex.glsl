varying vec2 vUv;
varying vec3 v_position;

void main(){
    v_position = position;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position*0.4,1.0);
}