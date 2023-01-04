

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

8.变量解构

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='
// 修复下面代码的错误并尽可能少的修改
fn main() {
    let (x, y) = (1, 2);
    x += 2;
    assert_eq!(x, 3);
    assert_eq!(y, 2);
}
'
></RustPlayground>
</ClientOnly>

my own solution
变量遮蔽

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='fn main() {
    let (x, y) = (1, 2);
    let x = x+2;
    assert_eq!(x, 3);
    assert_eq!(y, 2);
}'
></RustPlayground>
</ClientOnly>

可变性

<ClientOnly>
     <RustPlayground 
     async
     code='// 修复下面代码的错误并尽可能少的修
fn main() {
    let (mut x, y) = (1, 2);
    x+=2;
    assert_eq!(x, 3);
    assert_eq!(y, 2);
}'
></RustPlayground>
</ClientOnly>


9,解构式赋值

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='fn main() {
    let (x, y);
    (x,..) = (3, 4);
    [.., y] = [1, 2];
    // 填空，让代码工作
    assert_eq!([x,y], __);}'
></RustPlayground>
</ClientOnly>

my own solution

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='fn main() {
    let (x, y);
    (x,..) = (3, 4);
    [.., y] = [1, 2];
    // 填空，让代码工作
    assert_eq!([x,y], [3,2]);
}'
></RustPlayground>
</ClientOnly>


### 2.2基本类型
#### 2.2.1 数值类型

#### 整型
i8,u8...
::: tip 
rust整数类型默认使用i32<br/>
panic:表示程序崩溃退出<br/>
整型溢出，补码循环溢出
:::

<ClientOnly>
     <RustPlayground 
     async
     code='fn main() {
    let a : u8 = 255;
    let b = a.wrapping_add(20);
    println!("{}", b);  // 19
}'
></RustPlayground>
</ClientOnly>

#### 浮点类型
<ClientOnly>
     <RustPlayground 
     async
     code='fn main() {
    let x = 2.0; // f64
    let y: f32 = 3.0; // f32}
'
></RustPlayground>
</ClientOnly>

精度控制
<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='fn main() {
    // 断言0.1 + 0.2与0.3相等
    assert!((0.1_f64+0.2-0.3).abs()<0.00001);
}'
></RustPlayground>
</ClientOnly>

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='fn main() {
    let abc: (f32, f32, f32) = (0.1, 0.2, 0.3);
    let xyz: (f64, f64, f64) = (0.1, 0.2, 0.3);
    println!("abc (f32)");
    println!("   0.1 + 0.2: {:x}", (abc.0 + abc.1).to_bits());
    println!("         0.3: {:x}", (abc.2).to_bits());
    println!();
    println!("xyz (f64)");
    println!("   0.1 + 0.2: {:x}", (xyz.0 + xyz.1).to_bits());
    println!("         0.3: {:x}", (xyz.2).to_bits());
    println!();
    assert!(abc.0 + abc.1 == abc.2);
    assert!(xyz.0 + xyz.1 == xyz.2);
}'
></RustPlayground>
</ClientOnly>

NaN

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='fn main() {
    let x = (-42.0_f32).sqrt();
    assert_eq!(x, x);}'
></RustPlayground>
</ClientOnly>

is_nan
<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='fn main() {
    let x = (-42.0_f32).sqrt();
    if x.is_nan() {
        println!("未定义的数学行为")
    }
}'
></RustPlayground>
</ClientOnly>

