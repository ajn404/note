
varying vec3 v_position;
varying vec2 vUv;
uniform float u_time;
uniform vec2 u_resolution;
uniform float u_frame;

#define HPI 1.57079632679
#define tiles 10.0

float hash21(in vec2 st)
{
    //fract(x) 获取x的小数部分
    //dot(x,y)返回x,y的点积
    //两个向量a = [a1, a2,…, an]和b = [b1, b2,…, bn]的点积定义为：
    // a·b=a1b1+a2b2+……+anbn。  
    return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);
}

float sdfTile(in vec2 p,float r , float t, int rot)
{
    p -= 0.5;
    //mat2 2*2 浮点矩阵
    p *= mat2(cos(float(rot)*HPI),-sin(float(rot)*HPI),sin(float(rot)*HPI),cos(float(rot)*HPI));
    p += 0.5;
    return abs(min(length(p),length(p - vec2(1.0)))-r)-t;
}

vec2 stepPoint(vec2 p , float c)
{
    return vec2(floor(p.x * c)/c,floor(p.y * c)/c);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = fragCoord/u_resolution.xy;
    uv-=0.5;
    uv.x*=u_resolution.x/u_resolution.y;
    uv+=0.5;
    uv.x+= u_time*0.1;
    float px = tiles/u_resolution.y;
    vec2 titleUv = fract(uv*tiles);
    float tile = hash21(stepPoint(uv,tiles));
    float col = smoothstep(0.0,px,sdfTile(titleUv,0.5,0.05,int(round(tile))) );
    fragColor = vec4(vec3(col),1.0);
}

void main(){
    mainImage(gl_FragColor,vUv * u_resolution.xy);
}