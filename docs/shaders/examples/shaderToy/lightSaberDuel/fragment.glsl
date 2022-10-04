
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform int u_frame;

// #define FOCAL_LENGTH 1.2
// #define MOVE_SPEED 20.
// #define MAX_STEPS 256
// #define MIN_DIST.01
// #define MAX_DIST 75.
// #define AMBIANT_LIGHT.01
// #define DAY_LENGTH 15.

// #define PI 3.14159265359

// #define TWO_EGGS

// #define QUALITY_MEDIUM

// #if defined(QUALITY_HIGH)

// #define VOL_SHADOW_STEPS 5.
// #define MIN_STEP_BIAS.3
// #define VOL_FOG 1
// #define VOL_SHADOW 1
// #define LIGHT_QUALITY 1

// #elif defined(QUALITY_MEDIUM)

// #define VOL_SHADOW_STEPS 2.
// #define MIN_STEP_BIAS.6
// #define VOL_FOG 1
// #define VOL_SHADOW 1
// #define LIGHT_QUALITY 1

// #elif defined(QUALITY_LOW)

// #define VOL_SHADOW_STEPS 1.
// #define MIN_STEP_BIAS.9
// #define VOL_FOG 1
// #define VOL_SHADOW 0
// #define LIGHT_QUALITY 0

// #elif defined(QUALITY_OFF)

// #define VOL_SHADOW_STEPS 1.
// #define MIN_STEP_BIAS 1.
// #define VOL_FOG 0
// #define VOL_SHADOW 0
// #define LIGHT_QUALITY 0

// #endif

// #define LASER_STR 1.5
// #define LASER_CORE vec3(.5)
// #define LASER_LIGHT_STR 1.5
// #define PURPLE vec3(.5,0.,1.5)
// #define GREEN vec3(0.,1.,0.)
// #define BLUE vec3(0.,0.,1.)*2.
// #define RED vec3(1.,0.,0.)*1.5
// #define YELLOW vec3(.6,.6,0.)

// #define JEDI GREEN
// #define SITH RED

// #define JEDI_SABER_NOISE 2.
// #define SITH_SABER_NOISE 5.

// vec3 zero=vec3(0.,0.,0.);

// vec3 projectionUp;
// vec3 projectionRight;
// vec3 projectionForward;
// vec3 projectionCenter;
// vec3 cameraOffset;
// float dayProgress;
// float minSurfaceDist;

// vec4 plane=vec4(vec3(0.,1.,0.),1.);
// vec3 sunLightPos;

// vec4 groundColor=vec4(vec3(.08),.7);
// vec4 handleColor=vec4(vec3(.1),.3);
// vec3 sunLightColor;
// vec3 skyColor;
// vec3 fogColor;

// float s_pixelRand=0.;
// float s_time=0.;

// float mapToRange(float fromMin,float fromMax,float toMin,float toMax,float val)
// {
//     val=max(fromMin,(min(fromMax,val)));
//     float fromSize=fromMax-fromMin;
//     val=(val-fromMin)/fromSize;
//     return mix(toMin,toMax,val);
// }

// vec3 noise3(in vec3 x)
// {
//     return texture2D(iChannel0,x.xy/x.z,0.).xyz;
// }

// #if VOL_FOG

// float layeredNoise(vec3 p)
// {
//     float f;
//     f=.5000*texture2D(iChannel1,p).x;
//     p=p*2.;
//     f+=.2500*texture2D(iChannel1,p).x;
//     p=p*2.;
//     f+=.1250*texture2D(iChannel1,p).x;
//     p=p*2.;
//     f+=.0800*texture2D(iChannel1,p).x;
//     p=p*2.;
//     f+=.0625*texture2D(iChannel1,p).x;
//     p=p*2.;
    
//     return f;
// }

// #define CONSTANT_FOG.03
// // To simplify: wavelength independent scattering and extinction
// float atmThickness(in vec3 pos)
// {
//     float disp1=.5;
//     float disp2=.5;
    
//     //disp1 = mapToRange(0.5, 1.0, 0.1, 1.0, layeredNoise(pos.xz*0.015 + s_time*0.008));
//     disp1=mapToRange(.3,1.,.1,1.,layeredNoise(pos*.02-vec3(0.,1.,0.)*s_time*.01));
//     //float noise = clamp(mapToRange(0.4, 0.8, 0.0, 1.0, disp2),0.0,1.0);
//     float fogMax=-1.-smoothstep(8.,-3.,length(pos.xz));
//     float fogMin=fogMax+disp1*3.;
//     float heightFog=smoothstep(fogMin,fogMax,pos.y);
    
//     heightFog=min(1.,heightFog*3.);
    
//     return CONSTANT_FOG+heightFog*2.;
// }

// float phaseFunctionVal=1./(4.*PI);
// #define PHASE_FUNC phaseFunctionVal

// float volumetricShadow(in vec3 from,in vec3 dir)
// {
//     float shadow=1.;
//     float cloud=0.;
//     float dd=1./VOL_SHADOW_STEPS;
//     vec3 pos;
//     for(float s=.5;s<VOL_SHADOW_STEPS-.1;s+=1.)// start at 0.5 to sample at center of integral part
//     {
//         pos=from+dir*(s/VOL_SHADOW_STEPS);
//         cloud=atmThickness(pos);
//         shadow*=exp(-cloud*dd);
//     }
//     return shadow;
// }

// #endif

// vec2 pixelToNormalizedspace(vec2 pixel)
// {
//     vec2 res;
//     res.x=pixel.x*2./u_resolution.x-1.;
//     res.y=pixel.y*2./u_resolution.y-1.;
//     res.y*=u_resolution.y/u_resolution.x;//correct aspect ratio
//     return res;
// }

// float fCapsule(vec3 p,float r,float c){
//     return mix(length(p.xz)-r,length(vec3(p.x,abs(p.y)-c,p.z))-r,step(c,abs(p.y)));
// }

// float fSphere(vec3 d,float r)
// {
//     return length(d)-r;
// }

// float fPlane(vec4 plane,vec3 point)
// {
//     return abs(dot(plane,vec4(point,1.)));
// }

// // Hexagonal prism, circumcircle variant
// float fHexagonCircumcircle(vec3 p,vec2 h){
//     vec3 q=abs(p);
//     //return max(q.y - h.y, max(q.x*sqrt(3)*0.5 + q.z*0.5, q.z) - h.x);
//     //this is mathematically equivalent to this line, but less efficient:
//     return max(q.y-h.y,max(dot(vec2(cos(PI/3.),sin(PI/3.)),q.zx),q.z)-h.x);
// }

// // Repeat in two dimensions
// vec2 pMod2(inout vec2 p,vec2 size){
//     vec2 c=floor((p+size*.5)/size);
//     p=mod(p+size*.5,size)-size*.5;
//     return c;
// }

