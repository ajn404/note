[[toc]]

## [github](https://github.com/ajn404/rust_practice)
## hello rust

<ClientOnly>
     <RustPlayground 
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

本页面的编译来源为[rust playground](https://play.rust-lang.org/)