/*copy

#### 运算
综合示例
<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='fn main() {
    // 编译器会进行自动推导，给予twenty i32的类型
    let twenty = 20;
    // 类型标注
    let twenty_one: i32 = 21;
    // 通过类型后缀的方式进行类型标注：22是i32类型
    let twenty_two = 22i32;
    // 只有同样类型，才能运算
    let addition = twenty + twenty_one + twenty_two;
    println!("{} + {} + {} = {}", twenty, twenty_one, twenty_two, addition);
    // 对于较长的数字，可以用_进行分割，提升可读性
    let one_million: i64 = 1_000_000;
    println!("{}", one_million.pow(2));
    // 定义一个f32数组，其中42.0会自动被推导为f32类型
    let forty_twos = [
      42.0,
      42f32,
      42.0_f32,
    ];
    // 打印数组中第一个值，并控制小数位为2位
    println!("{:.2}", forty_twos[0]);
  }'
></RustPlayground>
</ClientOnly>

#### 位运算

<table><thead><tr><th>运算符</th><th>说明</th></tr></thead><tbody><tr><td>&amp; 位与</td><td>相同位置均为1时则为1，否则为0</td></tr><tr><td>| 位或</td><td>相同位置只要有1时则为1，否则为0</td></tr><tr><td>^ 异或</td><td>相同位置不相同则1，相同则为0</td></tr><tr><td>! 位非</td><td>把位中的0和1相互取反，即0置为1，1置为0</td></tr><tr><td>&lt;&lt; 左移</td><td>所有位向左移动指定位数，右位补0</td></tr><tr><td>&gt;&gt; 右移</td><td>所有位向右移动指定位数，带符号移动（正数补0，负数补1</td></tr></tbody></table>

<ClientOnly>
     <RustPlayground 
     async
     code='fn main() {
  //i为有符号
  // 二进制为00000010
  let a:i32 = 2;
  // 二进制为00000011
  let b:i32 = 3;
  println!("(a & b) value is {}", a & b);
  println!("(a | b) value is {}", a | b);
  println!("(a ^ b) value is {}", a ^ b);
  println!("(!b) value is {} ", !b);
  println!("(a << b) value is {}", a << b);
  println!("(a >> b) value is {}", a >> b);
  let mut a = a;
  // 注意这些计算符除了!之外都可以加上=进行赋值 (因为!=要用来判断不等于)
  a <<= b;
  println!("(a << b) value is {}", a);
}
'
></RustPlayground>
</ClientOnly>

#### 序列

:::tip
1..5不包函5<br/>
1..=5包函5
:::

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='
fn main(){
  for i in 1..5{
    println!("{}",i);
  } 
  for i in 10..=20{
    println!("{}",i);
  }   
}'
></RustPlayground>
</ClientOnly>


#### 有理数和复数

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='
use num::complex::Complex;
fn main() {
   let a = Complex { re: 2.1, im: -1.2 };
   let b = Complex::new(11.1, 22.2);
   let result = a + b;
   println!("{} + {}i", result.re, result.im)
 }
'
></RustPlayground>
</ClientOnly>



### [习题](https://zh.practice.rs/basic-types/numbers.html) [答案](https://github.com/sunface/rust-by-practice/blob/master/solutions/basic-types/numbers.md)

1.整数

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='
// 移除某个部分让代码工作
fn main() {
    let x: i32 = 5;
    let mut y: u32 = 5;
    y = x;
    let z = 10; // 这里 z 的类型是? 
}
'
></RustPlayground>
</ClientOnly>

my own solution

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='// 移除某个部分让代码工作
fn main() {
    let x: i32 = 5;
    let mut y= 5;
    y = x;
    let z = 10; // 这里 z 的类型是? 
}'
></RustPlayground>
</ClientOnly>


2.✨

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='// 填空
fn main() {
    let v: u16 = 38_u8 as u16;
    println!("{}",v)
}'
></RustPlayground>
</ClientOnly>

3.自动推导类型

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='
//  修改 `assert_eq!` 让代码工作
fn main() {
    let x = 5;
    assert_eq!("i32".to_string(), type_of(&x));
}
// 以下函数可以获取传入参数的类型，并返回类型的字符串形式，例如  "i8", "u8", "i32", "u32"
fn type_of<T>(_: &T) -> String {
    format!("{}", std::any::type_name::<T>())
}'
></RustPlayground>
</ClientOnly>


4.i有符号 u无符号

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='fn main() {
    assert_eq!(i8::MAX, 127); 
    assert_eq!(u8::MAX, 255); 
}
'
></RustPlayground>
</ClientOnly>


5. overflow
<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='
// 解决代码中的错误和 `panic`
fn main() {
    let v1 = 251_u16 + 8;
    let v2 = i16::checked_add(251, 8).unwrap();
    println!("{},{}",v1,v2);
 }'
></RustPlayground>
</ClientOnly>


6.
<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='
// 修改 `assert!` 让代码工作
fn main() {
    let v = 1_024 + 0xff + 0o77 + 0b1111_1111;
    println!("{}",0xff);//255
    //63
    // 255
    assert!(v == 1597);
}
'
></RustPlayground>
</ClientOnly>


7.浮点数

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='
// 将 ? 替换成你的答案
fn main() {
    let x = 1_000.000_1; // f64
    let y: f32 = 0.12; // f32
    let z = 0.01_f64; // f64
}
'
></RustPlayground>
</ClientOnly>

8.
<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='
fn main() {
    assert!(0.1+0.2>0.3);
}
'
></RustPlayground>
</ClientOnly>

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='
fn main() {
    assert!((0.1_f64+0.2-0.3).abs()<0.00001);
}
'
></RustPlayground>
</ClientOnly>

9.range🌟🌟 两个目标: 1. 修改 assert! 让它工作 2. 让 println! 输出: 97 - 122

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='fn main() {
    let mut sum = 0;
    for i in -3..2 {
        sum += i
    }
    assert!(sum == -5);
    for c in 97..=122 {
        println!("{}",c);
    }
}
'
></RustPlayground>
</ClientOnly>

10 
<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='
// 填空
use std::ops::{Range, RangeInclusive};
fn main() {
    assert_eq!((1..5), Range{ start: 1, end: 5 });
    assert_eq!((1..=5), RangeInclusive::new(1, 5));
}
'
></RustPlayground>
</ClientOnly>

11.

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code='
// 填空，并解决错误
fn main() {
    // 整数加法
    assert!(1u32 + 2 == 3);
    // 整数减法
    assert!(1i32 - 2 == -1);
    assert!(1i8 - 2 == -1);
    assert!(3 * 50 == 150);
    assert!(9.6 / 3.2 != 3.0); // error ! 修改它让代码工作
    println!("{}",9.6/3.2);
    assert!(24 % 5 == 4);    
    // 逻辑与或非操作
    assert!(true && false == false);
    assert!(true || false ==  true);
    assert!(!true ==false);
    // 位操作
    println!("0011 AND 0101 is {:04b}", 0b0011u32 & 0b0101);
    println!("0011 OR 0101 is {:04b}", 0b0011u32 | 0b0101);
    println!("0011 XOR 0101 is {:04b}", 0b0011u32 ^ 0b0101);
    println!("1 << 5 is {}", 1u32 << 5);
    println!("0x80 >> 2 is 0x{:x}", 0x80u32 >> 2);
}
'
></RustPlayground>
</ClientOnly>

.....效率太低了，等我学完再整理

### copy demo

<ClientOnly>
     <RustPlayground 
     editable='true'
     async
     code=''
></RustPlayground>
</ClientOnly>

## net about 
[cn](https://www.rust-lang.org/zh-CN)<br/>
[example](https://doc.rust-lang.org/rust-by-example/hello.html)<br/>
[book](https://doc.rust-lang.org/book/title-page.html)<br/>
[api](https://docs.rs/)<br/>
[crates(rust lib)](https://crates.io/)<br/>

## 实践项目
[tauri](https://tauri.app/zh/)<br/>

## 申明

本页面的编译结果来源为[rust playground](https://play.rust-lang.org/),感谢开源，thanks ©MIT

### 本页面全是组件，性能变差，组件写得不好


