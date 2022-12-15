
## chatgpt&&scattered

### 什么是arraybuffer
ArrayBuffer 是一种 JavaScript 类型，它可以用来表示通用的二进制数据缓冲区。它本身不能直接操作，而是要配合一些其他类型的对象来使用，比如 TypedArray 和 DataView。通常情况下，ArrayBuffer 对象用于在 Web 应用程序中处理来自网络或本地文件的二进制数据。

### arraybuffer使用示例

下面是一个简单的示例，展示了如何创建一个 ArrayBuffer 对象，并使用 Uint8Array 对象来访问其中的数据：

```js
// 创建一个 8 字节长的 ArrayBuffer 对象
const buffer = new ArrayBuffer(8);

// 使用 Uint8Array 来访问 ArrayBuffer 中的数据
const view = new Uint8Array(buffer);

// 将数据存储到 ArrayBuffer 中
for (let i = 0; i < view.length; i++) {
  view[i] = i;
}

// 访问 ArrayBuffer 中的数据
for (let i = 0; i < view.length; i++) {
  console.log(view[i]);  // 输出：0 1 2 3 4 5 6 7
}

```
在这个示例中，我们首先创建了一个 8 字节长的 ArrayBuffer 对象，然后使用 Uint8Array 对象来访问该缓冲区中的数据。然后，我们使用循环将一些数据存储到缓冲区中，最后再使用循环来访问缓冲区中的数据。

### css

#### skicky position&element plus无限滚动 无限获取冷笑话【笑】

```scss
 .infinite-list-item {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1em;
            background: var(--el-color-primary-light-9);
            margin: 10px;
            color: var(--el-color-primary);
            height: 2em;
            text-overflow: ellipsis;
            border-radius: 5px;
            box-shadow: 1px 1px 1px 1px rgba(0, 0, 255, .1);;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;

            &.header {
                position: sticky;
                top: 0;
                background: rgba(0,1,1,.6);
                color: bisque;
                margin: 0 10px 10px 10px;
            }

            &+& {
                margin-top: 10px;

            }
        }
```

<ClientOnly>
<newFeature type='skicky'></newFeature>
</ClientOnly>

#### empty选择器

```scss
.empty{
    display: flex;
    align-content: center;
    justify-content: center;
    &:empty::after{
        content: '暂无数据';
        font-size: 1.5em;
    }
}
```

<ClientOnly>
<newFeature type='empty'></newFeature>
</ClientOnly>

### backdround-clip

```css
.clip{
    font-size: 2em;
    letter-spacing: .4em;
    font-weight: bold;
    line-height: 1;
    background-image: url('/note/images/logo.jpg');
    color: transparent;
    background-size: contain;
    background-clip: text;
}
```

<ClientOnly>
<newFeature type='clip'></newFeature>
</ClientOnly>
