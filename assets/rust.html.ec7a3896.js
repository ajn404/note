import{_ as f}from"./rustPlayground.abf94e34.js";import{_ as m,b as o,o as b,c,e,q as l,a as t,w as a,H as d}from"./app.28a7effe.js";import"./vue-codemirror.esm.b9f40e42.js";const g={},y={id:"github",tabindex:"-1"},x={href:"https://github.com/ajn404/rust_practice",target:"_blank",rel:"noopener noreferrer"},h={id:"rust\u8BED\u8A00\u5723\u7ECF\u7EC3\u4E60",tabindex:"-1"},k={href:"https://course.rs/about-book.html",target:"_blank",rel:"noopener noreferrer"},v={id:"\u4E60\u9898\u7B54\u6848",tabindex:"-1"},_={href:"https://zh.practice.rs/variables.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/sunface/rust-by-practice/blob/master/solutions/variables.md",target:"_blank",rel:"noopener noreferrer"},q={id:"\u4E60\u9898-\u7B54\u6848",tabindex:"-1"},z={href:"https://zh.practice.rs/basic-types/numbers.html",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/sunface/rust-by-practice/blob/master/solutions/basic-types/numbers.md",target:"_blank",rel:"noopener noreferrer"},T={href:"https://www.rust-lang.org/zh-CN",target:"_blank",rel:"noopener noreferrer"},S={href:"https://doc.rust-lang.org/rust-by-example/hello.html",target:"_blank",rel:"noopener noreferrer"},I={href:"https://doc.rust-lang.org/book/title-page.html",target:"_blank",rel:"noopener noreferrer"},R={href:"https://docs.rs/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://crates.io/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://tauri.app/zh/",target:"_blank",rel:"noopener noreferrer"},F={href:"https://play.rust-lang.org/",target:"_blank",rel:"noopener noreferrer"},G={id:"utf8-slice",tabindex:"-1"},N={href:"https://crates.io/crates/utf8_slice/1.0.0",target:"_blank",rel:"noopener noreferrer"};function V(A,n){const i=o("ExternalLinkIcon"),s=f,r=o("ClientOnly"),u=o("CodeGroupItem"),p=o("CodeGroup");return b(),c("div",null,[e("h2",y,[n[1]||(n[1]=e("a",{class:"header-anchor",href:"#github","aria-hidden":"true"},"#",-1)),n[2]||(n[2]=l()),e("a",x,[n[0]||(n[0]=l("github")),t(i)])]),n[37]||(n[37]=e("h2",{id:"hello-rust",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hello-rust","aria-hidden":"true"},"#"),l(" hello rust")],-1)),t(r,null,{default:a(()=>[t(s,{async:"",code:`fn main(){
    println!("hello Rust")
}`})]),_:1}),n[38]||(n[38]=d('<h2 id="basic" tabindex="-1"><a class="header-anchor" href="#basic" aria-hidden="true">#</a> basic</h2><h3 id="_1-3variables" tabindex="-1"><a class="header-anchor" href="#_1-3variables" aria-hidden="true">#</a> 1.3variables</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u53D8\u91CF\u9ED8\u8BA4\u662F\u4E0D\u53EF\u53D8\u7684,\u4F7F\u7528<code>mut</code>\u4F7F\u5176\u53EF\u53D8</p></div>',3)),t(r,null,{default:a(()=>[t(s,{async:"",code:`fn main() {
    let x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");
}`})]),_:1}),n[39]||(n[39]=e("h3",{id:"_1-4functions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-4functions","aria-hidden":"true"},"#"),l(" 1.4functions")],-1)),t(r,null,{default:a(()=>[t(s,{async:"",code:`// functions
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
// cargo run -q -bin a1`})]),_:1}),n[40]||(n[40]=e("h3",{id:"_1-5println",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-5println","aria-hidden":"true"},"#"),l(" 1.5println!")],-1)),t(r,null,{default:a(()=>[t(s,{async:"",code:`fn sum(a:i32,b:i32)->i32{
    a-b
}
fn display_result(result:i32){
    println!("{:?}",result)
}
fn main(){
    let result = sum(2,3);
    display_result(result);
}`})]),_:1}),t(r,null,{default:a(()=>[t(s,{async:"",code:`fn main() {
    println!("test println!");
    println!("{}", 1);//\u9ED8\u8BA4\u7528\u6CD5
    println!("{:o}", 8);//8\u8FDB\u5236
    println!("256\u768416\u8FDB\u5236\u5C0F\u5199\u4E3A {:x}", 256);//16\u8FDB\u5236\u5C0F\u5199
    println!("{:X}", 256);//16\u8FDB\u5236\u5927\u5199
    println!("0\u7684\u6307\u9488{:p}", &0);//\u6307\u9488
    println!("18\u4E8C\u8FDB\u5236 {:b}", 18);//\u4E8C\u8FDB\u5236
    println!("10000\u79D1\u5B66\u8BA1\u6570 {:e}", 10000f32);//\u79D1\u5B66\u8BA1\u6570
    println!("10000\u79D1\u5B66\u8BA1\u6570 (\u5927\u5199){:E}", 10000f32);//\u79D1\u5B66\u8BA1\u6570
    println!("{:?}","test"); //\u6253\u5370debug
    println!("{:#?}",("test1","test2"));//\u5E26\u6362\u884C\u548C\u7F29\u8FDB\u7684debug
    println!("{a}{b}",a=19,b="xx");//\u547D\u540D\u53C2\u6570
}`})]),_:1}),n[41]||(n[41]=e("h3",{id:"_1-6match",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-6match","aria-hidden":"true"},"#"),l(" 1.6match")],-1)),t(r,null,{default:a(()=>[t(s,{async:"",code:`fn main(){
    let my_bool = false;
    match my_bool{
        false=>println!("hh"),
        true=>println!("wawa"),
    }
}`})]),_:1}),t(r,null,{default:a(()=>[t(s,{async:"",code:`fn match_fn(val:i32){
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
}`})]),_:1}),n[42]||(n[42]=e("h3",{id:"loop",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#loop","aria-hidden":"true"},"#"),l(" loop")],-1)),t(r,null,{default:a(()=>[t(s,{async:"",code:`fn main(){
    let mut i = 4;
    loop{
        println!("{:?}",i);
        i = i -1;
        if i < 1 {
            break;
        }
    }
    println!("done")
}`})]),_:1}),n[43]||(n[43]=e("h3",{id:"while",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#while","aria-hidden":"true"},"#"),l(" while")],-1)),t(r,null,{default:a(()=>[t(s,{async:"",code:`fn main(){
    let mut x = 99;
    while x>10{
        x = x - 2;
        println!("{:?}=>{:?}",x,x-2);
    }
    println!("done");
}`})]),_:1}),n[44]||(n[44]=e("h3",{id:"enum-\u679A\u4E3E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#enum-\u679A\u4E3E","aria-hidden":"true"},"#"),l(" enum \u679A\u4E3E")],-1)),t(r,null,{default:a(()=>[t(s,{async:"",code:`enum Direction{
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
}`})]),_:1}),n[45]||(n[45]=e("h3",{id:"struct-\u7ED3\u6784\u4F53",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#struct-\u7ED3\u6784\u4F53","aria-hidden":"true"},"#"),l(" struct \u7ED3\u6784\u4F53")],-1)),t(r,null,{default:a(()=>[t(s,{async:"",code:`struct GroceryItem {
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
}`})]),_:1}),n[46]||(n[46]=e("h3",{id:"struct-enum-\u5E94\u7528",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#struct-enum-\u5E94\u7528","aria-hidden":"true"},"#"),l(" struct enum \u5E94\u7528")],-1)),t(r,null,{default:a(()=>[t(s,{async:"",code:`enum Flavor {
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
}`})]),_:1}),n[47]||(n[47]=e("h3",{id:"number-calculate",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#number-calculate","aria-hidden":"true"},"#"),l(" number calculate")],-1)),t(r,null,{default:a(()=>[t(s,{async:"",code:`fn sub(a:i32,b:i32)->i32{
    a-b
}
fn main(){
    let sum = 2+2;
    let value = 10 -5;
    // * / 
    let five = sub(8,3);
    let zero = 6 % 3;
    println!("{:?}",five);
}`})]),_:1}),n[48]||(n[48]=e("h3",{id:"match-default",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#match-default","aria-hidden":"true"},"#"),l(" match default")],-1)),t(r,null,{default:a(()=>[t(s,{async:"",code:`fn main(){
    let some_bool = "C";
    match some_bool {
        "A" => println!("true"),
        "B" => println!("false"),
        _ => println!("else"),
    }
}`})]),_:1}),n[49]||(n[49]=e("h3",{id:"guess-game-\u53EF\u6076\u7684\u662F-https-play-rust-lang-org-playground\u4E0D\u80FD\u4F7F\u7528\u63A7\u5236\u53F0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#guess-game-\u53EF\u6076\u7684\u662F-https-play-rust-lang-org-playground\u4E0D\u80FD\u4F7F\u7528\u63A7\u5236\u53F0","aria-hidden":"true"},"#"),l(" guess game (\u53EF\u6076\u7684\u662F\uFF0Chttps://play.rust-lang.org/ playground\u4E0D\u80FD\u4F7F\u7528\u63A7\u5236\u53F0)")],-1)),n[50]||(n[50]=e("p",null,"\u8F93\u5165\u4F60\u731C\u6D4B\u7684\u6570\u5B57",-1)),t(r,null,{default:a(()=>[t(s,{async:"",code:`use std::io;
fn main(){
    println!("guess your number!");
    println!("Please inpput your guess number:");
    let mut guess = String::new();
    io::stdin().read_line(&mut guess).expect("Falied to read line");
    println!("your guess:{}",guess);
    //\u751F\u6210\u4FDD\u5BC6\u6570\u5B57
}`})]),_:1}),n[51]||(n[51]=e("p",null,"\u663E\u793A\u201C\u79D8\u5BC6\u6570\u5B57\u201D",-1)),t(r,null,{default:a(()=>[t(s,{async:"",code:`use std::io;
use rand::Rng;
fn main(){
    println!("guess the number");
    let secret_number = rand::thread_rng().gen_range(1,101);
    println!("the secret number is {}",secret_number);
    println!("please input your guess :");
    let mut guess = String::new();
    io::stdin().read_line(&mut guess).expect("failed to read line");
    println!("Your guess is :{}",guess);
}`})]),_:1}),n[52]||(n[52]=e("p",null,"Ordering\u662F\u4E24\u503C\u4E4B\u95F4\u6BD4\u8F83\u7684\u7ED3\u679C",-1)),t(r,null,{default:a(()=>[t(s,{async:"",code:`use std::io;
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
        //\u5C06\u8F93\u5165\u7684\u5B57\u7B26\u4E32\u8F6C\u6210\u6570\u5B57
        //u32 32\u4F4D\u65E0\u7B26\u53F7\u6574\u6570
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
}`})]),_:1}),n[53]||(n[53]=e("p",null,"guess game\u6700\u7EC8\u7248",-1)),t(r,null,{default:a(()=>[t(s,{async:"",code:`use std::io;
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
        //\u5C06\u8F93\u5165\u7684\u5B57\u7B26\u4E32\u8F6C\u6210\u6570\u5B57
        //u32 32\u4F4D\u65E0\u7B26\u53F7\u6574\u6570
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
}`})]),_:1}),e("h2",h,[n[4]||(n[4]=e("a",{class:"header-anchor",href:"#rust\u8BED\u8A00\u5723\u7ECF\u7EC3\u4E60","aria-hidden":"true"},"#",-1)),n[5]||(n[5]=l()),e("a",k,[n[3]||(n[3]=l("rust\u8BED\u8A00\u5723\u7ECF\u7EC3\u4E60")),t(i)])]),n[54]||(n[54]=e("h3",{id:"_1-1\u5B89\u88C5\u73AF\u5883",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-1\u5B89\u88C5\u73AF\u5883","aria-hidden":"true"},"#"),l(" 1.1\u5B89\u88C5\u73AF\u5883")],-1)),t(p,null,{default:a(()=>[t(u,{title:"\u5378\u8F7Drust"},{default:a(()=>n[6]||(n[6]=[e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,`rustup self uninstall
`)])],-1)])),_:1}),t(u,{title:"\u5B89\u88C5rust",active:""},{default:a(()=>n[7]||(n[7]=[e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"curl"),l(),e("span",{class:"token parameter variable"},"--proto"),l(),e("span",{class:"token string"},"'=https'"),l(),e("span",{class:"token parameter variable"},"--tlsv1.2"),l(" https://sh.rustup.rs "),e("span",{class:"token parameter variable"},"-sSf"),l(),e("span",{class:"token operator"},"|"),l(),e("span",{class:"token function"},"sh"),l(`
`)])])],-1)])),_:1}),t(u,{title:"\u67E5\u770B\u7248\u672C\u53F7",active:""},{default:a(()=>n[8]||(n[8]=[e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,[l("ajn404@ajn404deMacBook-Air sit-pad % "),e("span",{class:"token function"},"cargo"),l(),e("span",{class:"token parameter variable"},"-V"),l(`
`),e("span",{class:"token function"},"cargo"),l(),e("span",{class:"token number"},"1.65"),l(".0 "),e("span",{class:"token punctuation"},"("),l("4bc8f24d3 "),e("span",{class:"token number"},"2022"),l("-10-20"),e("span",{class:"token punctuation"},")"),l(`
ajn404@ajn404deMacBook-Air sit-pad % rustc `),e("span",{class:"token parameter variable"},"-V"),l(`
rustc `),e("span",{class:"token number"},"1.65"),l(".0 "),e("span",{class:"token punctuation"},"("),l("897e37553 "),e("span",{class:"token number"},"2022"),l("-11-02"),e("span",{class:"token punctuation"},")"),l(`
`)])])],-1)])),_:1}),t(u,{title:"cargo\u547D\u4EE4",active:""},{default:a(()=>n[9]||(n[9]=[e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"cargo"),l(` new hello_world
`),e("span",{class:"token builtin class-name"},"cd"),l(` hello_world
`),e("span",{class:"token function"},"cargo"),l(` run 
`),e("span",{class:"token function"},"cargo"),l(` build
`),e("span",{class:"token function"},"cargo"),l(` check
`),e("span",{class:"token function"},"cargo"),l(" run "),e("span",{class:"token parameter variable"},"--release"),l(`
`),e("span",{class:"token function"},"cargo"),l(" build "),e("span",{class:"token parameter variable"},"--release"),l(`
`)])])],-1),e("p",null,[l("cargo.toml\u662Fcargo \u7279\u6709\u7684\u9879\u76EE\u63CF\u8FF0\u6587\u4EF6,cargo.lock\u662F"),e("strong",null,"\u9879\u76EE\u4F9D\u8D56\u8BE6\u7EC6\u6E05\u5355")],-1),e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,".lock\u5728\u53EF\u8FD0\u884C\u9879\u76EE\u4E2D\u9700\u4E0A\u4F20git,\u5728\u5305/\u5E93\u9879\u76EE\u4E2D\u5199\u5728gitignore\u4E2D")],-1)])),_:1})]),_:1}),n[55]||(n[55]=e("h3",{id:"_1-4-hello-world",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-4-hello-world","aria-hidden":"true"},"#"),l(" 1.4 hello world")],-1)),t(r,null,{default:a(()=>[t(s,{async:"",code:`fn greet_world(){
    let southern_germany = "Gr\xFC\xDF Gott!";
    let chinese = "\u4E16\u754C\uFF0C\u4F60\u597D";
    let english = "World, hello";
    let regions = [southern_germany, chinese, english];
    for region in regions.iter() {
        println!("{}", &region);
    }
}
fn main() {
    greet_world();
}`})]),_:1}),t(r,null,{default:a(()=>[t(s,{async:"",code:`fn main() {
    let penguin_data = "\\
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
      // \u58F0\u660E\u4E00\u4E2A fields \u53D8\u91CF\uFF0C\u7C7B\u578B\u662F Vec
      // Vec \u662F vector \u7684\u7F29\u5199\uFF0C\u662F\u4E00\u4E2A\u53EF\u4F38\u7F29\u7684\u96C6\u5408\u7C7B\u578B\uFF0C\u53EF\u4EE5\u8BA4\u4E3A\u662F\u4E00\u4E2A\u52A8\u6001\u6570\u7EC4
      // <_>\u8868\u793A Vec \u4E2D\u7684\u5143\u7D20\u7C7B\u578B\u7531\u7F16\u8BD1\u5668\u81EA\u884C\u63A8\u65AD\uFF0C\u5728\u5F88\u591A\u573A\u666F\u4E0B\uFF0C\u90FD\u4F1A\u5E2E\u6211\u4EEC\u7701\u5374\u4E0D\u5C11\u529F\u592B
      let fields: Vec<_> = record
        .split(",")
        .map(|field| field.trim())
        .collect();
      if cfg!(debug_assertions) {
          // \u8F93\u51FA\u5230\u6807\u51C6\u9519\u8BEF\u8F93\u51FA
        eprintln!("debug: {:?} -> {:?}",
               record, fields);
      }
      let name = fields[0];
      // 1. \u5C1D\u8BD5\u628A fields[1] \u7684\u503C\u8F6C\u6362\u4E3A f32 \u7C7B\u578B\u7684\u6D6E\u70B9\u6570\uFF0C\u5982\u679C\u6210\u529F\uFF0C\u5219\u628A f32 \u503C\u8D4B\u7ED9 length \u53D8\u91CF
      //
      // 2. if let \u662F\u4E00\u4E2A\u5339\u914D\u8868\u8FBE\u5F0F\uFF0C\u7528\u6765\u4ECE=\u53F3\u8FB9\u7684\u7ED3\u679C\u4E2D\uFF0C\u5339\u914D\u51FA length \u7684\u503C\uFF1A
      //   1\uFF09\u5F53=\u53F3\u8FB9\u7684\u8868\u8FBE\u5F0F\u6267\u884C\u6210\u529F\uFF0C\u5219\u4F1A\u8FD4\u56DE\u4E00\u4E2A Ok(f32) \u7684\u7C7B\u578B\uFF0C\u82E5\u5931\u8D25\uFF0C\u5219\u4F1A\u8FD4\u56DE\u4E00\u4E2A Err(e) \u7C7B\u578B\uFF0Cif let \u7684\u4F5C\u7528\u5C31\u662F\u4EC5\u5339\u914D Ok \u4E5F\u5C31\u662F\u6210\u529F\u7684\u60C5\u51B5\uFF0C\u5982\u679C\u662F\u9519\u8BEF\uFF0C\u5C31\u76F4\u63A5\u5FFD\u7565
      //   2\uFF09\u540C\u65F6 if let \u8FD8\u4F1A\u505A\u4E00\u6B21\u89E3\u6784\u5339\u914D\uFF0C\u901A\u8FC7 Ok(length) \u53BB\u5339\u914D\u53F3\u8FB9\u7684 Ok(f32)\uFF0C\u6700\u7EC8\u628A\u76F8\u5E94\u7684 f32 \u503C\u8D4B\u7ED9 length
      //
      // 3. \u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u5FFD\u7565\u6210\u529F\u7684\u60C5\u51B5\uFF0C\u7528 if let Err(e) = fields[1].parse::<f32>() {...}\u5339\u914D\u51FA\u9519\u8BEF\uFF0C\u7136\u540E\u6253\u5370\u51FA\u6765\uFF0C\u4F46\u662F\u6CA1\u5565\u5375\u7528
      if let Ok(length) = fields[1].parse::<f32>() {
          // \u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA
          println!("{}, {}cm", name, length);
      }
    }
  }
 `})]),_:1}),n[56]||(n[56]=e("h3",{id:"_1-6\u907F\u514D\u4ECE\u5165\u95E8\u5230\u653E\u5F03",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-6\u907F\u514D\u4ECE\u5165\u95E8\u5230\u653E\u5F03","aria-hidden":"true"},"#"),l(" 1.6\u907F\u514D\u4ECE\u5165\u95E8\u5230\u653E\u5F03")],-1)),n[57]||(n[57]=e("p",null,[e("i",null,"\u94FE\u8868\u5728 Rust \u4E2D\u7B80\u76F4\u662F\u5730\u72F1\u4E00\u822C\u7684\u96BE\u5EA6\uFF0C\u6211\u89C1\u8FC7\u592A\u591A\u82F1\u96C4\u597D\u6C49\u96BE\u8FC7\u94FE\u8868\u5173\uFF0C\u6700\u7EC8\u9EEF\u7136\u9000\u5E55")],-1)),n[58]||(n[58]=e("h3",{id:"_2-1\u7ED1\u5B9A",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-1\u7ED1\u5B9A","aria-hidden":"true"},"#"),l(" 2.1\u7ED1\u5B9A")],-1)),t(r,null,{default:a(()=>[t(s,{async:"",code:`fn main(){
    let x = 5;
    let _y = 10;
}`})]),_:1}),t(r,null,{default:a(()=>[t(s,{async:"",code:`fn main() {
    //\u53D8\u91CF\u7ED3\u6784
    let (a, mut b): (bool, bool) = (true, false);
    println!("a = {:?}, b = {:?}", a, b);
    b = true;
    assert_eq!(a, b);
}`})]),_:1}),t(r,null,{default:a(()=>[t(s,{async:"",code:`struct Struct {
    e: i32
}
fn main() {
    let (a, b, c, d, e);
    (a, b) = (1, 2);
    // _ \u4EE3\u8868\u5339\u914D\u4E00\u4E2A\u503C\uFF0C\u4F46\u662F\u6211\u4EEC\u4E0D\u5173\u5FC3\u5177\u4F53\u7684\u503C\u662F\u4EC0\u4E48\uFF0C\u56E0\u6B64\u6CA1\u6709\u4F7F\u7528\u4E00\u4E2A\u53D8\u91CF\u540D\u800C\u662F\u4F7F\u7528\u4E86 _
    [c, .., d, _] = [1, 2, 3, 4, 5];
    Struct { e, .. } = Struct { e: 5 };
    assert_eq!([1, 2, 1, 4, 5], [a, b, c, d, e]);
}`})]),_:1}),t(r,null,{default:a(()=>[t(s,{async:"",code:`
fn main() {
const MAX_POINTS: u32 = 100_000;
println!("{}",MAX_POINTS)
}`})]),_:1}),t(r,null,{default:a(()=>[t(s,{async:"",code:`fn main() {
    let x = 5;
    // \u5728main\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u5185\u5BF9\u4E4B\u524D\u7684x\u8FDB\u884C\u906E\u853D
    let x = x + 1;
    {
        // \u5728\u5F53\u524D\u7684\u82B1\u62EC\u53F7\u4F5C\u7528\u57DF\u5185\uFF0C\u5BF9\u4E4B\u524D\u7684x\u8FDB\u884C\u906E\u853D
        let x = x * 2;
        println!("The value of x in the inner scope is: {}", x);
    }
    println!("The value of x is: {}", x);
}`})]),_:1}),e("h3",v,[n[12]||(n[12]=e("a",{class:"header-anchor",href:"#\u4E60\u9898\u7B54\u6848","aria-hidden":"true"},"#",-1)),n[13]||(n[13]=l()),e("a",_,[n[10]||(n[10]=l("\u4E60\u9898")),t(i)]),e("a",w,[n[11]||(n[11]=l("\u7B54\u6848")),t(i)])]),n[59]||(n[59]=e("p",null,"1.\u7ED1\u5B9A\u4E0E\u53EF\u53D8\u6027",-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`// \u4FEE\u590D\u4E0B\u9762\u4EE3\u7801\u7684\u9519\u8BEF\u5E76\u5C3D\u53EF\u80FD\u5C11\u7684\u4FEE\u6539
fn main() {
    let x: i32; // \u672A\u521D\u59CB\u5316\uFF0C\u4F46\u88AB\u4F7F\u7528
    let y: i32; // \u672A\u521D\u59CB\u5316\uFF0C\u4E5F\u672A\u88AB\u4F7F\u7528
    println!("x is equal to {}", x); 
}`})]),_:1}),t(r,null,{default:a(()=>[t(s,{async:"",code:`
// \u4FEE\u590D\u4E0B\u9762\u4EE3\u7801\u7684\u9519\u8BEF\u5E76\u5C3D\u53EF\u80FD\u5C11\u7684\u4FEE\u6539
fn main() {
    let x: i32=0; // \u672A\u521D\u59CB\u5316\uFF0C\u4F46\u88AB\u4F7F\u7528
    let y: i32=0; // \u672A\u521D\u59CB\u5316\uFF0C\u4E5F\u672A\u88AB\u4F7F\u7528
    println!("x is equal to {}", x); 
}`})]),_:1}),n[60]||(n[60]=e("ol",{start:"2"},[e("li")],-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`
// \u5B8C\u5F62\u586B\u7A7A\uFF0C\u8BA9\u4EE3\u7801\u7F16\u8BD1
fn main() {
    let __ = 1;
    __ += 2;  
    println!("x = {}", x); 
}`})]),_:1}),t(r,null,{default:a(()=>[t(s,{async:"",code:`// \u5B8C\u5F62\u586B\u7A7A\uFF0C\u8BA9\u4EE3\u7801\u7F16\u8BD1
fn main() {
    let mut x = 1;
    x += 2;
    println!("x = {}", x); 
}`})]),_:1}),n[61]||(n[61]=e("p",null,"3.\u53D8\u91CF\u4F5C\u7528\u57DF",-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`
// \u4FEE\u590D\u4E0B\u9762\u4EE3\u7801\u7684\u9519\u8BEF\u5E76\u4F7F\u7528\u5C3D\u53EF\u80FD\u5C11\u7684\u6539\u53D8
fn main() {
    let x: i32 = 10;
    {
        let y: i32 = 5;
        println!("x \u7684\u503C\u662F {}, y \u7684\u503C\u662F {}", x, y);
    }
    println!("x \u7684\u503C\u662F {}, y \u7684\u503C\u662F {}", x, y); 
}
`})]),_:1}),t(r,null,{default:a(()=>[t(s,{async:"",code:`// \u4FEE\u590D\u4E0B\u9762\u4EE3\u7801\u7684\u9519\u8BEF\u5E76\u4F7F\u7528\u5C3D\u53EF\u80FD\u5C11\u7684\u6539\u53D8
fn main() {
    let x: i32 = 10;
    let mut z:i32 = 0;
    {
        let y: i32 = 5;
        println!("x \u7684\u503C\u662F {}, y \u7684\u503C\u662F {}", x, y);
        z = y;
    }
    println!("x \u7684\u503C\u662F {}, y \u7684\u503C\u662F {}", x, z); 
}`})]),_:1}),n[62]||(n[62]=e("p",null,"4.\u{1F31F}\u{1F31F}",-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`// \u4FEE\u590D\u9519\u8BEF
fn main() {
    println!("{}, world", x); 
}
fn define_x() {
    let x = "hello";
}
`})]),_:1}),t(r,null,{default:a(()=>[t(s,{async:"",code:`// \u4FEE\u590D\u9519\u8BEF
fn main() {
    let mut x = "";
    x = "hello";
    println!("{}, world", x); 
}`})]),_:1}),n[63]||(n[63]=e("p",null,"5.shadowing",-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`
// \u53EA\u5141\u8BB8\u4FEE\u6539 \`assert_eq!\` \u6765\u8BA9 \`println!\` \u5DE5\u4F5C(\u5728\u7EC8\u7AEF\u8F93\u51FA \`42\`)
fn main() {
    let x: i32 = 5;
    {
        let x = 12;
        assert_eq!(x, 5);
    }
    assert_eq!(x, 12);
    let x = 42;
    println!("{}", x); // \u8F93\u51FA "42".
}
`})]),_:1}),t(r,null,{default:a(()=>[t(s,{async:"",code:`
// \u53EA\u5141\u8BB8\u4FEE\u6539 \`assert_eq!\` \u6765\u8BA9 \`println!\` \u5DE5\u4F5C(\u5728\u7EC8\u7AEF\u8F93\u51FA \`42\`)
fn main() {
    let x: i32 = 5;
    {
        let x = 12;
        assert_eq!(x, 12);
    }
    assert_eq!(x, 5);
    let x = 42;
    println!("{}", x); // \u8F93\u51FA "42".
}
`})]),_:1}),n[64]||(n[64]=e("p",null,"6.\u{1F31F}\u{1F31F}\u5220\u9664\u4E00\u884C",-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`
fn main() {
    let mut x: i32 = 1;
    x = 7;
    // \u906E\u853D\u4E14\u518D\u6B21\u7ED1\u5B9A
    let x = x; 
    x += 3;
    let y = 4;
    // \u906E\u853D
    let y = "I can also be bound to text!"; 
}
`})]),_:1}),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`fn main() {
    let mut x: i32 = 1;
    x = 7;
    // \u906E\u853D\u4E14\u518D\u6B21\u7ED1\u5B9A
    x += 3;
    let y = 4;
    // \u906E\u853D
    let y = "I can also be bound to text!"; 
}`})]),_:1}),n[65]||(n[65]=e("p",null,"7.\u4F7F\u7528\u4EE5\u4E0B\u65B9\u6CD5\u6765\u4FEE\u590D\u7F16\u8BD1\u5668\u8F93\u51FA\u7684 warning : \u{1F31F} \u4E00\u79CD\u65B9\u6CD5 \u{1F31F}\u{1F31F} \u4E24\u79CD\u65B9\u6CD5",-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`fn main() {
    let x = 1; 
}`})]),_:1}),n[66]||(n[66]=l(" \u2728 ")),t(r,null,{default:a(()=>[t(s,{async:"",code:`fn main() {
    let _x = 1; 
}`})]),_:1}),t(r,null,{default:a(()=>[t(s,{async:"",code:`fn main() {
    let x = 1; 
    println!("{:?}",x);
}`})]),_:1}),n[67]||(n[67]=e("p",null,"8.\u53D8\u91CF\u89E3\u6784",-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`
// \u4FEE\u590D\u4E0B\u9762\u4EE3\u7801\u7684\u9519\u8BEF\u5E76\u5C3D\u53EF\u80FD\u5C11\u7684\u4FEE\u6539
fn main() {
    let (x, y) = (1, 2);
    x += 2;
    assert_eq!(x, 3);
    assert_eq!(y, 2);
}
`})]),_:1}),n[68]||(n[68]=e("p",null,"my own solution \u53D8\u91CF\u906E\u853D",-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`fn main() {
    let (x, y) = (1, 2);
    let x = x+2;
    assert_eq!(x, 3);
    assert_eq!(y, 2);
}`})]),_:1}),n[69]||(n[69]=e("p",null,"\u53EF\u53D8\u6027",-1)),t(r,null,{default:a(()=>[t(s,{async:"",code:`// \u4FEE\u590D\u4E0B\u9762\u4EE3\u7801\u7684\u9519\u8BEF\u5E76\u5C3D\u53EF\u80FD\u5C11\u7684\u4FEE
fn main() {
    let (mut x, y) = (1, 2);
    x+=2;
    assert_eq!(x, 3);
    assert_eq!(y, 2);
}`})]),_:1}),n[70]||(n[70]=e("p",null,"9,\u89E3\u6784\u5F0F\u8D4B\u503C",-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`fn main() {
    let (x, y);
    (x,..) = (3, 4);
    [.., y] = [1, 2];
    // \u586B\u7A7A\uFF0C\u8BA9\u4EE3\u7801\u5DE5\u4F5C
    assert_eq!([x,y], __);}`})]),_:1}),n[71]||(n[71]=e("p",null,"my own solution",-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`fn main() {
    let (x, y);
    (x,..) = (3, 4);
    [.., y] = [1, 2];
    // \u586B\u7A7A\uFF0C\u8BA9\u4EE3\u7801\u5DE5\u4F5C
    assert_eq!([x,y], [3,2]);
}`})]),_:1}),n[72]||(n[72]=d('<h3 id="_2-2\u57FA\u672C\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_2-2\u57FA\u672C\u7C7B\u578B" aria-hidden="true">#</a> 2.2\u57FA\u672C\u7C7B\u578B</h3><h4 id="_2-2-1-\u6570\u503C\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u6570\u503C\u7C7B\u578B" aria-hidden="true">#</a> 2.2.1 \u6570\u503C\u7C7B\u578B</h4><h4 id="\u6574\u578B" tabindex="-1"><a class="header-anchor" href="#\u6574\u578B" aria-hidden="true">#</a> \u6574\u578B</h4><p>i8,u8...</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>rust\u6574\u6570\u7C7B\u578B\u9ED8\u8BA4\u4F7F\u7528i32<br> panic:\u8868\u793A\u7A0B\u5E8F\u5D29\u6E83\u9000\u51FA<br> \u6574\u578B\u6EA2\u51FA\uFF0C\u8865\u7801\u5FAA\u73AF\u6EA2\u51FA</p></div>',5)),t(r,null,{default:a(()=>[t(s,{async:"",code:`fn main() {
    let a : u8 = 255;
    let b = a.wrapping_add(20);
    println!("{}", b);  // 19
}`})]),_:1}),n[73]||(n[73]=e("h4",{id:"\u6D6E\u70B9\u7C7B\u578B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6D6E\u70B9\u7C7B\u578B","aria-hidden":"true"},"#"),l(" \u6D6E\u70B9\u7C7B\u578B")],-1)),t(r,null,{default:a(()=>[t(s,{async:"",code:`fn main() {
    let x = 2.0; // f64
    let y: f32 = 3.0; // f32}
`})]),_:1}),n[74]||(n[74]=e("p",null,"\u7CBE\u5EA6\u63A7\u5236",-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`fn main() {
    // \u65AD\u8A000.1 + 0.2\u4E0E0.3\u76F8\u7B49
    assert!((0.1_f64+0.2-0.3).abs()<0.00001);
}`})]),_:1}),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`fn main() {
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
}`})]),_:1}),n[75]||(n[75]=e("p",null,"NaN",-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`fn main() {
    let x = (-42.0_f32).sqrt();
    assert_eq!(x, x);}`})]),_:1}),n[76]||(n[76]=e("p",null,"is_nan",-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`fn main() {
    let x = (-42.0_f32).sqrt();
    if x.is_nan() {
        println!("\u672A\u5B9A\u4E49\u7684\u6570\u5B66\u884C\u4E3A")
    }
}`})]),_:1}),n[77]||(n[77]=e("p",null,"/*copy",-1)),n[78]||(n[78]=e("h4",{id:"\u8FD0\u7B97",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8FD0\u7B97","aria-hidden":"true"},"#"),l(" \u8FD0\u7B97")],-1)),n[79]||(n[79]=e("p",null,"\u7EFC\u5408\u793A\u4F8B",-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`fn main() {
    // \u7F16\u8BD1\u5668\u4F1A\u8FDB\u884C\u81EA\u52A8\u63A8\u5BFC\uFF0C\u7ED9\u4E88twenty i32\u7684\u7C7B\u578B
    let twenty = 20;
    // \u7C7B\u578B\u6807\u6CE8
    let twenty_one: i32 = 21;
    // \u901A\u8FC7\u7C7B\u578B\u540E\u7F00\u7684\u65B9\u5F0F\u8FDB\u884C\u7C7B\u578B\u6807\u6CE8\uFF1A22\u662Fi32\u7C7B\u578B
    let twenty_two = 22i32;
    // \u53EA\u6709\u540C\u6837\u7C7B\u578B\uFF0C\u624D\u80FD\u8FD0\u7B97
    let addition = twenty + twenty_one + twenty_two;
    println!("{} + {} + {} = {}", twenty, twenty_one, twenty_two, addition);
    // \u5BF9\u4E8E\u8F83\u957F\u7684\u6570\u5B57\uFF0C\u53EF\u4EE5\u7528_\u8FDB\u884C\u5206\u5272\uFF0C\u63D0\u5347\u53EF\u8BFB\u6027
    let one_million: i64 = 1_000_000;
    println!("{}", one_million.pow(2));
    // \u5B9A\u4E49\u4E00\u4E2Af32\u6570\u7EC4\uFF0C\u5176\u4E2D42.0\u4F1A\u81EA\u52A8\u88AB\u63A8\u5BFC\u4E3Af32\u7C7B\u578B
    let forty_twos = [
      42.0,
      42f32,
      42.0_f32,
    ];
    // \u6253\u5370\u6570\u7EC4\u4E2D\u7B2C\u4E00\u4E2A\u503C\uFF0C\u5E76\u63A7\u5236\u5C0F\u6570\u4F4D\u4E3A2\u4F4D
    println!("{:.2}", forty_twos[0]);
  }`})]),_:1}),n[80]||(n[80]=d('<h4 id="\u4F4D\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u4F4D\u8FD0\u7B97" aria-hidden="true">#</a> \u4F4D\u8FD0\u7B97</h4><table><thead><tr><th>\u8FD0\u7B97\u7B26</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>&amp; \u4F4D\u4E0E</td><td>\u76F8\u540C\u4F4D\u7F6E\u5747\u4E3A1\u65F6\u5219\u4E3A1\uFF0C\u5426\u5219\u4E3A0</td></tr><tr><td>| \u4F4D\u6216</td><td>\u76F8\u540C\u4F4D\u7F6E\u53EA\u8981\u67091\u65F6\u5219\u4E3A1\uFF0C\u5426\u5219\u4E3A0</td></tr><tr><td>^ \u5F02\u6216</td><td>\u76F8\u540C\u4F4D\u7F6E\u4E0D\u76F8\u540C\u52191\uFF0C\u76F8\u540C\u5219\u4E3A0</td></tr><tr><td>! \u4F4D\u975E</td><td>\u628A\u4F4D\u4E2D\u76840\u548C1\u76F8\u4E92\u53D6\u53CD\uFF0C\u53730\u7F6E\u4E3A1\uFF0C1\u7F6E\u4E3A0</td></tr><tr><td>&lt;&lt; \u5DE6\u79FB</td><td>\u6240\u6709\u4F4D\u5411\u5DE6\u79FB\u52A8\u6307\u5B9A\u4F4D\u6570\uFF0C\u53F3\u4F4D\u88650</td></tr><tr><td>&gt;&gt; \u53F3\u79FB</td><td>\u6240\u6709\u4F4D\u5411\u53F3\u79FB\u52A8\u6307\u5B9A\u4F4D\u6570\uFF0C\u5E26\u7B26\u53F7\u79FB\u52A8\uFF08\u6B63\u6570\u88650\uFF0C\u8D1F\u6570\u88651</td></tr></tbody></table>',2)),t(r,null,{default:a(()=>[t(s,{async:"",code:`fn main() {
  //i\u4E3A\u6709\u7B26\u53F7
  // \u4E8C\u8FDB\u5236\u4E3A00000010
  let a:i32 = 2;
  // \u4E8C\u8FDB\u5236\u4E3A00000011
  let b:i32 = 3;
  println!("(a & b) value is {}", a & b);
  println!("(a | b) value is {}", a | b);
  println!("(a ^ b) value is {}", a ^ b);
  println!("(!b) value is {} ", !b);
  println!("(a << b) value is {}", a << b);
  println!("(a >> b) value is {}", a >> b);
  let mut a = a;
  // \u6CE8\u610F\u8FD9\u4E9B\u8BA1\u7B97\u7B26\u9664\u4E86!\u4E4B\u5916\u90FD\u53EF\u4EE5\u52A0\u4E0A=\u8FDB\u884C\u8D4B\u503C (\u56E0\u4E3A!=\u8981\u7528\u6765\u5224\u65AD\u4E0D\u7B49\u4E8E)
  a <<= b;
  println!("(a << b) value is {}", a);
}
`})]),_:1}),n[81]||(n[81]=e("h4",{id:"\u5E8F\u5217",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5E8F\u5217","aria-hidden":"true"},"#"),l(" \u5E8F\u5217")],-1)),n[82]||(n[82]=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[l("1..5\u4E0D\u5305\u51FD5"),e("br"),l(" 1..=5\u5305\u51FD5")])],-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`
fn main(){
  for i in 1..5{
    println!("{}",i);
  } 
  for i in 10..=20{
    println!("{}",i);
  }   
}`})]),_:1}),n[83]||(n[83]=e("h4",{id:"\u6709\u7406\u6570\u548C\u590D\u6570",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6709\u7406\u6570\u548C\u590D\u6570","aria-hidden":"true"},"#"),l(" \u6709\u7406\u6570\u548C\u590D\u6570")],-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`
use num::complex::Complex;
fn main() {
   let a = Complex { re: 2.1, im: -1.2 };
   let b = Complex::new(11.1, 22.2);
   let result = a + b;
   println!("{} + {}i", result.re, result.im)
 }
`})]),_:1}),e("h3",q,[n[16]||(n[16]=e("a",{class:"header-anchor",href:"#\u4E60\u9898-\u7B54\u6848","aria-hidden":"true"},"#",-1)),n[17]||(n[17]=l()),e("a",z,[n[14]||(n[14]=l("\u4E60\u9898")),t(i)]),n[18]||(n[18]=l()),e("a",O,[n[15]||(n[15]=l("\u7B54\u6848")),t(i)])]),n[84]||(n[84]=e("p",null,"1.\u6574\u6570",-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`
// \u79FB\u9664\u67D0\u4E2A\u90E8\u5206\u8BA9\u4EE3\u7801\u5DE5\u4F5C
fn main() {
    let x: i32 = 5;
    let mut y: u32 = 5;
    y = x;
    let z = 10; // \u8FD9\u91CC z \u7684\u7C7B\u578B\u662F? 
}
`})]),_:1}),n[85]||(n[85]=e("p",null,"my own solution",-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`// \u79FB\u9664\u67D0\u4E2A\u90E8\u5206\u8BA9\u4EE3\u7801\u5DE5\u4F5C
fn main() {
    let x: i32 = 5;
    let mut y= 5;
    y = x;
    let z = 10; // \u8FD9\u91CC z \u7684\u7C7B\u578B\u662F? 
}`})]),_:1}),n[86]||(n[86]=e("p",null,"2.\u2728",-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`// \u586B\u7A7A
fn main() {
    let v: u16 = 38_u8 as u16;
    println!("{}",v)
}`})]),_:1}),n[87]||(n[87]=e("p",null,"3.\u81EA\u52A8\u63A8\u5BFC\u7C7B\u578B",-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`
//  \u4FEE\u6539 \`assert_eq!\` \u8BA9\u4EE3\u7801\u5DE5\u4F5C
fn main() {
    let x = 5;
    assert_eq!("i32".to_string(), type_of(&x));
}
// \u4EE5\u4E0B\u51FD\u6570\u53EF\u4EE5\u83B7\u53D6\u4F20\u5165\u53C2\u6570\u7684\u7C7B\u578B\uFF0C\u5E76\u8FD4\u56DE\u7C7B\u578B\u7684\u5B57\u7B26\u4E32\u5F62\u5F0F\uFF0C\u4F8B\u5982  "i8", "u8", "i32", "u32"
fn type_of<T>(_: &T) -> String {
    format!("{}", std::any::type_name::<T>())
}`})]),_:1}),n[88]||(n[88]=e("p",null,"4.i\u6709\u7B26\u53F7 u\u65E0\u7B26\u53F7",-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`fn main() {
    assert_eq!(i8::MAX, 127); 
    assert_eq!(u8::MAX, 255); 
}
`})]),_:1}),n[89]||(n[89]=e("ol",{start:"5"},[e("li",null,"overflow")],-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`
// \u89E3\u51B3\u4EE3\u7801\u4E2D\u7684\u9519\u8BEF\u548C \`panic\`
fn main() {
    let v1 = 251_u16 + 8;
    let v2 = i16::checked_add(251, 8).unwrap();
    println!("{},{}",v1,v2);
 }`})]),_:1}),n[90]||(n[90]=e("ol",{start:"6"},[e("li")],-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`
// \u4FEE\u6539 \`assert!\` \u8BA9\u4EE3\u7801\u5DE5\u4F5C
fn main() {
    let v = 1_024 + 0xff + 0o77 + 0b1111_1111;
    println!("{}",0xff);//255
    //63
    // 255
    assert!(v == 1597);
}
`})]),_:1}),n[91]||(n[91]=e("p",null,"7.\u6D6E\u70B9\u6570",-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`
// \u5C06 ? \u66FF\u6362\u6210\u4F60\u7684\u7B54\u6848
fn main() {
    let x = 1_000.000_1; // f64
    let y: f32 = 0.12; // f32
    let z = 0.01_f64; // f64
}
`})]),_:1}),n[92]||(n[92]=e("ol",{start:"8"},[e("li")],-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`
fn main() {
    assert!(0.1+0.2>0.3);
}
`})]),_:1}),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`
fn main() {
    assert!((0.1_f64+0.2-0.3).abs()<0.00001);
}
`})]),_:1}),n[93]||(n[93]=e("p",null,"9.range\u{1F31F}\u{1F31F} \u4E24\u4E2A\u76EE\u6807: 1. \u4FEE\u6539 assert! \u8BA9\u5B83\u5DE5\u4F5C 2. \u8BA9 println! \u8F93\u51FA: 97 - 122",-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`fn main() {
    let mut sum = 0;
    for i in -3..2 {
        sum += i
    }
    assert!(sum == -5);
    for c in 97..=122 {
        println!("{}",c);
    }
}
`})]),_:1}),n[94]||(n[94]=e("p",null,"10",-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`
// \u586B\u7A7A
use std::ops::{Range, RangeInclusive};
fn main() {
    assert_eq!((1..5), Range{ start: 1, end: 5 });
    assert_eq!((1..=5), RangeInclusive::new(1, 5));
}
`})]),_:1}),n[95]||(n[95]=e("ol",{start:"11"},[e("li")],-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:`
// \u586B\u7A7A\uFF0C\u5E76\u89E3\u51B3\u9519\u8BEF
fn main() {
    // \u6574\u6570\u52A0\u6CD5
    assert!(1u32 + 2 == 3);
    // \u6574\u6570\u51CF\u6CD5
    assert!(1i32 - 2 == -1);
    assert!(1i8 - 2 == -1);
    assert!(3 * 50 == 150);
    assert!(9.6 / 3.2 != 3.0); // error ! \u4FEE\u6539\u5B83\u8BA9\u4EE3\u7801\u5DE5\u4F5C
    println!("{}",9.6/3.2);
    assert!(24 % 5 == 4);    
    // \u903B\u8F91\u4E0E\u6216\u975E\u64CD\u4F5C
    assert!(true && false == false);
    assert!(true || false ==  true);
    assert!(!true ==false);
    // \u4F4D\u64CD\u4F5C
    println!("0011 AND 0101 is {:04b}", 0b0011u32 & 0b0101);
    println!("0011 OR 0101 is {:04b}", 0b0011u32 | 0b0101);
    println!("0011 XOR 0101 is {:04b}", 0b0011u32 ^ 0b0101);
    println!("1 << 5 is {}", 1u32 << 5);
    println!("0x80 >> 2 is 0x{:x}", 0x80u32 >> 2);
}
`})]),_:1}),n[96]||(n[96]=e("p",null,".....\u6548\u7387\u592A\u4F4E\u4E86\uFF0C\u7B49\u6211\u5B66\u5B8C\u518D\u6574\u7406",-1)),n[97]||(n[97]=e("h3",{id:"copy-demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#copy-demo","aria-hidden":"true"},"#"),l(" copy demo")],-1)),t(r,null,{default:a(()=>[t(s,{editable:"true",async:"",code:""})]),_:1}),n[98]||(n[98]=e("h2",{id:"net-about",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#net-about","aria-hidden":"true"},"#"),l(" net about")],-1)),e("p",null,[e("a",T,[n[19]||(n[19]=l("cn")),t(i)]),n[24]||(n[24]=e("br",null,null,-1)),e("a",S,[n[20]||(n[20]=l("example")),t(i)]),n[25]||(n[25]=e("br",null,null,-1)),e("a",I,[n[21]||(n[21]=l("book")),t(i)]),n[26]||(n[26]=e("br",null,null,-1)),e("a",R,[n[22]||(n[22]=l("api")),t(i)]),n[27]||(n[27]=e("br",null,null,-1)),e("a",D,[n[23]||(n[23]=l("crates(rust lib)")),t(i)]),n[28]||(n[28]=e("br",null,null,-1))]),n[99]||(n[99]=e("h2",{id:"\u5B9E\u8DF5\u9879\u76EE",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5B9E\u8DF5\u9879\u76EE","aria-hidden":"true"},"#"),l(" \u5B9E\u8DF5\u9879\u76EE")],-1)),e("p",null,[e("a",C,[n[29]||(n[29]=l("tauri")),t(i)]),n[30]||(n[30]=e("br",null,null,-1))]),n[100]||(n[100]=e("h2",{id:"\u7533\u660E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7533\u660E","aria-hidden":"true"},"#"),l(" \u7533\u660E")],-1)),e("p",null,[n[32]||(n[32]=l("\u672C\u9875\u9762\u7684\u7F16\u8BD1\u7ED3\u679C\u6765\u6E90\u4E3A")),e("a",F,[n[31]||(n[31]=l("rust playground")),t(i)]),n[33]||(n[33]=l(",\u611F\u8C22\u5F00\u6E90\uFF0Cthanks \xA9MIT"))]),n[101]||(n[101]=e("h3",{id:"\u672C\u9875\u9762\u5168\u662F\u7EC4\u4EF6-\u6027\u80FD\u53D8\u5DEE-\u7EC4\u4EF6\u5199\u5F97\u4E0D\u597D",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u672C\u9875\u9762\u5168\u662F\u7EC4\u4EF6-\u6027\u80FD\u53D8\u5DEE-\u7EC4\u4EF6\u5199\u5F97\u4E0D\u597D","aria-hidden":"true"},"#"),l(" \u672C\u9875\u9762\u5168\u662F\u7EC4\u4EF6\uFF0C\u6027\u80FD\u53D8\u5DEE\uFF0C\u7EC4\u4EF6\u5199\u5F97\u4E0D\u597D")],-1)),n[102]||(n[102]=e("h3",{id:"crates",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#crates","aria-hidden":"true"},"#"),l(" crates")],-1)),e("h4",G,[n[35]||(n[35]=e("a",{class:"header-anchor",href:"#utf8-slice","aria-hidden":"true"},"#",-1)),n[36]||(n[36]=l()),e("a",N,[n[34]||(n[34]=l("UTF8 Slice")),t(i)])]),n[103]||(n[103]=d(`<ul><li>A lightweight heapless way to do slicing on unicode strings in Rust.</li></ul><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> utf8_slice<span class="token punctuation">;</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token string">&quot;holla\u4E2D\u56FD\u4EBA\u0928\u092E\u0938\u094D\u0924\u0947&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">// for item in s.bytes(){</span>
    <span class="token comment">//     println!(&quot;{}&quot;,item);</span>
    <span class="token comment">// }</span>
    
    <span class="token keyword">for</span> item <span class="token keyword">in</span> s<span class="token punctuation">.</span><span class="token function">chars</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> sub_s <span class="token operator">=</span> <span class="token namespace">utf8_slice<span class="token punctuation">::</span></span><span class="token function">slice</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span> sub_s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2))])}var M=m(g,[["render",V],["__file","rust.html.vue"]]);export{M as default};
//# sourceMappingURL=rust.html.ec7a3896.js.map
