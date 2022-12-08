precision highp float;varying vec2 vPos;
uniform vec2 p;
uniform float r;
const int I=500;
void main(){
    vec2 c=p+vPos*r,z=c;
    float n=0.;
    for(int i=I;i>0;i--){
        if(z.x*z.x-z.y*z.y>4.){
            n=float(i)/float(I);
            break;
        }
        z=vec2(z.x*z.x-z.y*z.y,2.*z.x*z.y)+c;
    }
    gl_FragColor=vec4(.5-cos(n*17.)/2.,.5-cos(n*13.)/2.,.5-cos(n*23.)/2.,1.);
}