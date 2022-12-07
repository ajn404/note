<template>
    <objectification text="note for ecma , glsl , typescript , rust , leetcode , p5 , vtk , kaboom , three , hutao"></objectification>
    <objectification text="rust code demo"></objectification>
    <RustPlayground async code='fn main(){
    first_name();
    last_name();
}
fn first_name(){
    println!("ajn404");
}

fn last_name(){
    println!("n-graymoon");
}'></RustPlayground>
    <objectification text="p5 canvas random"></objectification>
    <p5 type="random"></p5>
</template>

<style lang="scss" scoped>
$multi: 4;

@media screen and (max-width: 900px) {
    $multi: 1;

    .box {
        width: 236.4px * $multi !important;
        height: 184.5px * $multi !important;

    }

    h3 {
        font-size: 1em !important;
    }
}

.box {
    width: 236.4px * $multi;
    height: 184.5px * $multi;
    margin: 0 auto;
    background-image: url("/note/images/hutao/hutao1.png");
    background-size: cover;

}
</style>