uniform vec3 u_color;

uniform vec2 u_mouse;
uniform vec2 u_resolution;
//传递长和宽
uniform float u_time;

void main(){
    // vec2 v = u_mouse/u_resolution;

    // vec3 color = vec3(u_mouse.x/u_resolution.x,0.,u_mouse.y/u_resolution.y);
    // vec3 color = vec3(v.x,0.,v.y);


    vec2 uv = gl_FragCoord.xy/u_resolution;
    //uv.y:片元垂直位置的权重
    //自下而上
    vec3 color = mix(vec3(228./255.,181./255.,163./255.),vec3(0.,0.,0),uv.y);
    // mix(x,y,a) = x*(1-a)+y*a

    gl_FragColor = vec4(color ,1.0 );
}