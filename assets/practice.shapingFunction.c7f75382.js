import{S as l}from"./practice.setup.3d60fd6f.js";import{C as u,P as m,S as v,D as h,M as p,a as f}from"./OrbitControls.4135e4a5.js";import{d as _,r as d,n as x,h as g,o as y,c as z,_ as M}from"./app.28a7effe.js";var w="uniform float u_time;varying vec3 v_position;mat2 getRotationMatrix(float theta){float s=sin(theta);float c=cos(theta);return mat2(c,-s,s,c);}mat2 getScaleMatrix(float scale){return mat2(scale,0,0,scale);}float rect(vec2 pt,vec2 anchor,vec2 size,vec2 center){vec2 p=pt-center;vec2 halfsize=size*0.5;float horz=step(-halfsize.x-anchor.x,p.x)-step(halfsize.x-anchor.x,p.x);float vert=step(-halfsize.y-anchor.y,p.y)-step(halfsize.y-anchor.y,p.y);return horz*vert;}void main(void){vec2 center=vec2(0.5,0.5);mat2 matr=getRotationMatrix(u_time);mat2 mats=getScaleMatrix((sin(u_time)+1.0)/3.0+0.5);vec2 pt=(mats*matr*(v_position.xy-center))+center;float inRect=rect(pt,vec2(0.15,-0.15),vec2(0.3),center);vec3 color=vec3(1.0,1.0,0.0)*inRect;gl_FragColor=vec4(color,1.0);}",S="varying vec3 v_position;void main(){v_position=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",C="uniform vec2 u_resolution;uniform vec2 u_mouse;uniform float u_time;uniform sampler2D iChannel0;uniform sampler2D iChannel1;uniform int u_frame;varying vec3 v_position;mat2 getRotationMatrix(float theta){float s=sin(theta);float c=cos(theta);return mat2(c,-s,s,c);}float rect(vec2 pt,vec2 size,vec2 center){vec2 p=pt-center;vec2 halfsize=size*0.5;float horz=step(-halfsize.x,p.x)-step(halfsize.x,p.x);float vert=step(-halfsize.y,p.y)-step(halfsize.y,p.y);return horz*vert;}void main(void){vec2 center=vec2(0);mat2 mat=getRotationMatrix(u_time);vec2 pt=(mat*(v_position.xy-center))+center;float inRect=rect(pt,vec2(0.5),center);vec3 color=vec3(1.0,0.0,1.0)*inRect;gl_FragColor=vec4(color,1.0);}",k="varying vec3 v_position;void main(){v_position=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}";const R=_({__name:"practice.shapingFunction",props:{type:String},setup(r){const c=r;let o=w,n=S;switch(c.type){case"rts":{o=C,n=k;break}}const a=d(null),i={u_time:{value:0},u_mouse:{value:{x:0,y:0}},u_resolution:{value:{x:0,y:0}},u_color:{value:new u(65520)}},s=new f;let t=new l;return t.addObject=function(){this.geometry=new m(2,2),this.material=new v({uniforms:i,side:h,fragmentShader:o,vertexShader:n}),this.mesh=new p(this.geometry,this.material),this.scene.add(this.mesh)},t.animate=function(){if(this.render(),i.u_time.value=s.getElapsedTime(),this.container.getBoundingClientRect().width>0)requestAnimationFrame(this.animate.bind(this));else return},t.move=function(e){i.u_mouse.value.x=e.touches?e.touches[0].clientX:e.clientX,i.u_mouse.value.y=e.touches?e.touches[0].clientY:e.clientY},"ontouchstart"in window?document.addEventListener("touchmove",t.move):document.addEventListener("mousemove",t.move),t.resize=function(){i.u_resolution!==void 0&&(i.u_resolution.value.x=this.width,i.u_resolution.value.y=this.height),this.camera.aspect=this.container.clientWidth/this.container.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.render()},x(()=>{const e={container:a.value||document.body};t.init(e)}),g(()=>{t.beforeDestroy()}),(e,b)=>(y(),z("div",{class:"practice_blendingColor fullscreen",ref_key:"container",ref:a},null,512))}});var j=M(R,[["__file","practice.shapingFunction.vue"]]);export{j as _};
//# sourceMappingURL=practice.shapingFunction.c7f75382.js.map
