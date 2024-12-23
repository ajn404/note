
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform int u_frame;
varying vec3 v_position;


//逆时针
mat2 getRotationMatrix(float theta){
    float s = sin(theta);
    float c = cos(theta);
    return mat2(c, -s, s, c);
}



float rect(vec2 pt, vec2 size, vec2 center)
{
    vec2 p = pt - center;
    vec2 halfsize =  size * 0.5;
    float horz = step(-halfsize.x, p.x) - step(halfsize.x, p.x);
    float vert = step(-halfsize.y, p.y) - step(halfsize.y, p.y);
    return horz * vert;
}

void main(void)
{
    // float radius = 0.5;
    // float time = u_time * 2.0;
    // vec2 center = vec2(cos(time)*radius,sin(time)*radius);
    // float inRect = rect(v_position.xy, vec2(0.5), center);
    // vec3 color = vec3(1.0,1.0,0.0)*inRect;
    vec2 center = vec2(0);
    mat2 mat = getRotationMatrix(u_time);
    vec2 pt = (mat * (v_position.xy-center))+center;
    float inRect = rect(pt,vec2(0.5),center);
    vec3 color = vec3(1.0,0.0,1.0)*inRect;
    gl_FragColor = vec4( color, 1.0 );
}