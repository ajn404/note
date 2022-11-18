[[toc]]

## [github](https://github.com/ajn404/rust_practice)
## hello rust

<ClientOnly>
     <RustPlayground 
     async
     code='fn main(){
    println!("hello Rust")
}'
></RustPlayground>
</ClientOnly>

## basic

### 1.3variables
:::tip
变量默认是不可变的,使用`mut`使其可变
:::

<ClientOnly>
     <RustPlayground 
     async
     code='fn main() {
    let x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");
}'
></RustPlayground>
</ClientOnly>



### 1.4functions

<ClientOnly>
     <RustPlayground 
     async
     code='// functions
fn main(){
    first_name();
    last_name();
}
fn first_name(){
    println!("ajn404");
}
fn last_name(){
    println!("n-graymoon");
}
// cargo run --bin a1
// cargo run -q -bin a1'
></RustPlayground>
</ClientOnly>

### 1.5println!

<ClientOnly>
     <RustPlayground 
     async
     code='fn sum(a:i32,b:i32)->i32{
    a-b
}
fn display_result(result:i32){
    println!("{:?}",result)
}
fn main(){
    let result = sum(2,3);
    display_result(result);
}'
></RustPlayground>
</ClientOnly>

<ClientOnly>
     <RustPlayground 
     async
     code='fn main() {
    println!("test println!");
    println!("{}", 1);//默认用法
    println!("{:o}", 8);//8进制
    println!("256的16进制小写为 {:x}", 256);//16进制小写
    println!("{:X}", 256);//16进制大写
    println!("0的指针{:p}", &0);//指针
    println!("18二进制 {:b}", 18);//二进制
    println!("10000科学计数 {:e}", 10000f32);//科学计数
    println!("10000科学计数 (大写){:E}", 10000f32);//科学计数
    println!("{:?}","test"); //打印debug
    println!("{:#?}",("test1","test2"));//带换行和缩进的debug
    println!("{a}{b}",a=19,b="xx");//命名参数
}'
></RustPlayground>
</ClientOnly>


### 1.6match

<ClientOnly>
     <RustPlayground 
     async
     code='fn main(){
    let my_bool = false;
    match my_bool{
        false=>println!("hh"),
        true=>println!("wawa"),
    }
}'
></RustPlayground>
</ClientOnly>

<ClientOnly>
     <RustPlayground 
     async
     code='fn match_fn(val:i32){
    match val{
        1=>println!("one"),
        2=>println!("two"),
        3=>println!("three"),
        _=>println!("{:?}",val)
    }
}
fn main(){
    let val =  4;
    match_fn(val);
    match_fn(1);
}'
></RustPlayground>
</ClientOnly>

### loop

<ClientOnly>
     <RustPlayground 
     async
     code='fn main(){
    let mut i = 4;
    loop{
        println!("{:?}",i);
        i = i -1;
        if i < 1 {
            break;
        }
    }
    println!("done")
}'
></RustPlayground>
</ClientOnly>

### while

<ClientOnly>
     <RustPlayground 
     async
     code='fn main(){
    let mut x = 99;
    while x>10{
        x = x - 2;
        println!("{:?}=>{:?}",x,x-2);
    }
    println!("done");
}'
></RustPlayground>
</ClientOnly>

### enum 枚举

<ClientOnly>
     <RustPlayground 
     async
     code='enum Direction{
    Up,Down,Left,Right
}
fn which_way(go: Direction){
    match go{
        Direction::Up=>println!("Up"),
        Direction::Down=>println!("down"),
        Direction::Left=>println!("Left"),
        Direction::Right=>println!("right"),
    }
}
fn main(){
    which_way(Direction::Left);
    which_way(Direction::Right);
    which_way(Direction::Up);
    which_way(Direction::Down);
}'
></RustPlayground>
</ClientOnly>

### struct 结构体

<ClientOnly>
     <RustPlayground 
     async
     code='struct GroceryItem {
        stock:i32,
        price:f64,            
} 
fn main(){
    let cereal = GroceryItem {
        stock:10,
        price:1.22,
    };
    println!("stock:{:?}",cereal.stock);
    println!("price:{:?}",cereal.price);
}'
></RustPlayground>
</ClientOnly>

### struct enum 应用

<ClientOnly>
     <RustPlayground 
     async
     code='enum Flavor {
    Spark,
    Sweet,
    Fruity,
}
struct drink {
    flavor:Flavor,
    fluid_oz:f64,
}
fn print_fn(dr:drink){
    match dr.flavor{
        Flavor::Spark=>println!("spark"),
        Flavor::Fruity=>println!("fruity"),
        Flavor::Sweet=>println!("Sweet"),
    }
    println!("{:?}",dr.fluid_oz);
}
fn main(){
    let dr = drink{
        flavor:Flavor::Spark,
        fluid_oz:1.5,
    };
    let cl = dr.fluid_oz.clone();
    print_fn(dr);
    println!("{:?}",cl); 
}'
></RustPlayground>
</ClientOnly>