// //////////////////////////////

// float linearstep(float e1,float e2,float v)
// {
//     v=clamp(v,e1,e2);
//     return(v-e1)/(e2-e1);
// }

// float fEgg(vec3 d,float r,vec3 deform)
// {
//     return length(d/deform)-r;
// }

// #define IMAT3 mat3(vec3(1.,0.,0.),vec3(0.,1.,0.),vec3(0.,0.,1.))

// float maxDist=100.;

// //constants
// float handRSize=.15;
// float handLSize=.15;
// float footRSize=.22;
// float footLSize=.22;
// vec3 eyeRPos=vec3(.2,.2,0.);
// vec3 eyeLPos=vec3(-.2,.2,0.);
// float eyeRSize=.105;
// float eyeLSize=.105;
// vec3 mouthPos=vec3(0.,0.,-.03);
// float mouthSize=.1;
// float mouthXRot=PI*.325;
// float handleRadius=.1;
// float handleLen=.35;
// vec4 bodyColor=vec4(vec3(.1),.8);
// vec4 eyeColor=vec4(vec3(.9),.1);
// vec4 eyeInsideColor=vec4(vec3(.1),.1);
// vec4 mouthColor=vec4(1.,1.,0.,.1);

// struct StickmanData
// {
//     vec3 stickmanPos;
//     //relative to stickManPos
//     vec3 bodyPos;
//     vec3 bodyDeform;
//     vec3 headPos;
//     vec3 handRPos;
//     vec3 handLPos;
//     vec3 handRDeform;
//     vec3 handLDeform;
//     mat3 handRRot;
//     mat3 handLRot;
    
//     vec3 footRPos;
//     vec3 footLPos;
//     mat3 footRRot;
//     mat3 footLRot;
//     vec3 footRDeform;
//     vec3 footLDeform;
    
//     mat3 invBodyRot;
//     mat3 invStickmanRot;
//     mat3 invMouthRot;
    
//     //relative to headPos
    
//     vec3 eyeRDeform;
//     vec3 eyeLDeform;
    
//     vec3 mouthDeform;
    
//     vec3 saberTarget;
//     vec3 saberPos;
//     float saberRadius;
//     float saberLen;
//     float saberNoise;
//     mat3 invSaberRot;
    
//     vec3 laserColor;
//     vec3 laserLight;
// };

// StickmanData jediData;
// StickmanData sithData;

// struct FieldData
// {
//     vec3 saberDiff;
//     vec3 saberOffset;
//     vec3 handleOffset;
//     float fSaber;
// };

// FieldData jediFieldData;
// FieldData sithFieldData;

// void rotationZ(float r,out mat3 mat)
// {
//     mat[0].x=cos(r);mat[0].y=sin(r);mat[0].z=0.;
//     mat[1].x=-sin(r);mat[1].y=cos(r);mat[1].z=0.;
//     mat[2].x=0.;mat[2].y=0.;mat[2].z=1.;
// }

// void rotationY(float r,out mat3 mat)
// {
//     mat[0].x=cos(r);mat[0].y=0.;mat[0].z=-sin(r);
//     mat[1].x=0.;mat[1].y=1.;mat[1].z=0.;
//     mat[2].x=sin(r);mat[2].y=0.;mat[2].z=cos(r);
// }

// void rotationX(float r,out mat3 mat)
// {
//     mat[0].x=1.;mat[0].y=0.;mat[0].z=0.;
//     mat[1].x=0.;mat[1].y=cos(r);mat[1].z=sin(r);
//     mat[2].x=0.;mat[2].y=-sin(r);mat[2].z=cos(r);
// }

// //wonderfull function from iq's article
// //https://iquilezles.org/articles/noacos
// void rotationAlign(vec3 d,vec3 z,out mat3 mat)
// {
//     vec3 v=cross(z,d);
//     float c=dot(z,d);
//     float k=1./(1.+c);
    
//     mat=mat3(v.x*v.x*k+c,v.y*v.x*k-v.z,v.z*v.x*k+v.y,
//         v.x*v.y*k+v.z,v.y*v.y*k+c,v.z*v.y*k-v.x,
//     v.x*v.z*k-v.y,v.y*v.z*k+v.x,v.z*v.z*k+c);
// }

// //ugly hack to get partial look at rotation, works well enough
// void rotationAlign(vec3 targ,vec3 dir,float i,out mat3 mat)
// {
//     vec3 diff=targ-dir;
//     if(dot(diff,diff)>.1)
//     {
//         vec3 mixed=normalize(mix(targ,dir,1.-i));
//         rotationAlign(mixed,dir,mat);
//     }
//     else
//     {
//         mat=IMAT3;
//     }
// }

// //pre-computes field data that doesn't change during the raymarching
// void computeFieldData(in StickmanData data,out FieldData fieldData)
// {
//     fieldData.saberDiff=data.bodyPos+data.saberPos*data.bodyDeform;
//     fieldData.saberOffset=vec3(0.,-data.saberLen-handleLen,0.);
//     fieldData.handleOffset=vec3(0.,handleLen*.5,0.);
//     fieldData.fSaber=MAX_DIST;
// }

// float fSaber(vec3 d,in StickmanData data,in FieldData fieldData)
// {
//     vec3 saberDiff=d-fieldData.saberDiff;
//     saberDiff=data.invSaberRot*saberDiff;
//     float saber=fCapsule(saberDiff+fieldData.saberOffset,
//         data.saberRadius
//         *(pow(mapToRange(data.saberLen*1.95,data.saberLen*2.+handleLen,1.,.01,saberDiff.y),.35))
//         *mapToRange(0.,1.,.85,1.,sin(s_time*30.-saberDiff.y*data.saberNoise)),
//     data.saberLen);
    
//     return saber;
// }

// float fHandle(vec3 d,in StickmanData data,in FieldData fieldData)
// {
//     vec3 saberDiff=d-fieldData.saberDiff;
//     saberDiff=data.invSaberRot*saberDiff;
//     float handle=fCapsule(saberDiff+fieldData.handleOffset,
//         handleRadius,
//     handleLen);
//     return handle;
// }

// vec4 fStickman(vec3 d,in StickmanData data,in FieldData fieldData,inout float minDist)
// {
//     float r=s_time*3.14*.5;
    
//     vec3 bodyD=data.invBodyRot*(d-data.bodyPos);
//     vec3 fixedBodyD=d-data.bodyPos;
//     //main body
//     float body=fEgg(bodyD,1.,data.bodyDeform);
//     float subBody=fEgg(bodyD+vec3(0.,.6,.5),1.,data.bodyDeform*vec3(.8,.8,.8));
//     //eyes
//     float eye=fEgg(bodyD-(data.headPos+eyeLPos)*data.bodyDeform,eyeLSize,data.eyeLDeform);
//     eye=min(eye,fEgg(bodyD-(data.headPos+eyeRPos)*data.bodyDeform,eyeRSize,data.eyeRDeform));
    
