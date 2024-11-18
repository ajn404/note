import{_ as s,o as a,c as p,H as t}from"./app.28a7effe.js";const e={};function o(c,n){return a(),p("div",null,n[0]||(n[0]=[t(`<h2 id="easy" tabindex="-1"><a class="header-anchor" href="#easy" aria-hidden="true">#</a> easy</h2><h3 id="\u4E24\u6570\u4E4B\u548C" tabindex="-1"><a class="header-anchor" href="#\u4E24\u6570\u4E4B\u548C" aria-hidden="true">#</a> \u4E24\u6570\u4E4B\u548C</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] \u4E24\u6570\u4E4B\u548C
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> newArr <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        newArr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>newArr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>target<span class="token operator">-</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>length<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">===</span><span class="token punctuation">(</span>target<span class="token operator">-</span>nums<span class="token punctuation">[</span>res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">&amp;&amp;</span>j<span class="token operator">!==</span>res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
    


<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// @lc code=end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u56DE\u6587\u6570" tabindex="-1"><a class="header-anchor" href="#\u56DE\u6587\u6570" aria-hidden="true">#</a> \u56DE\u6587\u6570</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] \u56DE\u6587\u6570
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">===</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> s <span class="token operator">=</span> x<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> l <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>length<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>l<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">!==</span>s<span class="token punctuation">[</span>s<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// @lc code=end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7F57\u9A6C\u6570\u5B57\u8F6C\u6574\u6570" tabindex="-1"><a class="header-anchor" href="#\u7F57\u9A6C\u6570\u5B57\u8F6C\u6574\u6570" aria-hidden="true">#</a> \u7F57\u9A6C\u6570\u5B57\u8F6C\u6574\u6570</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] \u7F57\u9A6C\u6570\u5B57\u8F6C\u6574\u6570
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">romanToInt</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> relationList <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span><span class="token string">&#39;I&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span><span class="token string">&#39;V&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">5</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span><span class="token string">&#39;X&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">10</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span><span class="token string">&#39;L&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">50</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span><span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">100</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span><span class="token string">&#39;D&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">500</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span><span class="token string">&#39;M&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">1000</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>

    <span class="token keyword">const</span> combineList <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">4</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">9</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span><span class="token string">&#39;H&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">40</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span><span class="token string">&#39;J&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">90</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span><span class="token string">&#39;E&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">400</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span><span class="token string">&#39;F&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">900</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>

    <span class="token keyword">const</span> allList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>relationList<span class="token punctuation">,</span><span class="token operator">...</span>combineList<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> mapObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    allList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        mapObj<span class="token punctuation">[</span>item<span class="token punctuation">.</span>label<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    s<span class="token operator">=</span>s<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">IV</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    s<span class="token operator">=</span>s<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">IX</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    s<span class="token operator">=</span>s<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">XL</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">&#39;H&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    s<span class="token operator">=</span>s<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">XC</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">&#39;J&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    s<span class="token operator">=</span>s<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">CD</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">&#39;E&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    s<span class="token operator">=</span>s<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">CM</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">&#39;F&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        res<span class="token operator">+=</span>mapObj<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res


<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// @lc code=end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6700\u957F\u516C\u5171\u524D\u7F00" tabindex="-1"><a class="header-anchor" href="#\u6700\u957F\u516C\u5171\u524D\u7F00" aria-hidden="true">#</a> \u6700\u957F\u516C\u5171\u524D\u7F00</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] \u6700\u957F\u516C\u5171\u524D\u7F00
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">strs</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestCommonPrefix</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">strs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> min <span class="token operator">=</span>strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token punctuation">;</span>
    <span class="token keyword">let</span> res<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
    strs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">!==</span>strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            res <span class="token operator">=</span>  <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token function">twoSame</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span>strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">||</span><span class="token function">twoSame</span><span class="token punctuation">(</span>strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>item<span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>temp<span class="token operator">&lt;</span>min<span class="token punctuation">)</span><span class="token punctuation">{</span>
            min <span class="token operator">=</span> temp
        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> res<span class="token operator">?</span>strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>min<span class="token punctuation">)</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">twoSame</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">s1<span class="token punctuation">,</span>s2</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>s1<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> item <span class="token operator">=</span> s1<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        temp<span class="token operator">+=</span>  item<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>s2<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token operator">===</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> i
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// @lc code=end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Accepted 124/124 cases passed (108 ms) Your runtime beats 7.49 % of javascript submissions Your memory usage beats 5.01 % of javascript submissions (47.2 MB)</p></div><h3 id="\u6709\u6548\u7684\u62EC\u53F7" tabindex="-1"><a class="header-anchor" href="#\u6709\u6548\u7684\u62EC\u53F7" aria-hidden="true">#</a> \u6709\u6548\u7684\u62EC\u53F7</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] \u6709\u6548\u7684\u62EC\u53F7
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> leftArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;(&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;{&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;[&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>leftArr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;)&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> r <span class="token operator">=</span> temp<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">!==</span> <span class="token string">&quot;(&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> r <span class="token operator">=</span> temp<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">!==</span> <span class="token string">&quot;{&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> r <span class="token operator">=</span> temp<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">!==</span> <span class="token string">&quot;[&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">return</span> temp<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// @lc code=end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>time 86.76% memory 32.67%</p></div><h3 id="\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868" aria-hidden="true">#</a> \u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] \u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">list1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">list2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mergeTwoLists</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">list1<span class="token punctuation">,</span> list2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>list1 <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> list2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> l1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>l2 <span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>list1<span class="token operator">!==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        l1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>list1<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        list1 <span class="token operator">=</span> list1<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>list2<span class="token operator">!==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        l2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>list2<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        list2 <span class="token operator">=</span> list2<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> res <span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">...</span>l1<span class="token punctuation">,</span><span class="token operator">...</span>l2<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>a<span class="token operator">-</span>b<span class="token punctuation">)</span>
    <span class="token keyword">let</span> head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> resList <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>res<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        resList<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        resList <span class="token operator">=</span> resList<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> head
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// @lc code=end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>js sort\u65B9\u6CD5\u9ED8\u8BA4\u6309\u5B57\u6BCD\u987A\u5E8F\u6392\uFF0C\u6392\u5E8F\u6570\u5B57\u9700\u8981\u4F20\u9012\u65B9\u6CD5</p></div><h3 id="_26-\u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879" tabindex="-1"><a class="header-anchor" href="#_26-\u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879" aria-hidden="true">#</a> 26.\u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] \u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeDuplicates</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>res<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> res<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span>length
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// @lc code=end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_27-\u79FB\u9664\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_27-\u79FB\u9664\u5143\u7D20" aria-hidden="true">#</a> 27.\u79FB\u9664\u5143\u7D20</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] \u79FB\u9664\u5143\u7D20
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeElement</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">===</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>
            nums<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
            i<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> nums<span class="token punctuation">.</span>length
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// @lc code=end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u6570\u7EC4\u7684splice\u64CD\u4F5C\u4F1A\u6539\u53D8\u539F\u6570\u7EC4;\u53E6\u5916\u4F7F\u7528oldArr.splice(0,0,...newArr)\u53EF\u4EE5\u5408\u5E76\u6570\u7EC4</p></div><h3 id="_35-\u641C\u7D22\u63D2\u5165\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_35-\u641C\u7D22\u63D2\u5165\u4F4D\u7F6E" aria-hidden="true">#</a> 35.\u641C\u7D22\u63D2\u5165\u4F4D\u7F6E</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] \u641C\u7D22\u63D2\u5165\u4F4D\u7F6E
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">searchInsert</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>target<span class="token operator">&lt;=</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>len<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">===</span>target<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> i
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">!==</span>len<span class="token operator">-</span><span class="token number">1</span><span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&lt;</span>target<span class="token operator">&amp;&amp;</span>nums<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>target<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> len
    
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// @lc code=end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_58-\u6700\u540E\u4E00\u4E2A\u5355\u8BCD\u7684\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#_58-\u6700\u540E\u4E00\u4E2A\u5355\u8BCD\u7684\u957F\u5EA6" aria-hidden="true">#</a> 58.\u6700\u540E\u4E00\u4E2A\u5355\u8BCD\u7684\u957F\u5EA6</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] \u6700\u540E\u4E00\u4E2A\u5355\u8BCD\u7684\u957F\u5EA6
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">lengthOfLastWord</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> a<span class="token punctuation">[</span>a<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">?</span>a<span class="token punctuation">[</span>a<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token operator">:</span>a<span class="token punctuation">[</span>a<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// @lc code=end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>time:93.82% memory 38.49%</p></div><h3 id="_66-\u52A0\u4E00" tabindex="-1"><a class="header-anchor" href="#_66-\u52A0\u4E00" aria-hidden="true">#</a> 66.\u52A0\u4E00</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] \u52A0\u4E00
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">digits</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">plusOne</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">digits</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// return(Number(digits.toString().replaceAll(&quot;,&quot;,&quot;&quot;))+1).toString().split(&#39;&#39;)</span>
    <span class="token keyword">let</span> sub<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">;</span>
    <span class="token comment">//19999</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span>digits<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&gt;=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">!==</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            sub <span class="token operator">=</span>i
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>sub<span class="token operator">!==</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        digits<span class="token punctuation">[</span>sub<span class="token punctuation">]</span><span class="token operator">+=</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span>sub<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>digits<span class="token punctuation">.</span>length<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            digits<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> k<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>k<span class="token operator">&lt;</span>digits<span class="token punctuation">.</span>length<span class="token punctuation">;</span>k<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        digits<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    digits<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">return</span> digits
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// @lc code=end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>time:87.06% memory 38.01%</p></div><h3 id="_67-\u4E8C\u8FDB\u5236\u6C42\u548C" tabindex="-1"><a class="header-anchor" href="#_67-\u4E8C\u8FDB\u5236\u6C42\u548C" aria-hidden="true">#</a> 67.\u4E8C\u8FDB\u5236\u6C42\u548C</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] \u4E8C\u8FDB\u5236\u6C42\u548C
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">a</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">b</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">addBinary</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// const aA = parseInt(a,2);</span>
    <span class="token comment">// const bA = parseInt(b,2);</span>
    <span class="token comment">// return (aA+bA).toString(2)</span>

    <span class="token keyword">let</span> arrA  <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> arrB <span class="token operator">=</span> b<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> lenA <span class="token operator">=</span> arrA<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">let</span> lenB <span class="token operator">=</span> arrB<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span><span class="token punctuation">(</span>arrA<span class="token punctuation">.</span>length<span class="token operator">&gt;</span>arrB<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token operator">?</span>arrA<span class="token punctuation">.</span>length<span class="token operator">:</span>arrB<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>len<span class="token operator">===</span>arrA<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>len<span class="token operator">-</span>lenB<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            arrB<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>len<span class="token operator">-</span>lenA<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            arrA<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> arrR <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span>len<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&gt;=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> tempa <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>arrA<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">||</span><span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> tempb <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>arrB<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">||</span><span class="token number">0</span><span class="token punctuation">;</span>
        arrR<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> tempa<span class="token operator">+</span>tempb
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> flag <span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span>len<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&gt;=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">{</span>
            arrR<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">+=</span><span class="token number">1</span><span class="token punctuation">;</span>
            flag <span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>arrR<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&gt;=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            arrR<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arrR<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span>
            flag <span class="token operator">=</span><span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">{</span>
        arrR<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>



   <span class="token keyword">return</span> arrR<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">,</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// @lc code=end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u597D\u590D\u6742<br> Accepted 294/294 cases passed (64 ms) Your runtime beats 77.13 % of javascript submissions Your memory usage beats 21.52 % of javascript submissions (43.2 MB)</p></div><h3 id="_67-x-\u7684\u5E73\u65B9\u6839" tabindex="-1"><a class="header-anchor" href="#_67-x-\u7684\u5E73\u65B9\u6839" aria-hidden="true">#</a> 67 x-\u7684\u5E73\u65B9\u6839</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x \u7684\u5E73\u65B9\u6839 
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mySqrt</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// return Math.floor(Math.pow(x,0.5))</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">&lt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">===</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">}</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">&lt;</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>x<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">/</span>i<span class="token operator">&lt;</span>i<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> i<span class="token operator">-</span><span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// @lc code=end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u4E0D\u5982\u8C03\u7528Math\u7684\u65B9\u6CD5</p></div><h3 id="_70-\u722C\u697C\u68AF" tabindex="-1"><a class="header-anchor" href="#_70-\u722C\u697C\u68AF" aria-hidden="true">#</a> 70.\u722C\u697C\u68AF</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] \u722C\u697C\u68AF
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">climbStairs</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// let res =[ 0,1, 2, 3, 5, 8, 13, 21, 34, 55, 89,</span>
    <span class="token comment">//      144, 233, 377, 610, 987, 1597, 2584, 4181,</span>
    <span class="token comment">//       6765, 10946, 17711, 28657, 46368, 75025,</span>
    <span class="token comment">//        121393, 196418, 317811, 514229, 832040,</span>
    <span class="token comment">//         1346269, 2178309, 3524578, 5702887,</span>
    <span class="token comment">//          9227465, 14930352, 24157817, 39088169,</span>
    <span class="token comment">//           63245986, 102334155, 165580141,</span>
    <span class="token comment">//            267914296, 433494437, 701408733, </span>
    <span class="token comment">//            1134903170, 1836311903][n];</span>
    <span class="token comment">// return res;</span>

    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>arr<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">+</span>arr<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">[</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>




    <span class="token punctuation">}</span>
<span class="token comment">// @lc code=end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_83-\u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_83-\u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20" aria-hidden="true">#</a> 83.\u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] \u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deleteDuplicates</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">if</span><span class="token punctuation">(</span>head<span class="token operator">===</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>head<span class="token operator">!==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> resHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> resHead<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        res<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        res <span class="token operator">=</span> res<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> resHead<span class="token punctuation">;</span>


<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// @lc code=end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_88-\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_88-\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4" aria-hidden="true">#</a> 88.\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] \u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">m</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums2</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify nums1 in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> m<span class="token punctuation">,</span> nums2<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span>m<span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token punctuation">(</span>m<span class="token operator">+</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums2<span class="token punctuation">[</span>i<span class="token operator">-</span>m<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> 
    nums1 <span class="token operator">=</span> nums1<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token keyword">return</span> a<span class="token operator">-</span>b<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// @lc code=end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4E8C\u53C9\u6811" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u53C9\u6811" aria-hidden="true">#</a> \u4E8C\u53C9\u6811</h4><p>\u9012\u5F52</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u524D\u4E2D\u540E\u5E8F\u6392\u5E8F</span>
<span class="token keyword">const</span> <span class="token function-variable function">preOrder</span> <span class="token operator">=</span><span class="token parameter">root</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">preOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">preOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">inOrder</span> <span class="token operator">=</span><span class="token parameter">root</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token function">preOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">preOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">postOrder</span> <span class="token operator">=</span><span class="token parameter">root</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token function">preOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">preOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3>`,45)]))}var i=s(e,[["render",o],["__file","leetcode.html.vue"]]);export{i as default};
//# sourceMappingURL=leetcode.html.6b1f2144.js.map
