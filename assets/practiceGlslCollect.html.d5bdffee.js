import{_ as c,o as p,c as l,e as n,q as s,a as e,w as o,H as t,b as i}from"./app.b7df915f.js";const u={},r=n("h3",{id:"practice",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#practice","aria-hidden":"true"},"#"),s(" practice")],-1),d=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"\u8FD9\u91CC\u53EA\u5C55\u5F00fragment.glsl\u7684\u4EE3\u7801,vertex\u90FD\u5927\u5DEE\u4E0D\u79BB")],-1),k={id:"blending-color-uniforms",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#blending-color-uniforms","aria-hidden":"true"},"#",-1),m=t(`<div class="language-glsl ext-glsl line-numbers-mode"><pre class="language-glsl"><code><span class="token keyword">uniform</span> <span class="token keyword">vec3</span> u_color<span class="token punctuation">;</span>

<span class="token keyword">uniform</span> <span class="token keyword">vec2</span> u_mouse<span class="token punctuation">;</span>
<span class="token keyword">uniform</span> <span class="token keyword">vec2</span> u_resolution<span class="token punctuation">;</span>
<span class="token comment">//\u4F20\u9012\u957F\u548C\u5BBD</span>
<span class="token keyword">uniform</span> <span class="token keyword">float</span> u_time<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// vec2 v = u_mouse/u_resolution;</span>

    <span class="token comment">// vec3 color = vec3(u_mouse.x/u_resolution.x,0.,u_mouse.y/u_resolution.y);</span>
    <span class="token comment">// vec3 color = vec3(v.x,0.,v.y);</span>


    <span class="token keyword">vec2</span> uv <span class="token operator">=</span> gl_FragCoord<span class="token punctuation">.</span>xy<span class="token operator">/</span>u_resolution<span class="token punctuation">;</span>
    <span class="token comment">//uv.y:\u7247\u5143\u5782\u76F4\u4F4D\u7F6E\u7684\u6743\u91CD</span>
    <span class="token comment">//\u81EA\u4E0B\u800C\u4E0A</span>
    <span class="token keyword">vec3</span> color <span class="token operator">=</span> <span class="token function">mix</span><span class="token punctuation">(</span><span class="token keyword">vec3</span><span class="token punctuation">(</span><span class="token number">228.</span><span class="token operator">/</span><span class="token number">255.</span><span class="token punctuation">,</span><span class="token number">181.</span><span class="token operator">/</span><span class="token number">255.</span><span class="token punctuation">,</span><span class="token number">163.</span><span class="token operator">/</span><span class="token number">255.</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">vec3</span><span class="token punctuation">(</span><span class="token number">0.</span><span class="token punctuation">,</span><span class="token number">0.</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>uv<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// mix(x,y,a) = x*(1-a)+y*a</span>

    gl_FragColor <span class="token operator">=</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span>color <span class="token punctuation">,</span><span class="token number">1.0</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),b={id:"blending-color-varying",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#blending-color-varying","aria-hidden":"true"},"#",-1),y=t(`<div class="language-glsl ext-glsl line-numbers-mode"><pre class="language-glsl"><code><span class="token keyword">uniform</span> <span class="token keyword">vec3</span> u_color<span class="token punctuation">;</span>

<span class="token keyword">uniform</span> <span class="token keyword">vec2</span> u_mouse<span class="token punctuation">;</span>
<span class="token keyword">uniform</span> <span class="token keyword">vec2</span> u_resolution<span class="token punctuation">;</span>
<span class="token comment">//\u4F20\u9012\u957F\u548C\u5BBD</span>
<span class="token keyword">uniform</span> <span class="token keyword">float</span> u_time<span class="token punctuation">;</span>

<span class="token keyword">varying</span> <span class="token keyword">vec2</span> v_uv<span class="token punctuation">;</span>


<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// vec2 v = u_mouse/u_resolution;</span>

    <span class="token comment">// vec3 color = vec3(u_mouse.x/u_resolution.x,0.,u_mouse.y/u_resolution.y);</span>
    <span class="token comment">// vec3 color = vec3(v.x,0.,v.y);</span>


    <span class="token keyword">vec3</span> color <span class="token operator">=</span> <span class="token keyword">vec3</span><span class="token punctuation">(</span>v_uv<span class="token punctuation">.</span>x<span class="token punctuation">,</span>v_uv<span class="token punctuation">.</span>y<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    

    gl_FragColor <span class="token operator">=</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span>color <span class="token punctuation">,</span><span class="token number">1.0</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h={id:"change-color-by-mouse",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#change-color-by-mouse","aria-hidden":"true"},"#",-1),w=t(`<div class="language-glsl ext-glsl line-numbers-mode"><pre class="language-glsl"><code><span class="token keyword">uniform</span> <span class="token keyword">vec3</span> u_color<span class="token punctuation">;</span>

<span class="token keyword">uniform</span> <span class="token keyword">vec2</span> u_mouse<span class="token punctuation">;</span>
<span class="token keyword">uniform</span> <span class="token keyword">vec2</span> u_resolution<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">vec2</span> v <span class="token operator">=</span> u_mouse<span class="token operator">/</span>u_resolution<span class="token punctuation">;</span>
    <span class="token comment">// vec3 color = vec3(u_mouse.x/u_resolution.x,0.,u_mouse.y/u_resolution.y);</span>
    <span class="token keyword">vec3</span> color <span class="token operator">=</span> <span class="token keyword">vec3</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>x<span class="token punctuation">,</span><span class="token number">0.</span><span class="token punctuation">,</span>v<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    gl_FragColor <span class="token operator">=</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span>color <span class="token punctuation">,</span><span class="token number">1.0</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),f={id:"change-color-by-time",tabindex:"-1"},x=n("a",{class:"header-anchor",href:"#change-color-by-time","aria-hidden":"true"},"#",-1),C=t(`<div class="language-glsl ext-glsl line-numbers-mode"><pre class="language-glsl"><code><span class="token keyword">uniform</span> <span class="token keyword">vec3</span> u_color<span class="token punctuation">;</span>

<span class="token keyword">uniform</span> <span class="token keyword">vec2</span> u_mouse<span class="token punctuation">;</span>
<span class="token keyword">uniform</span> <span class="token keyword">vec2</span> u_resolution<span class="token punctuation">;</span>
<span class="token keyword">uniform</span> <span class="token keyword">float</span> u_time<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// vec2 v = u_mouse/u_resolution;</span>

    <span class="token comment">// vec3 color = vec3(u_mouse.x/u_resolution.x,0.,u_mouse.y/u_resolution.y);</span>
    <span class="token comment">// vec3 color = vec3(v.x,0.,v.y);</span>

    <span class="token keyword">vec3</span> color <span class="token operator">=</span> <span class="token keyword">vec3</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">sin</span><span class="token punctuation">(</span>u_time<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1.</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2.</span><span class="token punctuation">,</span><span class="token number">0.</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token function">cos</span><span class="token punctuation">(</span>u_time<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1.</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    gl_FragColor <span class="token operator">=</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span>color <span class="token punctuation">,</span><span class="token number">1.0</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),q={id:"box-shader",tabindex:"-1"},F=n("a",{class:"header-anchor",href:"#box-shader","aria-hidden":"true"},"#",-1),V={id:"moving-square",tabindex:"-1"},N=n("a",{class:"header-anchor",href:"#moving-square","aria-hidden":"true"},"#",-1);function B(S,G){const a=i("RouterLink");return p(),l("div",null,[r,d,n("h3",k,[v,s(),e(a,{to:"/markdown/practice/blendingColorUniforms.html"},{default:o(()=>[s("blending color uniforms")]),_:1})]),m,n("h3",b,[_,s(),e(a,{to:"/markdown/practice/blendingColorVaryings.html"},{default:o(()=>[s("blending color varying")]),_:1})]),y,n("h3",h,[g,s(),e(a,{to:"/markdown/practice/changeColorMouse.html"},{default:o(()=>[s("change color by mouse")]),_:1})]),w,n("h3",f,[x,s(),e(a,{to:"/markdown/practice/changeColorTime.html"},{default:o(()=>[s("change color by time")]),_:1})]),C,n("h3",q,[F,s(),e(a,{to:"/markdown/practice/firstShader.html"},{default:o(()=>[s("box shader")]),_:1})]),n("h3",V,[N,s(),e(a,{to:"/markdown/practice/movingSquare.html"},{default:o(()=>[s("moving square")]),_:1})])])}var R=c(u,[["render",B],["__file","practiceGlslCollect.html.vue"]]);export{R as default};
//# sourceMappingURL=practiceGlslCollect.html.d5bdffee.js.map