//     float subEye=fEgg(bodyD-(data.headPos+eyeLPos+vec3(.07,-.03,-.1))*data.bodyDeform,
//     eyeLSize,data.eyeLDeform*vec3(.3,.4,.3));
//     subEye=min(subEye,fEgg(bodyD-(data.headPos+eyeRPos+vec3(-.07,-.03,-.1))*data.bodyDeform,
//     eyeLSize,data.eyeLDeform*vec3(.3,.4,.3)));
//     eye=min(eye,subEye);
    
//     //mouth
//     float mouth=fEgg(
//         data.invMouthRot*(bodyD-(data.headPos+mouthPos)*data.bodyDeform),
//     mouthSize,data.mouthDeform);
    
//     //hands
//     float hands;
//     hands=fEgg(data.handRRot*(fixedBodyD-data.handRPos*data.bodyDeform),
// handRSize,data.handRDeform);
// hands=min(hands,fEgg(data.handLRot*(fixedBodyD-data.handLPos*data.bodyDeform),
// handLSize,data.handLDeform));
// //feet
// float feet;
// feet=fEgg(data.footRRot*(d-(data.footRPos)),
// footRSize,data.footRDeform);
// feet=min(feet,fEgg(data.footLRot*(d-(data.footLPos)),
// footLSize,data.footLDeform));
// //saber
// float saber=fieldData.fSaber;//fSaber(d, data, fieldData);
// float handle=fHandle(d,data,fieldData);

// minDist=min(minDist,body);
// minDist=min(minDist,eye);
// minDist=min(minDist,mouth);
// minDist=min(minDist,hands);
// minDist=min(minDist,feet);
// minDist=min(minDist,saber);
// minDist=min(minDist,handle);

// vec4 color=vec4(0.);//egg bolor
// color+=mix(bodyColor,vec4(vec3(.9),.8),step(subBody,body))*step(body,minDist);
// color+=mix(eyeColor,bodyColor,step(subEye,eye))*step(eye,minDist);
// color+=bodyColor*step(hands,minDist);
// color+=bodyColor*step(feet,minDist);
// color+=mouthColor*step(mouth,minDist);
// color+=vec4(data.laserColor,0.)*step(saber,minDist);
// color+=handleColor*step(handle,minDist);

// return color;
// }

// //transition functions
// float pingPong(float p)
// {
// return 1.-abs(p*2.-1.);
// }

// float minHandDist=1.2;
// float maxHandDist=1.7;

// void invKinOneHand(float i,mat3 alignRot,inout StickmanData data)
// {
// data.handLPos=data.handLPos*alignRot;
// }

// void invKinTwoHand(float i,mat3 alignRot,inout StickmanData data)
// {
// vec3 f=vec3(0.,0.,1.);
// vec3 dir=normalize(mix(f,data.invSaberRot*f,i));

// mat3 rot;
// rotationAlign(f,dir,rot);
// data.handLRot=data.handLRot*rot;

// vec3 target=data.handRPos+vec3(0.,-.3,0.)*data.invSaberRot;
// float l=mix(length(data.handLPos),max(length(target),minHandDist),i);
// data.handLPos=normalize(mix(data.handLPos,target,pow(i,.5)))*l;
// }

// vec3 neutralTarget=vec3(0.,0.,-1.);
// float ll=1.;//leg length ratio

// void invKinematics(float twoHanded,float hit,inout StickmanData data)
// {
// data.saberTarget=normalize(data.saberTarget);
// mat3 alignRot;

// //rotate saber
// rotationAlign(data.saberTarget,vec3(0.,1.,0.)*data.invSaberRot,hit,alignRot);
// data.invSaberRot=data.invSaberRot*alignRot;

// //move hand/handle
// data.saberPos=mix(data.saberPos,maxHandDist*normalize(data.saberPos),hit);
// rotationAlign(data.saberTarget,neutralTarget,.8,alignRot);
// vec3 armTarget=neutralTarget*alignRot;
// rotationAlign(armTarget,normalize(data.saberPos),hit,alignRot);
// data.saberPos*=alignRot;

// data.saberPos=max(length(data.saberPos),minHandDist)*normalize(data.saberPos);
// data.handRPos=data.saberPos;
// data.handRRot=data.invSaberRot;
// //move body stance
// data.bodyPos=mix(data.footRPos,data.footLPos,.5)+vec3(0.,data.bodyPos.y,.1);
// //turn body
// vec3 bodyRestDir=normalize(vec3(1.,-.5,-.5));
// vec3 saberDir=normalize(mix(bodyRestDir,data.saberPos,.3));
// rotationAlign(saberDir,bodyRestDir,alignRot);
// data.invBodyRot*=alignRot;
// //back hand rot
// saberDir=normalize(mix(bodyRestDir,data.saberPos,1.-twoHanded));
// rotationAlign(saberDir,bodyRestDir,alignRot);

// //squint eyes while you hit, just because ....
// data.eyeLDeform.y*=1.-hit*.4;
// data.eyeRDeform.y*=1.-hit*.5;

// invKinOneHand(1.-twoHanded,alignRot,data);
// invKinTwoHand(twoHanded,alignRot,data);
// }

// float frontLoop(float i,float t,inout StickmanData data)
// {
// float dur=1.;
// float r=mod(t,dur)/dur;
// float p=pingPong(r)*i;

// mat3 rotY;
// rotationY(PI*i*-.15,rotY);

// mat3 rotX;
// rotationX(PI*2.*r*i,rotX);

// data.invSaberRot=rotX*data.invSaberRot*rotY;

// vec3 offset=vec3(0.,.7,.7)*.4*data.invSaberRot;
// data.saberPos.x+=.7*i;
// data.saberPos.y+=.6*i;
// data.saberPos.z+=.3*i;
// data.saberPos-=offset;

// return 0.;
// }

// float backLoop(float i,float t,inout StickmanData data)
// {
// float dur=1.;
// float r=mod(t,dur)/dur;
// float p=pingPong(r)*i;

// mat3 rotY;
// rotationY(PI*i*-.1,rotY);

// mat3 rotX;
// rotationX(PI*2.*r*i,rotX);

// data.invSaberRot=rotX*data.invSaberRot*rotY;

// vec3 offset=vec3(0.,.65,.7)*.3*data.invSaberRot;

// data.saberPos.y+=.55*i;
// data.saberPos-=offset;

// return 0.;
// }

// float nullMove(float i,float m,inout StickmanData data)
// {
// return 0.;
// }

