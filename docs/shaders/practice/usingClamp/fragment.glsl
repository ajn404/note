
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform int u_frame;
varying vec3 v_position;

void main(){
  vec3 color = vec3(0.0);
  color.r = clamp(v_position.x, 0.0 ,1.0 );
  color.g = clamp(v_position.y, 0.0 ,1.0);
  color.b = clamp(v_position.x, 0.25 , 0.75 );
  gl_FragColor=vec4(color,1.0);
}