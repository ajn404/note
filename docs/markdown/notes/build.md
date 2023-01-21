## 打包相关
### 输出esm,cjs,umd
esm: EcmaScript module
cjs: CommonJs module
umd: Universak Module Definition 可以在script标签中执行，被Common JS模块加载器加载，被AMD模块加载器加载

esm被认为是未来,但cjs仍然在社区和生态系统中方占有重要地位。esm对打包工具来说更容易正确地进行treeshaking，因此对于库来说，拥有这种格式很重要。或许在将来的某一天,你的库只需要输出esm.
你可能已经注意到,und已经与commomjs模块加载器兼容--所以为什么还要同时具备cjs和umd输出呢？一个原因是，与umd文件相比，CommonJS文件在对依赖进行条件导入时通常表现更好；例如：
@[code](./build/cjsExports.js)
上面的例子，当使用 CommonJS 模块时，只会引入 production 或 development 包中的一个。但是，对于 UMD 模块，最终可能会将两个包全部引入。
最后还需要注意是，开发者可能会在其应用中同时使用 cjs 和 esm，发生双包危险。利用 package.json#exports 进行 package exports 也可以帮助防止这种情况的发生。

#### treeshaking
tree shaking 是一种代码优化技术，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。它依赖于 ES2015 模块语法的 静态结构 特性，例如 import 和 export。这个术语和概念实际上是由 ES2015 模块打包工具 rollup 普及起来的。
作用：
它的作用就是将程序中没有用到的代码在打包编译的时候都删除掉，这样能减少打包后包的文件大小，减少程序执行的时间。

```js
// a.js
export const a = 'a';
export const b = 'b';    // 不导出，删除
export const c = 'c';    // 导出不引用，删除

// index.js 
import { a, c } from './a.js'; 
console.log(a);

if(false) {             // 不会执行的代码，删除
  console.log('delete');  
}
```


### 输出多文件
