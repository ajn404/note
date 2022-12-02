


#define bridgeCol      vec3(.1,1,.8)
#define bridgePillars  vec3(1,.7,.4)
#define pillarsCol     vec3(1,.1,.1)
#define patternsCol    vec3(.8,.6,.3)

uniform vec2 u_resolution;
varying vec2 vUv;
uniform float u_time;


float box( vec3 p, vec3 b ) {
  vec3 q = abs(p) - b ;
  return length(max(q,0.)) + min(max(q.x,max(q.y,q.z)),0.);
}

float rect( vec2 p, vec2 b ) {
    vec2 d = abs(p)-b;
    return length(max(d,0.)) + min(max(d.x,d.y),0.);
}

#define rot(a) mat2(cos(a), -sin(a), sin(a), cos(a))
#define rep(p,r) (mod(p+r/2.,r)-r/2.)
#define lrep(p,c,l) (p-c*clamp(round(p/c),-l,l))
#define rid(p,r) floor((p+r/2.)/r)

float light(float d, float att, float n) {
    return 1. / (1. + pow(abs(d*att), n));
}

float map(vec3 p, float t, inout vec3 lgt) {
    float d, b1, b2, lb2, b3, b4, r;
    vec2 id0, id1;
    vec3 id3, q, c = cos(p)*.25+.75;

    // Bridge
    d = rect(p.xy + vec2(0,2), vec2(1.4, 1));
    
    // Floor & Ceiling
    d = min(d, abs(abs(p.y) - 4.));
    
    if (abs(p.x) < 1.5) {
        // Bridge steps
        q   = p;
        q.z = lrep(q.z, .7, floor(u_time*8. - 14.));
        b1  = box(q - vec3(0, -1.1 ,0), vec3(1., .1, .08));
        d   = min(d, b1);
        lgt += c*bridgeCol * light(b1, 60., 2.);

        // Bridge pillars
        q = p;
        q.x = abs(q.x);
        q.z = rep(q.z, 1.5);
        id3 = rid(p, 1.5);
        b2  = rect(q.xz - vec2(1.2,0), vec2(.1));
        q.z = lrep(p.z, 1.5, floor(u_time*8.));
        lb2 = box(q - vec3(1.2,2. + sin(u_time + id3.z)*.5,0), vec3(.1,.3,.1));
        d   = min(d, b2);        
        lgt += c*bridgePillars * light(lb2, 80., 2.)*t*.5;
    }
    
    // Ground/Ceiling pattern
    if (abs(p.y) > 3.) {
        const float br = 1.5;
        q     = p;
        id1   = rid(p.xz, br);
        r     = fract(dot(sin(id1), (id1+41.21)*24.77));
        q.xz  = rep(p.xz, br);
        q.y   = abs(q.y)-4.;
        q.xz *= rot(1.570796*(.5 + floor(r*2.)));
        q.x   = abs(q.x)-br*.35;
        b3    = box(q, vec3(.01,.2,br*.4));
        d     = min(d, b3);
        lgt  += c*patternsCol * light(b3, 20., 2.) * exp(-t*.1 - (cos(max(0., u_time - 9.)*.5)*.5+.5)*10.);
    }  
    
    // Distant pillars
    q    = p;
    id0  = rid(p.xz, 7.);
    q.xz = rep(p.xz, 7.);
    b3   = rect(q.xz, vec2(.5));
    b3   = max(b3, -abs(p.x) +2.);
    q.y  = rep(q.y, .5);
    b4   = box(q, vec3(.5,.04,.5));
    b4   = max(b4, -abs(p.x) +2.);
    d    = min(d, b3);
    if (fract((id0.x+41.11)*sin(id0.y*44.7)) < smoothstep(5., 8., u_time))
        lgt += c*pillarsCol * light(b4, 40., 2.) * (sin(u_time+p.y*(2.*fract(id0.x*id0.y*47.44))+id0.x*id0.y)*.5+.5);
    
    return d;
}

void mainImage( out vec4 O, vec2 F ) {
    vec2 uv = (2.*F - u_resolution.xy)/u_resolution.y;
    vec3 lgt = vec3(0);
    vec3 ro = vec3(0,0,u_time);
    vec3 rd = normalize(vec3(uv, 1.));
    float t = 0.;
    
    for (int i = 0; i < 40; i++) {
        vec3 p = ro + t*rd;
        float d = map(p, t, lgt);
        t += d;
    }
    
    O = vec4(pow(lgt, vec3(.45)), 1.0);
}

void main()
{
  mainImage(gl_FragColor,vUv * u_resolution.xy);
}