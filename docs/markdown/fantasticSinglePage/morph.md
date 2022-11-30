---
title :  p5 is fantastic
---

<ClientOnly>
<p5 type="morph"></p5>
</ClientOnly>


### morph 表情/变形


#### vector lerp
```math
lerp(y1,y2,weight)=y1+(y2−y1)∗weight
```

<iframe src='/note/markdown/notInPage/fantastic/vector.lerp.html' style='width:100%;height:100vh;border:none'></iframe>

glsl中同样有lerp函数

```glsl
float lerp (float a, floatb, float x)
{
    a + x * (b - a);
}
```
示例
```glsl
varying mediump vec2 texCoord0;
 
void main()
{
    precision mediump float;
    vec4 colorBlack = vec4(0., 0., 0., 1.);
    //有中间向两边渐变成黑色
    gl_FragColor = lerp(0., 1., length(texCoord0 - 0.5)) * colorBlack;  
}
```
