varying vec3 v_position;
varying vec2 vUv;
void main(){
    vUv = uv;
    v_position = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position*0.4,1.0);
}