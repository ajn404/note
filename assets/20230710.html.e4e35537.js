import{_ as n,o as a,c as e,H as t}from"./app.28a7effe.js";var p="/note/assets/1.03b4c841.jpg";const o={};function i(c,s){return a(),e("div",null,s[0]||(s[0]=[t('<h2 id="\u4ECA\u5929\u5728\u9E64\u5CF0\u7684\u8857\u4E0A\u548C\u56DE\u5BB6\u7684\u8DEF\u4E0A" tabindex="-1"><a class="header-anchor" href="#\u4ECA\u5929\u5728\u9E64\u5CF0\u7684\u8857\u4E0A\u548C\u56DE\u5BB6\u7684\u8DEF\u4E0A" aria-hidden="true">#</a> \u4ECA\u5929\u5728\u9E64\u5CF0\u7684\u8857\u4E0A\u548C\u56DE\u5BB6\u7684\u8DEF\u4E0A</h2><p><img src="'+p+`" alt=""></p><h3 id="\u7EE7\u7EEDtypescript" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u7EEDtypescript" aria-hidden="true">#</a> \u7EE7\u7EEDtypescript</h3><h4 id="chaptor-4-object" tabindex="-1"><a class="header-anchor" href="#chaptor-4-object" aria-hidden="true">#</a> chaptor 4 Object</h4><p>\u201CMost TypeScript projects prefer using the interface keyword to describe object types\u201D</p><h4 id="structural-typing" tabindex="-1"><a class="header-anchor" href="#structural-typing" aria-hidden="true">#</a> structural typing</h4><p>\u201CStructural typing not the same as duck typing, which comes from the phrase \u201CIf it looks like a duck and quacks like a duck, it\u2019s probably a duck.\u201D</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">WithFirstName</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">WithLastName</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> hasBoth <span class="token operator">=</span> <span class="token punctuation">{</span>
  firstName<span class="token operator">:</span> <span class="token string">&quot;Lucille&quot;</span><span class="token punctuation">,</span>
  lastName<span class="token operator">:</span> <span class="token string">&quot;Clifton&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Ok: \`hasBoth\` contains a \`firstName\` property of type \`string\`</span>
<span class="token keyword">let</span> withFirstName<span class="token operator">:</span> WithFirstName <span class="token operator">=</span> hasBoth<span class="token punctuation">;</span>

<span class="token comment">// Ok: \`hasBoth\` contains a \`lastName\` property of type \`string\`</span>
<span class="token keyword">let</span> withLastName<span class="token operator">:</span> WithLastName <span class="token operator">=</span> hasBoth<span class="token punctuation">;</span>\u201D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="excess-property-checking" tabindex="-1"><a class="header-anchor" href="#excess-property-checking" aria-hidden="true">#</a> excess property checking</h5><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Poet</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    born<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Ok: all fields match what&#39;s expected in Poet</span>
<span class="token keyword">const</span> poetMatch<span class="token operator">:</span> Poet <span class="token operator">=</span> <span class="token punctuation">{</span>
  born<span class="token operator">:</span> <span class="token number">1928</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Maya Angelou&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> extraProperty<span class="token operator">:</span> Poet <span class="token operator">=</span> <span class="token punctuation">{</span>
    activity<span class="token operator">:</span> <span class="token string">&quot;walking&quot;</span><span class="token punctuation">,</span>
    born<span class="token operator">:</span> <span class="token number">1935</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;Mary Oliver&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}var l=n(o,[["render",i],["__file","20230710.html.vue"]]);export{l as default};
//# sourceMappingURL=20230710.html.e4e35537.js.map
