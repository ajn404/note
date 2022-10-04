uniform float u_time;
uniform vec2 u_resolution;
uniform float u_frame;
varying vec3 v_position;
varying vec2 vUv;

#define R u_resolution
#define repeat(p,r)(mod(p,r)-r/2.)

mat2 rot(float a){return mat2(cos(a),-sin(a),sin(a),cos(a));}

vec3 look(vec3 from,vec3 at,vec2 uv,float fov)
{
  vec3 z=normalize(at-from);
  vec3 x=normalize(cross(z,vec3(0,1,0)));
  vec3 y=cross(x,z);
  return normalize(z*fov+uv.x*x+uv.y*y);
}

const uint k=1103515245U;

vec3 hash(uvec3 x)
{
  x=((x>>8U)^x.yzx)*k;
  x=((x>>8U)^x.yzx)*k;
  x=((x>>8U)^x.yzx)*k;
  return vec3(x)*(1./float(0xffffffffU));
}

const float speed=.05;
const float falloff=1.75;
const float range=.5;
const float count=8.;

// globals
vec3 pp,ppp;
float mat,glow;


float map(vec3 p)
{
   float dist = 100.;
   float shape = 100.;
   vec3 pos = p;
   pp = p;
   ppp = p;// travel
   float px=p.x-u_time*speed;
   float ix=floor(px);
   p.x=repeat(px,1.); 
   // city
   float a=1.;
   float angle=196.+ix;
   for(float i=0.;i<count;++i)
    {
        p.xz*=rot(angle/a);
        p=abs(p)-range*a;
        shape=max(p.x,max(p.y,p.z));
        mat=shape<dist?i:mat;
        pp=i==7.?p:pp;
        ppp=i==6.?p:ppp;
        dist=min(dist,shape);
        a/=falloff;
    }
    dist=-dist;
    
    // columns
    shape=max(length(pp.xz)-.001,dist-.005);
    dist=min(dist,shape);
    
    // lights
    shape=max(length(ppp.xy)-.001,dist-.001);
    glow+=.0001/max(.0005,shape);
    
    // crop
    dist=max(dist,abs(pos.y-.1)-.2);
    
    return dist;
}

// from Inigo Quilez
float shadow(vec3 pos,vec3 at,float k)
{
  vec3 dir=normalize(at-pos);
  float maxt=length(at-pos);
  float f=1.;
  float t=.002;
  for(float i=0.;i<=1.;i+=1./30.)
{
    float dist=map(pos+dir*t);
    if(dist<.001)return 0.;
      f=min(f,k*dist/t);
      t+=dist;
      if(t>=maxt)break;
}
    return f;
}

void rect(out vec4 fragColor,in vec2 fragCoord){
fragColor=vec4(0.,0.,0.,0.); 
   const float frames=3.;
    for(float frame=0.;frame<frames;++frame)
{
        // coordinates
    vec2 uv=fragCoord/R.xy;
    vec2 p=2.*(fragCoord-R.xy/2.)/R.y;    
        // anti aliasing
        float aa=6.28*frame/frames;
        p+=vec2(cos(aa),sin(aa))/R.xy;
        
        vec3 pos=vec3(.04,-.02,.09);
        vec3 ray=look(pos,vec3(0,0,0),p,4.);
        vec3 rng=hash(uvec3(fragCoord,float(u_frame)+frame*196.));
        
        // init globals
        glow=0.;
        mat=0.;
        // raymarch
        float total=0.;
        float steps=0.;
        const float count=100.;
        const float max_dist=4.;
        for(steps=count;steps>0.;--steps){
            float dist=map(pos);
            if(dist<.001*total||total>max_dist)break;
            dist*=.9+.1*rng.z;
            total+=dist;
            pos+=ray*dist;
        }
        vec4 result;
        if(total<max_dist)
        {
            // lighting
            float shade=steps/count;
            vec3 sun=normalize(vec3(0,1,.2));
            vec3 palette=.5+.5*cos(vec3(1,2,3)*5.+pos.z*6.+pos.y*6.);
            vec3 color=vec3(1.5);
            color*=sin(mat+1.)*.25+.75;
            color*=step(.01,ppp.z)*.25+.75;
            color*=step(pp.y,-.005)*.25+.75;
            color+=palette*clamp(.1/abs(mat-10.),0.,1.)*.9;
            color+=palette*glow;
            color*=shade;
            color*=.4+.6*shadow(pos,sun,100.);
            result=vec4(color,1);
        }
        else
        {
            // sky
            vec3 color=.5+.5*cos(vec3(1,2,3)*5.+uv.y*2.+2.);
            result=vec4(color,1);
        }
        
        // sum it up
        fragColor+=result/frames;
    }
}

void main()
{
  rect(gl_FragColor,vUv * u_resolution.xy);
}