// float nullPose(float i,inout StickmanData data)
// {
// return 0.;
// }

// float whirlingHit(float i,float m,inout StickmanData data)
// {
// float p1d=.3;
// float p2d=.4;
// float p3d=.3;

// float t=i;
// //arming part
// float p1=smoothstep(0.,p1d,t);
// //hitting part
// float p2=linearstep(p1d,p1d+p2d,t);
// p2=min(m,p2);
// //back to rest part
// float p3=linearstep(p1d+p2d,p1d+p2d+p3d,t);

// //move the target on trajectory
// vec3 start=vec3(.8,-.3,.3);
// vec3 end=vec3(-.5,-.1,-.45);
// vec3 target=mix(start,end,p2);
// target.y+=.3*pingPong(p2);
// //target = mix(target, neutralTarget, pow(p3, 0.4));
// data.saberTarget=mix(data.saberTarget,target,p1);

// //stance
// data.footRPos=mix(data.footRPos,ll*vec3(.4,.1,data.footLPos.z+1.2),(p1-p3));
// data.footRPos=mix(data.footRPos,ll*vec3(.4,.1,data.footLPos.z-1.2),pow(p2-p3,2.));
// data.footRPos.y+=pingPong(p1-p3)*ll*.1;
// //footRPos.y += pingPong(p2 - p3)*ll*0.1;

// float landing=pingPong(linearstep(p1d+p2d*.7,p1d+p2d+p3d*.5,t));
// float takeoff=1.-pow(1.-(smoothstep(0.,p1d*.6,t)-smoothstep(p1d*.6,p1d+p2d*.1,t)),2.);
// float jump=1.-pow(1.-(smoothstep(p1d,p1d+p2d*.5,t)-smoothstep(p1d+p2d*.5,p1d+p2d,t)),3.);

// data.bodyPos.y+=-takeoff*.3+jump*.4-landing*.2;
// data.bodyDeform.y+=-takeoff*.1+jump*.05-landing*.1;
// data.stickmanPos.y+=jump*1.;
// //footRPos.y -= jump*0.4;
// data.footLPos.y-=jump*.4;

// float r=smoothstep(p1d,p1d+p2d,t);
// mat3 rotY;
// rotationY(PI*-2.*r,rotY);

// mat3 rotX;
// rotationX(PI*.1*pow((p1+jump)*.5,2.),rotX);

// data.invStickmanRot=rotY*rotX*data.invStickmanRot;

// return p1-p3;
// }

// float forwardHit(float i,float m,inout StickmanData data)
// {
// float p=step(i,.5)*pow(i*2.,2.)+step(.5,i)*smoothstep(1.,.5,i);//pingPong(i);
// data.saberTarget=step(i,.001)*data.saberTarget+step(.001,i)*vec3(.3,0.,-2.);

// float mp=min(m,p);
// //stance
// data.footRPos=mix(data.footRPos,ll*vec3(.4,.1,data.footLPos.z-1.5),mp);
// data.footRPos.y+=pingPong(p)*ll*.1;
// return mp;
// }

// float upDownHit(float i,float m,inout StickmanData data)
// {
// float p1d=.2;
// float p2d=.6;
// float p3d=.2;

// float t=i;
// //arming part
// float p1=smoothstep(0.,p1d,t);
// float p2=1.-pow(1.-linearstep(p1d,p1d+p2d,t),1.);
// p2=min(m,p2);
// float p3=linearstep(p2d,p1d+p2d+p3d,t);

// //move the target on trajectory
// vec3 start=vec3(.8,.35,.3);
// vec3 end=vec3(-1.,-.45,-.45);
// vec3 target=mix(start,end,p2);//mix(mix(start, end, p2), neutralTarget, pow(p3, 0.4));
// data.saberTarget=mix(data.saberTarget,target,p1);

// //stance
// data.footRPos=mix(data.footRPos,ll*vec3(.4,.1,data.footLPos.z-1.2),(p1-p3));
// data.footRPos.y+=pingPong(p1-p3)*ll*.1;
// return p1-p3;
// }

// float parryUpRight(float i,float m,inout StickmanData data)
// {
// float p=1.-pow(1.-pingPong(i),4.);

// mat3 alignRot;
// vec3 restTarget=vec3(0.,1.,0.)*data.invSaberRot;
// vec3 armTarget=vec3(-1.,.15,-.1);
// rotationAlign(armTarget,restTarget,p,alignRot);
// data.invSaberRot=data.invSaberRot*alignRot;

// data.saberPos=mix(data.saberPos,vec3(.6,.42,-1.7),p);

// //squint eyes while you parry, just because ....
// data.eyeLDeform.y*=1.-p*.4;
// data.eyeRDeform.y*=1.-p*.6;

// //stance
// data.footRPos=mix(data.footRPos,ll*vec3(.8,.1,data.footRPos.z+.5),p);
// data.footRPos.y+=pingPong(p)*ll*.1;
// return 0.;
// }

// float parryDownLeft(float i,float m,inout StickmanData data)
// {
// float p=1.-pow(1.-pingPong(i),4.);

// mat3 alignRot;
// vec3 restTarget=vec3(0.,1.,0.)*data.invSaberRot;
// vec3 saberTarget=vec3(-.2,1.,-.5);
// rotationAlign(saberTarget,restTarget,p,alignRot);
// data.invSaberRot=data.invSaberRot*alignRot;

// data.saberPos=mix(data.saberPos,vec3(-.9,-.5,-1.4),p);

// //squint eyes while you parry, just because ....
// data.eyeLDeform.y*=1.-p*.4;
// data.eyeRDeform.y*=1.-p*.6;

// //stance
// data.footRPos=mix(data.footRPos,ll*vec3(.7,.1,data.footRPos.z+.5),p);
// data.footRPos.y+=pingPong(p)*ll*.1;
// return 0.;
// }

// void iddle(float t,float i,inout StickmanData data)
// {
// //mouth
// float dur=3.;
// float p;
// //p = pingPong(mod(t, dur)/dur)*i;
// //mouthDeform *= 0.9 + 0.2*p;
// //body
// p=pingPong(mod(t-.1,dur)/dur)*i;
// data.bodyDeform*=.975+.025*p;
// //hands
// float r=p*PI*-.07;
// data.handRRot=data.handRRot*mat3(vec3(cos(r),sin(r),0.),
// vec3(-sin(r),cos(r),0.),
// vec3(0.,0.,1.));
// r=-r;
// data.handLRot=data.handLRot*mat3(vec3(cos(r),sin(r),0.),
// vec3(-sin(r),cos(r),0.),
// vec3(0.,0.,1.));
// //eyes
// dur=5.;
// p=pingPong(smoothstep(dur-.3,dur,mod(t,dur)))*i;
// data.eyeRDeform.y*=1.-p;
// data.eyeLDeform.y*=1.-p;
// }

