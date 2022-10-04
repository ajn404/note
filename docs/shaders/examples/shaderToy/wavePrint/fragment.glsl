varying vec3 v_position;
uniform float u_time;
uniform vec2 u_resolution;

void main(){
    vec2 uv = gl_FragCoord.xy/u_resolution;
    vec3 col = 0.5 + 0.5*cos(u_time+uv.xyx+vec3(0,2,4));
    float cd = 40.0;
    float lw = 500.0;
    float a = sin(u_time/20.0)*1.0;
    float r = ceil(uv.x*cd)+ceil(uv.y*cd);
    vec3 col2 = vec3( sin( ((uv.x*lw*sin(r*a))+(uv.y*lw*cos(r*a)))) );
    gl_FragColor = vec4(ceil((0.3-col.rrr-col2)),1.0);
}