void main(){
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position*0.5,1.0);
}