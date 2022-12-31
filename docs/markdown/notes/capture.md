---
title: 关于前端贴图
---

## 前端需求心路(一股子翻译腔)

:::details 其他

遇到弄不懂的需求，程序员靠搜索引擎检索和实践，现在多了人工智能，确实也是非常大的助力

### 前期，ya哥问我：前端有方法可以 把环检打过标签的图片 合成新的图片上传吗？

#### 我的第一个解决方案
```js
    // JavaScript 代码
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const image1 = new Image();
    image1.src = '	http://localhost:9999/note/images/hutao/hutao7.png';
    const image2 = new Image();
    image2.src = '	http://localhost:9999/note/images/hutao/hutao1.png';
    image1.onload = () => {
        // ctx.drawImage(image1, 0, 0); // 绘制图片1
        // ctx.drawImage(image2, 0, 0); // 绘制图片2

        // 将合并后的图片保存到本地
        const dataURL = canvas.toDataURL();
        console.log(dataURL);

        let mergeImg = document.querySelector('#merge');
        mergeImg.src = dataURL;
        console.log(mergeImg);
        };
```

#### 我的第二个解决方案
```js
    const fileInput = document.getElementById('fileInput');
    const canvas = document.getElementById('canvas');
    const mergeButton = document.getElementById('mergeButton');

    // 当点击合并按钮时，读取文件并将图片绘制到 canvas 上
    mergeButton.addEventListener('click', () => {
        // 获取文件列表
        const files = fileInput.files;
        if (!files.length) {
            return alert('请选择至少一张图片');
        }

        // 设置 canvas 尺寸
        const width = files.length * 200; // 每张图片宽度为 200px
        const height = 200; // 图片高度为 200px
        canvas.width = width;
        canvas.height = height;

        // 获取 canvas 的 2D 绘图上下文
        const ctx = canvas.getContext('2d');

        // 循环遍历文件列表，并将图片绘制到 canvas 上
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            // 当读取完成时，将图片绘制到 canvas 上
            reader.addEventListener('load', () => {
                const img = new Image();
                img.addEventListener('load', () => {
                    ctx.drawImage(img, i * 200, 0, 200, 200);
                });
                img.src = reader.result;
            });
            reader.readAsDataURL(file);
        }
    });
```

该方案的缺点是：图片的合并是在客户端进行的，如果要合并的图片数量很多或者图片较大，可能会对性能造成影响。
由于图片的合并是在客户端进行的，因此合并的图片不能直接保存到服务器，需要使用其他方法将合并后的图片传回服务器。
<br/>




##### 使用 XMLHttpRequest 对象将图片发送到服务器的示例代码如下：
```js
// 定义服务器端地址
const url = '/upload';

// 创建 XMLHttpRequest 对象
const xhr = new XMLHttpRequest();

// 监听响应状态变化
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      console.log('图片传输成功');
    } else {
      console.error('图片传输失败');
    }
  }
};

// 发送请求
xhr.open('POST', url);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
  image: canvas.toDataURL()
}));
```

##### 使用 Fetch API 将图片发送到服务器的示例代码如下

```js
// 定义服务器端地址
var url = '/upload';
// 发送请求
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    image: canvas.toDataURL()
  })
}).then(response => {
  if (response.ok) {
    console.log('图片传输成功');
  } else {
    console.error('图片传输失败');
  }
});
```
但其实vue2项目代码里面用的axios很方便（小声bb）

#### 后面看意思是把html的标签做成图片
（这样弄是最简单的，但是我没考虑这样弄之前怎么把标签贴到图片，这里可看后面）

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://unpkg.com/html2canvas@1.0.0-rc.5/dist/html2canvas.js"></script>
    <style>
        img{
            width: 200px;
        }

        .hh{
            width: 200px;
            height: 200px;
            background-image: url('https://www.baidu.com/img/flexible/logo/pc/result@2.png');
        }
    </style>
</head>

<body>
    <!-- 引入 html2canvas 库 -->

    <!-- 定义要转换的 HTML 元素 -->
    <div id="myElement">
        <p>这是一个段落</p>
        <div class="hh"></div>
        <img src="" alt="">
    </div>

    <!-- 定义一个按钮，点击时将 HTML 元素转换为图像 -->
    <button onclick="convertToImage()">转换为图像</button>

    <!-- 定义转换函数 -->
    <script>
        function convertToImage() {
            // 使用 html2canvas 将 HTML 元素转换为 canvas
            html2canvas(document.getElementById('myElement')).then(canvas => {
                // 使用 canvas 的 toDataURL() 方法将 canvas 转换为图像
                const img = new Image();
                img.src = canvas.toDataURL();
                document.body.appendChild(img);
            });
        }
    </script>

</body>

</html>
```

这里可以尝试把script的type改成模块(module)，因为用到[html2canvas](https://html2canvas.hertzen.com/)需要es6 Promise支持或者esllint包装的npm包（我的说法）

#### 然后ya哥说下个月的需求是改成图片和标签一起合成，坐标是随机的，还要做到合成一张图片上传给后端

我写的时候，就是现在，突然意识到还有一种方法，就是前端实现标签定位和显示，把标签和坐标和图片传给后端，后端处理合成也不失为一种方案。


:::

#### 我的第三个解决方案

然后当时我的反应是，去保存html标签为图片，通过chatGPT检索找到了html2canvas这个库，于是在本vue3的博客试了试。

##### 控制查看打印
<clientOnly>
<shoot></shoot>
</clientOnly>

##### 如果改成图片，变成下载
<clientOnly>
<shoot type='hutao'></shoot>
</clientOnly>

##### vue3实现贴固定文字，并点击按钮下载图片
<clientOnly>
<shoot type='d3'></shoot>
</clientOnly>

##### vue3实现贴标签，并点击按钮下载图片

<clientOnly>
<shoot type='tag'></shoot>
</clientOnly>

#### 看起来实现了

但是本博客用的是vue3,vue2我需要看看支不支持,我问了chatGPT,确实也是可以的
::: details 查看代码
```vue2
<template>
  <div>
    <button @click="capture">Capture</button>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'

export default {
  methods: {
    async capture () {
      const canvas = await html2canvas(document.body)
      document.body.appendChild(canvas)
    }
  }
}
</script>

```
:::