// float poseSaberSide(float i,inout StickmanData data)
// {
// data.saberPos=mix(data.saberPos,vec3(1.,-.2,-.8),i);
// mat3 xRot;
// rotationX(PI*.07*i,xRot);
// data.invSaberRot=data.invSaberRot*xRot;

// //foot placement
// data.footLPos=mix(data.footLPos,vec3(-.8,.1,-.6*ll),i);
// data.footLPos.y+=ll*.1*pingPong(i);

// return 1.;
// }

// float poseSaberFront(float i,inout StickmanData data)
// {
// data.saberPos=mix(data.saberPos,vec3(.2,-.4,-1.4),i);
// mat3 xRot;
// rotationX(PI*.25*i,xRot);
// data.invSaberRot=data.invSaberRot*xRot;

// //foot placement
// data.footRPos=mix(data.footRPos,vec3(.6,.1,-.8*ll),i);
// data.footRPos.y+=ll*.1*pingPong(i);
// return 0.;
// }

// float poseSaberBack(float i,inout StickmanData data)
// {
// mat3 xRot;
// rotationX(.55*PI*i,xRot);
// mat3 yRot;
// rotationY(-.07*PI*i,yRot);

// data.invSaberRot=data.invSaberRot*xRot*yRot;

// mat3 zRot;
// rotationZ(PI*.4*i,zRot);
// data.handLRot=data.handLRot*zRot;
// data.handLPos=mix(data.handLPos,vec3(-1.3,.3,-.9),i);
// data.saberPos=mix(data.saberPos,vec3(1.3,.2,.5),i);

// //foot placement
// data.footLPos=mix(data.footLPos,vec3(-.6,.1,-1.*ll),i);
// data.footLPos.y+=ll*.1*pingPong(i);
// return 0.;
// }

// float poseSaberBackDown(float i,inout StickmanData data)
// {
// mat3 xRot;
// rotationX(.65*PI*i,xRot);
// mat3 yRot;
// rotationY(.3*PI*i,yRot);

// data.invSaberRot=data.invSaberRot*xRot*yRot;

// mat3 zRot;
// rotationZ(PI*.4*i,zRot);
// data.handLRot=data.handLRot*zRot;
// data.handLPos=mix(data.handLPos,vec3(-1.2,-.3,-.8),i);

// data.saberPos=mix(data.saberPos,vec3(1.3,-.3,.5),i);

// //foot placement
// data.footLPos=mix(data.footLPos,vec3(-.7,.1,-.7*ll),i);
// data.footLPos.y+=ll*.1*pingPong(i);
// return 0.;
// }

// float animateEntranceJedi(float p,inout StickmanData data)
// {
// data.saberLen*=smoothstep(.05,.3,p);
// float pose1=1.-smoothstep(.52,.7,p);
// poseSaberFront(pose1,data);

// frontLoop(smoothstep(.3,.4,p)-smoothstep(.65,.7,p),linearstep(.3,.65,p)*2.,data);

// float pose2=smoothstep(.5,.7,p);
// poseSaberSide(pose2,data);

// return pose2;
// }

// float animateEntranceSith(float p,inout StickmanData data)
// {
// data.saberLen*=smoothstep(.05,.15,p);
// float pose1=1.-smoothstep(.52,.6,p);
// poseSaberBackDown(pose1,data);

// backLoop(max(smoothstep(.2,.25,p)-smoothstep(.55,.6,p),.00001),linearstep(.2,.55,p)*3.,data);

// float pose2=smoothstep(.5,.6,p);
// poseSaberBack(pose2,data);
// return 0.;
// }

// #define ANIMATE 1

// //assumes t is time
// //i is a float
// //data is the stickman
// //hit receives the hit progress
// //twoHanded receives the two hand amount
// #define HIT_SEQ(s,e,m,hitAnim)if(t>s&&t<=e){i=(t-s)/(e-s);hit=hitAnim(i,m,data);}
// #define HOLD_POSE(s,e,poseAnim)if(t>s&&t<=e){twoHanded=poseAnim(1.,data);}
// #define TRANS_POSE(s,e,prevPoseAnim,poseAnim)if(t>s&&t<=e){i=(t-s)/(e-s);prevTwoHanded=prevPoseAnim(1.-i,data);twoHanded=poseAnim(i,data);twoHanded=mix(prevTwoHanded,twoHanded,i);}

// float loopTime=9.5;

// void animateJedi(float t,inout StickmanData data)
// {
// float entranceDur=4.5;
// float prevTwoHanded=0.;
// float twoHanded=0.;
// float i=0.;
// float hit=0.;
// float s,e;

// #if ANIMATE
// s=-entranceDur;
// e=0.;
// TRANS_POSE(s,e,nullPose,animateEntranceJedi)

// t=mod(t,loopTime)*step(0.,t);

// s=e;
// e=s+.5;
// HOLD_POSE(s,e,poseSaberSide)

// s=e;
// e=s+.7;
// HOLD_POSE(s,e,poseSaberSide)
// HIT_SEQ(s,e,1.,parryDownLeft)

// s=e;
// e=s+.2;
// HOLD_POSE(s,e,poseSaberSide)

// s=e;
// e=s+1.65;
// HOLD_POSE(s,e,poseSaberSide)
// HIT_SEQ(s,e,.60,whirlingHit)

// s=e;
// e=s+1.;
// HOLD_POSE(s,e,poseSaberSide)

// s=e;
// e=s+.9;
// HOLD_POSE(s,e,poseSaberSide)
// HIT_SEQ(s,e,1.,parryDownLeft)

// s=e;
// e=s+.45;
// TRANS_POSE(s,e,poseSaberSide,poseSaberFront)

// s=e;
// e=s+.9;
// HOLD_POSE(s,e,poseSaberFront)
// HIT_SEQ(s,e,1.,parryDownLeft)

// s=e;
// e=s+2.;
// HOLD_POSE(s,e,poseSaberFront)
// HIT_SEQ(s,e,.4375,upDownHit)

// s=e;
// e=s+.4;
// HOLD_POSE(s,e,poseSaberFront)

// s=e;
// e=s+.6;
// TRANS_POSE(s,e,poseSaberFront,poseSaberSide)

// s=e;
// e=loopTime;
// HOLD_POSE(s,e,poseSaberSide)
// #endif

// invKinematics(twoHanded,hit,data);
// }

// void animateSith(float t,inout StickmanData data)
// {
// float entranceDur=4.5;
// float twoHanded=0.;
// float i=0.;
// float hit=0.;
// float prevTwoHanded=0.;

// float s,e;
// #if ANIMATE
// //do pose
// s=-entranceDur;
// e=0.;
// TRANS_POSE(s,e,nullPose,animateEntranceSith)