### number calculate

<ClientOnly>
     <RustPlayground 
     async
     code='fn sub(a:i32,b:i32)->i32{
    a-b
}
fn main(){
    let sum = 2+2;
    let value = 10 -5;
    // * / 
    let five = sub(8,3);
    let zero = 6 % 3;
    println!("{:?}",five);
}'
></RustPlayground>
</ClientOnly>

### match default

<ClientOnly>
     <RustPlayground 
     async
     code='fn main(){
    let some_bool = "C";
    match some_bool {
        "A" => println!("true"),
        "B" => println!("false"),
        _ => println!("else"),
    }
}'
></RustPlayground>
</ClientOnly>

### guess game (可恶的是，https://play.rust-lang.org/ playground不能使用控制台)
输入你猜测的数字
<ClientOnly>
     <RustPlayground 
     async
     code='use std::io;
fn main(){
    println!("guess your number!");
    println!("Please inpput your guess number:");
    let mut guess = String::new();
    io::stdin().read_line(&mut guess).expect("Falied to read line");
    println!("your guess:{}",guess);
    //生成保密数字
}'
></RustPlayground>
</ClientOnly>

显示“秘密数字”
<ClientOnly>
     <RustPlayground 
     async
     code='use std::io;
use rand::Rng;
fn main(){
    println!("guess the number");
    let secret_number = rand::thread_rng().gen_range(1,101);
    println!("the secret number is {}",secret_number);
    println!("please input your guess :");
    let mut guess = String::new();
    io::stdin().read_line(&mut guess).expect("failed to read line");
    println!("Your guess is :{}",guess);
}'
></RustPlayground>
</ClientOnly>

Ordering是两值之间比较的结果
<ClientOnly>
     <RustPlayground 
     async
     code='use std::io;
use std::cmp::Ordering;
use rand::Rng;
fn main(){
    println!("guess the number");
    let secret_number = rand::thread_rng().gen_range(1,101);
    println!("the secret number is {}",secret_number);
    loop{
        println!("please input your guess :");
        let mut guess = String::new();
        io::stdin().read_line(&mut guess).expect("failed to read line");
        println!("Your guess is :{}",guess);
        //将输入的字符串转成数字
        //u32 32位无符号整数
        let guess:u32=guess.trim().parse().expect("please type a number");
        match guess.cmp(&secret_number){
            Ordering::Less=>println!("Too small!"),
            Ordering::Greater=>println!("Too big"),
            Ordering::Equal=>{
                println!("you win!");
                break;
            }
        }
    }
}'
></RustPlayground>
</ClientOnly>

guess game最终版

<ClientOnly>
     <RustPlayground 
     async
     code='use std::io;
use std::cmp::Ordering;
use rand::Rng;
fn main(){
    println!("guess the number");
    let secret_number = rand::thread_rng().gen_range(1,101);
    println!("the secret number is {}",secret_number);
    loop{
        println!("please input your guess :");
        let mut guess = String::new();
        io::stdin().read_line(&mut guess).expect("failed to read line");
        println!("Your guess is :{}",guess);
        //将输入的字符串转成数字
        //u32 32位无符号整数
        let guess:u32=  match guess.trim().parse(){
          Ok(num)=>num,
            Err(_)=>continue,
        };
        match guess.cmp(&secret_number){
            Ordering::Less=>println!("Too small!"),
            Ordering::Greater=>println!("Too big"),
            Ordering::Equal=>{
                println!("you win!");
                break;
            }
        }
    }
}'
></RustPlayground>
</ClientOnly>

## [rust语言圣经练习](https://course.rs/about-book.html)

### 1.1安装环境
<CodeGroup>
  <CodeGroupItem title="卸载rust">

```bash:no-line-numbers
rustup self uninstall
```
  </CodeGroupItem>
  <CodeGroupItem title="安装rust" active>

