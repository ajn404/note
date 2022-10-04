
void main(){
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position*0.4,1.0);
}