// t=mod(t,loopTime)*step(0.,t);

// s=e;
// e=s+1.7;
// HOLD_POSE(s,e,poseSaberBack)
// HIT_SEQ(s,e,.434,upDownHit)

// s=e;
// e=s+.6;
// HOLD_POSE(s,e,poseSaberBack)

// s=e;
// e=s+.6;
// HOLD_POSE(s,e,poseSaberBack)
// HIT_SEQ(s,e,1.,parryUpRight)

// s=e;
// e=s+.5;
// TRANS_POSE(s,e,poseSaberBack,poseSaberBackDown)

// s=e;
// e=s+1.5;
// HOLD_POSE(s,e,poseSaberBackDown)
// HIT_SEQ(s,e,.558,whirlingHit)

// s=e;
// e=s+.4;
// TRANS_POSE(s,e,poseSaberBackDown,poseSaberBack)

// s=e;
// e=s+1.;
// HOLD_POSE(s,e,poseSaberBack)
// HIT_SEQ(s,e,.6,forwardHit)

// s=e;
// e=s+.1;
// HOLD_POSE(s,e,poseSaberBack)

// s=e;
// e=s+.42;
// TRANS_POSE(s,e,poseSaberBack,poseSaberBackDown)

// s=e;
// e=s+1.2;
// HOLD_POSE(s,e,poseSaberBackDown)
// HIT_SEQ(s,e,1.,parryDownLeft)

// s=e;
// e=s+.8;
// HOLD_POSE(s,e,poseSaberBackDown)

// s=e;
// e=s+.5;
// TRANS_POSE(s,e,poseSaberBackDown,poseSaberBack)

// s=e;
// e=loopTime;
// HOLD_POSE(s,e,poseSaberBack)
// #endif

// invKinematics(twoHanded,hit,data);
// }

// void initStickman(inout StickmanData data,bool isJedi)
// {
// data.stickmanPos=vec3(0.,-1.,0.);
// //relative to stickManPos
// data.bodyPos=vec3(0.,1.5,0.);
// data.bodyDeform=vec3(1.,1.15,1.);
// data.headPos=vec3(0.,.05,-.92);
// data.handRPos=vec3(1.1,-.45,-.5);
// data.handLPos=vec3(-1.1,-.45,-.5);
// data.handRDeform=vec3(1.2,1.5,1.6);
// data.handLDeform=vec3(1.2,1.5,1.6);
// data.handRRot=IMAT3;
// data.handLRot=IMAT3;
// data.footRPos=vec3(.6,.1,-.1);
// data.footLPos=vec3(-.6,.1,-.1);
// data.footRRot=IMAT3;
// data.footLRot=IMAT3;
// data.footRDeform=vec3(1.5,.9,1.8);
// data.footLDeform=vec3(1.5,.9,1.8);

// data.invBodyRot=IMAT3;
// data.invStickmanRot=IMAT3;
// data.invMouthRot=IMAT3;

// //relative to headPos
// data.eyeRDeform=vec3(2.,1.8,1.);
// data.eyeLDeform=vec3(2.,2.5,1.);

// data.mouthDeform=vec3(2.,1.,3.5);

// data.saberPos=vec3(1.1,-.45,-.5);
// data.saberRadius=.06;
// data.saberLen=.85;
// data.saberNoise=isJedi?JEDI_SABER_NOISE:SITH_SABER_NOISE;
// data.invSaberRot=IMAT3;

// data.laserColor=LASER_CORE+(isJedi?JEDI:SITH);
// data.laserLight=(data.laserColor-LASER_CORE)*LASER_LIGHT_STR;

// rotationX(mouthXRot,data.invMouthRot);
// }

// vec4 characterField(vec3 p,inout float minDist)
// {
// vec4 jediField=vec4(maxDist);
// vec4 sithField=vec4(maxDist);
// float jediMinDist=MAX_DIST;
// float sithMinDist=MAX_DIST;
// jediField=fStickman(jediData.invStickmanRot*(p-jediData.stickmanPos),jediData,jediFieldData,jediMinDist);
// #ifdef TWO_EGGS
// sithField=fStickman(sithData.invStickmanRot*(p-sithData.stickmanPos),sithData,sithFieldData,sithMinDist);
// #endif
// minDist=min(jediMinDist,sithMinDist);
// return jediField*step(jediMinDist,minDist)+sithField*step(sithMinDist,minDist);
// }

// ////////////////////////////////

// //get distance to nearest surface and atmosphere/surface color
// vec4 colorDistanceField(vec3 point,inout float minDist)
// {
// float charDist=MAX_DIST;
// vec4 charfield=characterField(point,charDist);

// vec3 mPoint=point-vec3(7.5,0.,2.);
// pMod2(mPoint.xz,vec2(15.,15.));

// float hexaHeight=3.;
// float hexaDist=fHexagonCircumcircle(mPoint,vec2(1.5,hexaHeight));
// float distPlane=fPlane(plane,point);
// minDist=min(minDist,distPlane);
// minDist=min(minDist,charDist);
// minDist=min(minDist,hexaDist);

// //blend colors
// vec4 color=vec4(0.);
// color+=groundColor*step(distPlane,minDist);
// color+=groundColor*step(hexaDist,minDist);
// color+=charfield*step(charDist,minDist);

// return color;
// }

// //get distance and color to nearest surface
// float distanceField(vec3 point)
// {
// float minDist=MAX_DIST;
// colorDistanceField(point,minDist);
// return minDist;
// }

// vec3 computeNormal(vec3 p,float roughness,out float ao)
// {
// vec3 normalWS=vec3(0.);
// for(int i=min(0,u_frame);i<4;i++)
// {
// vec3 e=.5773*(2.*vec3((((i+3)>>1)&1),((i>>1)&1),(i&1))-1.);
// uint unusedMatId;
// normalWS+=e*distanceField(p+e*.001);
// }
// normalWS=normalize(normalWS);
// vec3 deform=noise3(p*.0002);

// ao=length(deform);
// deform=deform*2.-vec3(1.);
// return normalize(normalWS+deform*roughness*.0001);
// }

// vec3 computeSaberLightDir(vec3 point,StickmanData data,FieldData fieldData)
// {
// #if LIGHT_QUALITY
// float grad=.75;

