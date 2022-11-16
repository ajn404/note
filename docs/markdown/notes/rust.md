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

## [rust语言圣洁练习](https://course.rs/about-book.html)

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

### 1.4

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



/*copy
### 

<ClientOnly>
     <RustPlayground 
     async
     code=''
></RustPlayground>
</ClientOnly>

*/

## net about 

[rust cn](https://www.rust-lang.org/zh-CN)<br/>
[rust example](https://doc.rust-lang.org/rust-by-example/hello.html)<br/>
[rust book](https://doc.rust-lang.org/book/title-page.html)<br/>
[rust api](https://docs.rs/)<br/>
[rust crate register](https://crates.io/)<br/>

## 实践项目
[tauri](https://tauri.app/zh/)<br/>

## 申明

本页面的编译结果来源为[rust playground](https://play.rust-lang.org/),感谢开源，thanks ©MIT


