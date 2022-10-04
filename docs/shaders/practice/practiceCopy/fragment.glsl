
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform int u_frame;

void main(){
  float bug=0.0;
  vec3 tile=texture2D(iChannel0,gl_FragCoord.xy/u_resolution,0.).xyz;
  vec4 col=vec4(tile, 1.0);
  //if(....)
  bug=0.01;
  col.x+=bug;
  gl_FragColor=col;
}