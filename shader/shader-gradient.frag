precision highp float; varying vec2 vPos;
uniform vec2 offset;
uniform vec3 colorCenter;
uniform vec3 colorBackground;

void main() {
  vec2 st = vPos.xy + offset.xy;
  float mixValue = distance(st,vec2(0,1));
  vec3 color = mix(colorCenter,colorBackground,mixValue);

  gl_FragColor = vec4(color,mixValue);
}