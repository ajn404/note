
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform int u_frame;
varying vec3 v_position;


float rect(vec2 pt, vec2 size ,vec2 center){
  vec2 p = pt - center;
  vec2 halfSize = size * 0.5;
  float horz = step(-halfSize.x, p.x ) - step(halfSize.x,p.x ) ;
  float vert = step(-halfSize.y,p.y) - step(halfSize.y,p.y);
  return horz*vert;
}

void main(){
  float inRect1 = rect(v_position.xy,vec2(0.3,0.3),vec2(0.5,0.5));
  float inRect2 = rect(v_position.xy,vec2(1.1,0.5),vec2(0.5,-0.5));//设置宽度为1.0后放大边缘会有一条线
  vec3 color = vec3(0.4157, 0.2941, 0.2941) * inRect1 + vec3(1.0,1.0,1.0) * inRect2;
  gl_FragColor=vec4(color,1.0);
}