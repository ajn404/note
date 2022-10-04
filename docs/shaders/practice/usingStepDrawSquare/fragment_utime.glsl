uniform float u_time;
varying vec3 v_position;

float rect(vec2 pt,vec2 size,vec2 center)
{
    vec2 p = pt - center;
    vec2 halfSize = size * 0.5;
    float horz = step(-halfSize.y,p.x) - step(halfSize.y,p.x);
    float vert = step(-halfSize.y,p.y) - step(halfSize.y,p.y);
    return horz*vert;
}
void main(){
    float radius = 0.5;
    vec2 center = vec2(cos(u_time)*radius,sin(u_time)*radius);
    //sin(0) 0,cos(0) 1
    float inRect = rect(v_position.xy,vec2(0.5,0.5),center);
    vec3 color = vec3(0.2,0.3,0.5)*inRect;
    gl_FragColor = vec4(color,1.0 );
}