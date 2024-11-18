import{_ as c}from"./iframeControl.09d323ea.js";import{_ as r}from"./p5.d4a839fe.js";import{_ as i,b as u,o as d,c as k,a as s,w as e,H as p,e as t,q as m}from"./app.28a7effe.js";import"./store.common.d86edce4.js";const v={};function h(b,n){const l=r,a=u("ClientOnly"),o=c;return d(),k("div",null,[s(a,null,{default:e(()=>[s(l,{type:"morph"})]),_:1}),n[0]||(n[0]=p(`<h3 id="morph-\u8868\u60C5-\u53D8\u5F62" tabindex="-1"><a class="header-anchor" href="#morph-\u8868\u60C5-\u53D8\u5F62" aria-hidden="true">#</a> morph \u8868\u60C5/\u53D8\u5F62</h3><h4 id="vector-lerp" tabindex="-1"><a class="header-anchor" href="#vector-lerp" aria-hidden="true">#</a> vector lerp</h4><div class="language-math ext-math line-numbers-mode"><pre class="language-math"><code>lerp(y1,y2,weight)=y1+(y2\u2212y1)\u2217weight
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3)),s(a,null,{default:e(()=>[s(o,{src:"/note/markdown/notInPage/fantastic/vector.lerp.html"})]),_:1}),n[1]||(n[1]=p(`<p>glsl\u4E2D\u540C\u6837\u6709lerp\u51FD\u6570</p><div class="language-glsl ext-glsl line-numbers-mode"><pre class="language-glsl"><code><span class="token keyword">float</span> <span class="token function">lerp</span> <span class="token punctuation">(</span><span class="token keyword">float</span> a<span class="token punctuation">,</span> floatb<span class="token punctuation">,</span> <span class="token keyword">float</span> x<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    a <span class="token operator">+</span> x <span class="token operator">*</span> <span class="token punctuation">(</span>b <span class="token operator">-</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B</p><div class="language-glsl ext-glsl line-numbers-mode"><pre class="language-glsl"><code><span class="token keyword">varying</span> <span class="token keyword">mediump</span> <span class="token keyword">vec2</span> texCoord0<span class="token punctuation">;</span>
 
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">precision</span> <span class="token keyword">mediump</span> <span class="token keyword">float</span><span class="token punctuation">;</span>
    <span class="token keyword">vec4</span> colorBlack <span class="token operator">=</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span><span class="token number">0.</span><span class="token punctuation">,</span> <span class="token number">0.</span><span class="token punctuation">,</span> <span class="token number">0.</span><span class="token punctuation">,</span> <span class="token number">1.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//\u6709\u4E2D\u95F4\u5411\u4E24\u8FB9\u6E10\u53D8\u6210\u9ED1\u8272</span>
    gl_FragColor <span class="token operator">=</span> <span class="token function">lerp</span><span class="token punctuation">(</span><span class="token number">0.</span><span class="token punctuation">,</span> <span class="token number">1.</span><span class="token punctuation">,</span> <span class="token function">length</span><span class="token punctuation">(</span>texCoord0 <span class="token operator">-</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> colorBlack<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vector-fromangle" tabindex="-1"><a class="header-anchor" href="#vector-fromangle" aria-hidden="true">#</a> vector fromAngle</h4>`,5)),s(a,null,{default:e(()=>[s(o,{src:"/note/markdown/notInPage/fantastic/vector.fromAngle.html"})]),_:1}),n[2]||(n[2]=t("p",null,"\u901A\u8FC7\u89D2\u5EA6\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4E8C\u7EF4\u5411\u91CF",-1)),n[3]||(n[3]=t("h4",{id:"vector-dist",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#vector-dist","aria-hidden":"true"},"#"),m(" vector dist")],-1)),n[4]||(n[4]=t("p",null,"\u8BA1\u7B97\u4E24\u5411\u91CF\u95F4\u7684\u6B27\u5F0F\u8DDD\u79BB",-1)),s(a,null,{default:e(()=>[s(o,{src:"/note/markdown/notInPage/fantastic/vector.dist.html"})]),_:1})])}var w=i(v,[["render",h],["__file","morph.html.vue"]]);export{w as default};
//# sourceMappingURL=morph.html.a46b892e.js.map