```bash:no-line-numbers
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

  </CodeGroupItem>

<CodeGroupItem title="查看版本号" active>

```shell:no-line-numbers
ajn404@ajn404deMacBook-Air sit-pad % cargo -V
cargo 1.65.0 (4bc8f24d3 2022-10-20)
ajn404@ajn404deMacBook-Air sit-pad % rustc -V
rustc 1.65.0 (897e37553 2022-11-02)
```

  </CodeGroupItem>

<CodeGroupItem title="cargo命令" active>

```bash:no-line-numbers
cargo new hello_world
cd hello_world
cargo run 
cargo build
cargo check
cargo run --release
cargo build --release
```

cargo.toml是cargo 特有的项目描述文件,cargo.lock是<strong>项目依赖详细清单</strong>
:::tip
.lock在可运行项目中需上传git,在包/库项目中写在gitignore中
:::
</CodeGroupItem>

</CodeGroup>

### 1.4 hello world

<ClientOnly>
     <RustPlayground 
     async
     code='fn greet_world(){
    let southern_germany = "Grüß Gott!";
    let chinese = "世界，你好";
    let english = "World, hello";
    let regions = [southern_germany, chinese, english];
    for region in regions.iter() {
        println!("{}", &region);
    }
}
fn main() {
    greet_world();
}'
></RustPlayground>
</ClientOnly>

<ClientOnly>
     <RustPlayground 
     async
     code='fn main() {
    let penguin_data = "\
    common name,length (cm)
    Little penguin,33
    Yellow-eyed penguin,65
    Fiordland penguin,60
    Invalid,data
    ";
    let records = penguin_data.lines();
    for (i, record) in records.enumerate() {
      if i == 0 || record.trim().len() == 0 {
        continue;
      }
      // 声明一个 fields 变量，类型是 Vec
      // Vec 是 vector 的缩写，是一个可伸缩的集合类型，可以认为是一个动态数组
      // <_>表示 Vec 中的元素类型由编译器自行推断，在很多场景下，都会帮我们省却不少功夫
      let fields: Vec<_> = record
        .split(",")
        .map(|field| field.trim())
        .collect();
      if cfg!(debug_assertions) {
          // 输出到标准错误输出
        eprintln!("debug: {:?} -> {:?}",
               record, fields);
      }
      let name = fields[0];
      // 1. 尝试把 fields[1] 的值转换为 f32 类型的浮点数，如果成功，则把 f32 值赋给 length 变量
      //
      // 2. if let 是一个匹配表达式，用来从=右边的结果中，匹配出 length 的值：
      //   1）当=右边的表达式执行成功，则会返回一个 Ok(f32) 的类型，若失败，则会返回一个 Err(e) 类型，if let 的作用就是仅匹配 Ok 也就是成功的情况，如果是错误，就直接忽略
      //   2）同时 if let 还会做一次解构匹配，通过 Ok(length) 去匹配右边的 Ok(f32)，最终把相应的 f32 值赋给 length
      //
      // 3. 当然你也可以忽略成功的情况，用 if let Err(e) = fields[1].parse::<f32>() {...}匹配出错误，然后打印出来，但是没啥卵用
      if let Ok(length) = fields[1].parse::<f32>() {
          // 输出到标准输出
          println!("{}, {}cm", name, length);
      }
    }
  }
 '
></RustPlayground>
</ClientOnly>

### 1.6避免从入门到放弃

<i>链表在 Rust 中简直是地狱一般的难度，我见过太多英雄好汉难过链表关，最终黯然退幕</i>

### 2.1绑定 
<ClientOnly>
     <RustPlayground 
     async
     code='fn main(){
    let x = 5;
    let _y = 10;
}'
></RustPlayground>
</ClientOnly>

<ClientOnly>
     <RustPlayground 
     async
     code='fn main() {
    //变量结构
    let (a, mut b): (bool, bool) = (true, false);
    println!("a = {:?}, b = {:?}", a, b);
    b = true;
    assert_eq!(a, b);
}'
></RustPlayground>
</ClientOnly>

<ClientOnly>
     <RustPlayground 
     async
     code='struct Struct {
    e: i32
}
fn main() {
    let (a, b, c, d, e);
    (a, b) = (1, 2);
    // _ 代表匹配一个值，但是我们不关心具体的值是什么，因此没有使用一个变量名而是使用了 _
    [c, .., d, _] = [1, 2, 3, 4, 5];
    Struct { e, .. } = Struct { e: 5 };
    assert_eq!([1, 2, 1, 4, 5], [a, b, c, d, e]);
}'
></RustPlayground>
</ClientOnly>

<ClientOnly>
     <RustPlayground 
     async
     code='
fn main() {
const MAX_POINTS: u32 = 100_000;
println!("{}",MAX_POINTS)
}'
></RustPlayground>
</ClientOnly>

<ClientOnly>
     <RustPlayground 
     async
     code='fn main() {
    let x = 5;
    // 在main函数的作用域内对之前的x进行遮蔽
    let x = x + 1;
    {
        // 在当前的花括号作用域内，对之前的x进行遮蔽
        let x = x * 2;
        println!("The value of x in the inner scope is: {}", x);
    }
    println!("The value of x is: {}", x);
}'
></RustPlayground>
</ClientOnly>

### [习题](https://zh.practice.rs/variables.html)[答案](https://github.com/sunface/rust-by-practice/blob/master/solutions/variables.md)

1.绑定与可变性

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='// 修复下面代码的错误并尽可能少的修改
fn main() {
    let x: i32; // 未初始化，但被使用
    let y: i32; // 未初始化，也未被使用
    println!("x is equal to {}", x); 
}'
></RustPlayground>
</ClientOnly>

<ClientOnly>
     <RustPlayground 
     async
     code='
// 修复下面代码的错误并尽可能少的修改
fn main() {
    let x: i32=0; // 未初始化，但被使用
    let y: i32=0; // 未初始化，也未被使用
    println!("x is equal to {}", x); 
}'
></RustPlayground>
</ClientOnly>

2.
<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='
// 完形填空，让代码编译
fn main() {
    let __ = 1;
    __ += 2;  
    println!("x = {}", x); 
}'
></RustPlayground>
</ClientOnly>

<ClientOnly>
     <RustPlayground 
     async
     code='// 完形填空，让代码编译
fn main() {
    let mut x = 1;
    x += 2;
    println!("x = {}", x); 
}'
></RustPlayground>
</ClientOnly>

3.变量作用域

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='
// 修复下面代码的错误并使用尽可能少的改变
fn main() {
    let x: i32 = 10;
    {
        let y: i32 = 5;
        println!("x 的值是 {}, y 的值是 {}", x, y);
    }
    println!("x 的值是 {}, y 的值是 {}", x, y); 
}
'
></RustPlayground>
</ClientOnly>

<ClientOnly>
     <RustPlayground 
     async
     code='// 修复下面代码的错误并使用尽可能少的改变
fn main() {
    let x: i32 = 10;
    let mut z:i32 = 0;
    {
        let y: i32 = 5;
        println!("x 的值是 {}, y 的值是 {}", x, y);
        z = y;
    }
    println!("x 的值是 {}, y 的值是 {}", x, z); 
}'
></RustPlayground>
</ClientOnly>


4.🌟🌟

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='// 修复错误
fn main() {
    println!("{}, world", x); 
}
fn define_x() {
    let x = "hello";
}
'
></RustPlayground>
</ClientOnly>

<ClientOnly>
     <RustPlayground 
     async
     code='// 修复错误
fn main() {
    let mut x = "";
    x = "hello";
    println!("{}, world", x); 
}'
></RustPlayground>
</ClientOnly>

5.shadowing

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='
// 只允许修改 `assert_eq!` 来让 `println!` 工作(在终端输出 `42`)
fn main() {
    let x: i32 = 5;
    {
        let x = 12;
        assert_eq!(x, 5);
    }
    assert_eq!(x, 12);
    let x = 42;
    println!("{}", x); // 输出 "42".
}
'
></RustPlayground>
</ClientOnly>

<ClientOnly>
     <RustPlayground 
     async
     code='
// 只允许修改 `assert_eq!` 来让 `println!` 工作(在终端输出 `42`)
fn main() {
    let x: i32 = 5;
    {
        let x = 12;
        assert_eq!(x, 12);
    }
    assert_eq!(x, 5);
    let x = 42;
    println!("{}", x); // 输出 "42".
}
'
></RustPlayground>
</ClientOnly>

6.🌟🌟删除一行

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='
fn main() {
    let mut x: i32 = 1;
    x = 7;
    // 遮蔽且再次绑定
    let x = x; 
    x += 3;
    let y = 4;
    // 遮蔽
    let y = "I can also be bound to text!"; 
}
'
></RustPlayground>
</ClientOnly>

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='fn main() {
    let mut x: i32 = 1;
    x = 7;
    // 遮蔽且再次绑定
    x += 3;
    let y = 4;
    // 遮蔽
    let y = "I can also be bound to text!"; 
}'
></RustPlayground>
</ClientOnly>

7.使用以下方法来修复编译器输出的 warning :
🌟 一种方法
🌟🌟 两种方法


<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='fn main() {
    let x = 1; 
}'
></RustPlayground>
</ClientOnly>
✨
<ClientOnly>
     <RustPlayground 
     async
     code='fn main() {
    let _x = 1; 
}'
></RustPlayground>
</ClientOnly>

<ClientOnly>
     <RustPlayground 
     async
     code='fn main() {
    let x = 1; 
    println!("{:?}",x);
}'
></RustPlayground>
</ClientOnly>


### 2.2基本类型
#### 2.2.1 数值类型

/*copy
### 

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code=''
></RustPlayground>
</ClientOnly>

*/

## net about 

[cn](https://www.rust-lang.org/zh-CN)<br/>
[example](https://doc.rust-lang.org/rust-by-example/hello.html)<br/>
[book](https://doc.rust-lang.org/book/title-page.html)<br/>
[api](https://docs.rs/)<br/>
[crates ](https://crates.io/)<br/>

## 实践项目
[tauri](https://tauri.app/zh/)<br/>

## 申明

本页面的编译结果来源为[rust playground](https://play.rust-lang.org/),感谢开源，thanks ©MIT


