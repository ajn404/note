uniform vec3 u_color;

uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;

void main(){
    // vec2 v = u_mouse/u_resolution;

    // vec3 color = vec3(u_mouse.x/u_resolution.x,0.,u_mouse.y/u_resolution.y);
    // vec3 color = vec3(v.x,0.,v.y);

    vec3 color = vec3((sin(u_time)+1.)/2.,0.,(cos(u_time)+1.)/2.);

    gl_FragColor = vec4(color ,1.0 );
}