// vec3 normalWS=vec3(0.);
// for(int i=min(0,u_frame);i<4;i++)
// {
// vec3 e=.5773*(2.*vec3((((i+3)>>1)&1),((i>>1)&1),(i&1))-1.);
// uint unusedMatId;
// vec3 p=point+e*grad;
// normalWS+=e*fSaber(data.invStickmanRot*(p-data.stickmanPos),data,fieldData);
// }
// normalWS=-normalize(normalWS);
// return normalWS;
// #else
// vec3 s=(vec3(0.,data.saberLen*2.,0.)*data.invSaberRot);
// vec3 a=data.stickmanPos+(data.bodyPos+data.saberPos*data.bodyDeform)*data.invStickmanRot;
// vec3 c=data.stickmanPos+(data.bodyPos+(s+data.saberPos)*data.bodyDeform)*data.invStickmanRot;
// return normalize(mix(a,c,.5)-point);
// #endif
// }

// float distBetweenSabers(StickmanData first,StickmanData secnd,FieldData secndField)
// {
// vec3 s=(vec3(0.,first.saberLen*2.,0.)*first.invSaberRot);
// vec3 a=first.stickmanPos+(first.bodyPos+first.saberPos*first.bodyDeform)*first.invStickmanRot;
// vec3 c=first.stickmanPos+(first.bodyPos+(s+first.saberPos)*first.bodyDeform)*first.invStickmanRot;

// float sithDistLaser=1000.;
// for(float i=0.;i<=1.;i+=1./32.)
// {
// vec3 b=mix(a,c,i);
// vec3 stickmanDiff=secnd.invStickmanRot*(b-secnd.stickmanPos);
// sithDistLaser=min(sithDistLaser,fSaber(stickmanDiff,secnd,secndField));
// }

// return sithDistLaser;
// }

// vec3 doLighting(vec3 surfColor,vec3 surfPoint,vec3 surfNormal,vec3 lightColor,vec3 lightDir,float roughness)
// {
// if(dot(surfColor,surfColor)<=2.5)
// {
// float lightingWrap=.5;
// float diff=dot(surfNormal,lightDir);
// diff=clamp((diff+lightingWrap)/((1.+lightingWrap)*(1.+lightingWrap)),0.,1.);
// vec3 eyeDir=normalize(projectionCenter-surfPoint);
// vec3 halfVec=normalize(eyeDir+lightDir);
// float spec=clamp(dot(halfVec,surfNormal),0.,1.);
// spec=pow(spec,mix(128.,8.,pow(roughness,.5)))*pow(diff,1.);
// surfColor=surfColor*diff*lightColor+lightColor*spec;
// }
// return surfColor;
// }

// //raymarch and sample atmosphere color along the ray
// vec4 rmAtmosphere(vec3 rayStart,vec3 rayDir,float minDist)
// {
// float cloud=0.;
// float transmittance=1.;
// vec3 scatteredLight=vec3(0.,0.,0.);

// float totalDist=minDist;
// float dist=0.;
// float dStep=0.;
// vec3 color=zero;
// float stepBias,jediDistLaser,sithDistLaser,strLaser;
// vec3 atmColor,surfColor,litColor;
// vec3 endPoint,sithStickmanDiff,jediStickmanDiff,normal;
// vec3 jediSaberLightDir,sithSaberLightDir;
// vec4 dfRes;
// float roughness=.0;
// vec3 S,Sint;
// float saberOverlap;

// float distSab=distBetweenSabers(jediData,sithData,sithFieldData);
// //distSab = min(distSab, distBetweenSabers(sithData, jediData, jediFieldData));
// float contactLightPower=1.+smoothstep(.3,.15,distSab)*3.;

// vec4 rmRes;

// for(int i=0;i<MAX_STEPS;++i)
// {
// stepBias=max(MIN_STEP_BIAS,totalDist*2./MAX_DIST);//to avoid artefacts

// endPoint=rayStart+rayDir*totalDist;
// jediStickmanDiff=jediData.invStickmanRot*(endPoint-jediData.stickmanPos);
// jediFieldData.fSaber=fSaber(jediStickmanDiff,jediData,jediFieldData);
// strLaser=1.+smoothstep(jediData.saberLen*2.,0.,fHandle(jediStickmanDiff,jediData,jediFieldData))*2.;
// jediDistLaser=(LASER_STR+strLaser)/pow(jediFieldData.fSaber,2.);

// #ifdef TWO_EGGS
// sithStickmanDiff=sithData.invStickmanRot*(endPoint-sithData.stickmanPos);
// sithFieldData.fSaber=fSaber(sithStickmanDiff,sithData,sithFieldData);
// strLaser=1.+smoothstep(sithData.saberLen*2.,0.,fHandle(sithStickmanDiff,sithData,sithFieldData))*2.;
// sithDistLaser=(LASER_STR+strLaser)/pow(sithFieldData.fSaber,2.);

// saberOverlap=1./pow(jediFieldData.fSaber*sithFieldData.fSaber,1.5);
// jediDistLaser+=saberOverlap;
// sithDistLaser+=saberOverlap;
// #endif

// jediSaberLightDir=computeSaberLightDir(endPoint,jediData,jediFieldData);
// sithSaberLightDir=computeSaberLightDir(endPoint,sithData,sithFieldData);

// #if VOL_FOG
// vec3 atmSamplePos=endPoint+rayDir*dist*(s_pixelRand-.5);
// cloud=atmThickness(atmSamplePos);

// S=jediDistLaser*jediData.laserLight*contactLightPower*
// #if VOL_SHADOW
// volumetricShadow(atmSamplePos,jediSaberLightDir)*
// #endif
// cloud*PHASE_FUNC;// incoming light
// #ifdef TWO_EGGS
// S+=sithDistLaser*sithData.laserLight*contactLightPower*
// #if VOL_SHADOW
// volumetricShadow(atmSamplePos,sithSaberLightDir)*
// #endif
// cloud*PHASE_FUNC;// incoming light
// #endif

// Sint=(S-S*exp(-cloud*dStep))/cloud;// integrate along the current step segment
// scatteredLight+=transmittance*Sint;// accumulate and also take into account the transmittance from previous steps
// // Evaluate transmittance to view independentely
// transmittance*=exp(-cloud*dStep);
// if(transmittance<.005)
// {
// break;
// }
// #endif
// dist=MAX_DIST;
// dfRes=colorDistanceField(endPoint,dist);
// dStep=dist*stepBias;
// totalDist+=dStep;

// if(dist<=MIN_DIST)
// {
// float ao=1.;
// normal=computeNormal(endPoint,roughness,ao);
// //store final hit color
// surfColor=dfRes.xyz;
// roughness=dfRes.w;

// //do lighting
// litColor=AMBIANT_LIGHT*surfColor;
// //Don't do sunlight, night time looks better
// //litColor += doLighting(surfColor, endPoint, normal, sunLightColor, normalize(sunLightPos - endPoint), roughness);

// litColor+=doLighting(surfColor,endPoint,normal,
// (jediData.laserLight*contactLightPower)*jediDistLaser*.5,
// jediSaberLightDir,roughness);
// #ifdef TWO_EGGS

