
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

### font-display

font-display属性应用于@font-face规则，定义浏览器如何加载和显示字体文件，从而允许在字体加载或加载失败时以回退字体显示文本。这可以通过使文本可见取代空白屏幕来提高性能，但代价是闪烁无样式的文本。

```css
@font-face {
  font-family: "nunito", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```
  font-display 确切的说不是 CSS 属性，而是专用于 @font-face 指令的描述符，它可以取如下几个值：
auto 。这个是 font-display 的默认值，字体的加载过程由浏览器自行决定，不过基本上和取值为 block 时的处理方式一致。
block 。在字体加载前，会使用备用字体渲染，但是显示为空白，使得它一直处于阻塞期，当字体加载完成之后，进入交换期，用下载下来的字体进行文本渲染。不过有些浏览器并不会无限的处于阻塞期，会有超时限制，一般在 3 秒后，如果阻塞期仍然没有加载完字体，那么直接就进入交换期，显示后备字体（而非空白），等字体下载完成之后直接替换。
swap 。基本上没有阻塞期，直接进入交换期，使用后备字体渲染文本，等用到的字体加载完成之后替换掉后备字体。
fallback 。阻塞期很短（大约100毫秒），也就是说会有大约 100 毫秒的显示空白的后备字体，然后交换期也有时限（大约 3 秒），在这段时间内如果字体加载成功了就会替换成该字体，如果没有加载成功那么后续会一直使用后备字体渲染文本。
optional 。与 fallback 的阻塞期一致，但是没有交换期，如果在阻塞期的 100 毫秒内字体加载完成，那么会使用该字体，否则直接使用后备字体。这个就是说指定的网络字体是可有可无的，如果加载很快那么可以显示，加载稍微慢一点就不会显示了，适合网络情况不好的时候，例如移动网络。
那么在了解 font-display 之后，那么我们应该不难看出来，对于大部分情况应该把它的值设置为 swap ，这样在加载网络字体期间，使用后备字体进行渲染，加载完成之后在替换为指定的网络字体

### [three学习](https://www.wenjiangs.com/doc/iqyhrh0n)
### [时间/日期选择器flatpickr](https://flatpickr.js.org/)


### 使用structuredClone()进行深拷贝
```js

// Create an object with a value and a circular reference to itself.
const original = { name: "MDN" };
original.itself = original;

// Clone it
const clone = structuredClone(original);

console.assert(clone !== original); // the objects are not the same (not same identity)
console.assert(clone.name === "MDN"); // they do have the same values
console.assert(clone.itself === clone); // and the circular reference is preserved

```

演示了structuredClone支持深度嵌套对象的克隆


### rust web 多线程项目

#### 第一节：未实现使用线程池改进服务器的吞吐量
实现的功能包括
- 在socket上监听TCP连接
- 解析少量的HTTP请求
- 创建一个合适的HTTP请求
```rust

use std::{
    fs,
    io::{Read, Write},
    net::{TcpListener, TcpStream},
};

fn main() {
    let listener = TcpListener::bind("127.0.0.1:7878").unwrap();
    for stream in listener.incoming() {
        let stream = stream.unwrap();
        handle_connection(stream);
    }
}

fn handle_connection(mut stream: TcpStream) {
    let mut buffer = [0; 9999];
    stream.read(&mut buffer).unwrap();
    let get = b"GET / HTTP/1.1\r\n";
    let (status_line, filename) = if buffer.starts_with(get) {
        ("HTTP/1.1 200 OK\r\n\r\n", "index.html")
    } else {
        ("HTTP/1.1 404 NOT FOUND\r\n\r\n", "404.html")
    };
    let contents = fs::read_to_string(filename).unwrap();
    let response = format!("{}{}", status_line, contents);
    stream.write(response.as_bytes()).unwrap();
    stream.flush().unwrap();
}
```

### ts开源项目
[amplication](https://github.com/amplication/amplication)


### mac报已损坏
```shell
sudo xattr -rd com.apple.quarantine /Applications/ChatGPT.app 
```