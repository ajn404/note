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

## 1.basic

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

## 申明

本页面的编译结果来源为[rust playground](https://play.rust-lang.org/),感谢开源，thanks ©MIT