// litColor+=doLighting(surfColor,endPoint,normal,
// (sithData.laserLight*contactLightPower)*sithDistLaser*.5,
// sithSaberLightDir,roughness);
// #endif

// color=surfColor*ao*.01+litColor;

// rmRes=vec4(color,totalDist);
// break;
// }

// //no surface hit, return sky + atmColor
// if(totalDist>=MAX_DIST||i>=MAX_STEPS-1)
// {
// rmRes=vec4(color+skyColor,MAX_DIST+.01);
// break;
// }
// }

// rmRes.xyz=mix(fogColor*.8,rmRes.xyz,transmittance)+scatteredLight;
// return rmRes;
// }

// void main()
// {
// s_pixelRand=texture2D(iChannel0,gl_FragCoord/vec2(1024.),0.).r;
// s_pixelRand=fract(s_pixelRand+float(u_frame%256)*1.618);
// s_time=u_time;

// vec2 mousePos=u_mouse.xy/u_resolution.xy*2.-vec2(1.);
// float day=0.;
// day=sign(day)*pow(abs(day),2.);
// dayProgress=abs(day);

// float sunsetFromNight=smoothstep(.4,.5,dayProgress);
// float sunsetToDay=smoothstep(.8,.5,dayProgress);
// vec3 sunsetColor=mix(mix(vec3(.5,0.,0.),vec3(1.,.8,.3),sunsetFromNight),
// mix(vec3(.2,.2,1.),vec3(1.,.8,.3),sunsetToDay),(sunsetFromNight+sunsetToDay)/2.);
// float sunsetStr=sunsetFromNight*sunsetToDay;

// sunLightPos=vec3(0.,-1000.,0.);
// mat3 sRotZ;
// rotationZ(day*PI,sRotZ);
// sunLightPos=sRotZ*sunLightPos;

// sunLightColor=mix(vec3(.004,.004,.0065),vec3(.8,.8,.7),dayProgress);
// sunLightColor=mix(sunLightColor,sunsetColor,sunsetStr);

// vec2 uv=gl_FragCoord.xy/u_resolution;
// vec3 ro=vec3(0.);

// float t=s_time*1.1;
// t+=(cos(t*.5))*.2;

// float camT=t*.5;
// float camRotY=(mousePos.x+camT*.1)*PI*-2.;
// float camY=(1.-cos(camT*.5))*.3;
// float camDist=12.-sin(camT*.5)*4.;

// //animate before marching
// initStickman(jediData,true);
// #ifdef TWO_EGGS
// jediData.stickmanPos.x+=2.7;
// mat3 yRot;
// rotationY(-.5*PI,yRot);
// jediData.invStickmanRot=yRot*jediData.invStickmanRot;

// initStickman(sithData,false);
// sithData.stickmanPos.x-=2.7;
// rotationY(.5*PI,yRot);
// sithData.invStickmanRot=yRot*sithData.invStickmanRot;
// animateSith(t,sithData);
// computeFieldData(sithData,sithFieldData);
// #endif
// animateJedi(t,jediData);
// computeFieldData(jediData,jediFieldData);

// //////////////////

// //Do camera setup from mouse coord
// vec3 pCenter=vec3(0.,.2,0.);
// vec3 pOffset=vec3(0.,0.,1.);

// mat3 pRotY;
// rotationY(camRotY,pRotY);
// pOffset.y=camY;
// pOffset=pRotY*pOffset;
// projectionCenter=pCenter+pOffset*camDist;

// vec3 tmpCenter=(projectionCenter+vec3(0.,0.,.50));

// projectionCenter=(projectionCenter);

// projectionForward=normalize(-pOffset);
// projectionUp=vec3(0.,1.,0.);
// projectionRight=cross(projectionUp,projectionForward);
// projectionUp=cross(projectionForward,projectionRight);
// mousePos=pixelToNormalizedspace(u_mouse.xy);

// cameraOffset=-projectionForward*FOCAL_LENGTH;

// vec2 rd=uv*2.-vec2(1.);
// rd.y/=u_resolution.x/u_resolution.y;
// //setup ray
// vec3 rayPos=projectionCenter+cameraOffset;
// vec3 pointOnProjectionPlane=projectionCenter+projectionRight*rd.x+projectionUp*rd.y;
// vec3 rayDirection=normalize(pointOnProjectionPlane-rayPos);

// float sun=pow(max(0.,dot(rayDirection,normalize(sunLightPos))),2.);

// //sky and stars
// vec2 xzDir=normalize(rayDirection.xz);
// vec2 starsUv=vec2(atan(xzDir.x,xzDir.y),rayDirection.y);
// vec3 stars=texture2D(iChannel0,starsUv*0.1,0.).xyz;
// stars*=pow(dot(stars,stars)*.5,16.)*.3;// smoothstep(2.1, 2.5, dot(stars, stars));
// stars=smoothstep(vec3(0.),vec3(1.),stars);
// float skyHeight=pow(max(0.,rayDirection.y)*2.,.75);
// float starVis=skyHeight*pow(1.-dayProgress,2.);
// stars=mix(zero,stars,pow(starVis,6.));

// vec3 lowColor=mix(vec3(.01,.01,.05),vec3(.85,.85,1.),dayProgress);
// lowColor=mix(lowColor,sunsetColor,sunsetStr+pow(sun,5.)*sunsetStr*2.);
// vec3 upColor=mix(vec3(.0005,.0005,.001),vec3(.15,.15,1.),dayProgress);
// upColor=mix(upColor,sunsetColor,sunsetStr*.5+pow(sun,5.)*sunsetStr*2.);

// skyColor=mix(lowColor,upColor,skyHeight);

// float fogBlur=.5;
// fogColor=mix(mix(lowColor,upColor,max(0.,skyHeight-fogBlur)),
// mix(lowColor,upColor,min(1.,skyHeight+fogBlur)),
// .5);

// //march ray
// vec4 rayMarchResult=rmAtmosphere(rayPos,rayDirection,0.);
// float dist=rayMarchResult.w;
// vec4 surfaceColor=vec4(rayMarchResult.xyz,1.);

// if(dist>=MAX_DIST)
// {
// surfaceColor.xyz+=stars;
// surfaceColor.xyz=surfaceColor.xyz+sunLightColor*pow(sun,80.)*10.;
// }

// //convert to gamma space
// surfaceColor=pow(surfaceColor,vec4(1./2.2));
// gl_FragColor=surfaceColor;
// }
void main(){
  float bug=0.0;
  vec3 tile=texture2D(iChannel0,gl_FragCoord.xy/u_resolution,0.).xyz;
  vec4 col=vec4(tile, 1.0);
  //if(....)
  bug=0.01;
  col.x+=bug;
  gl_FragColor=col;
}