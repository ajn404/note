<template>
    <objectification text="note on ecma , glsl , typescript , rust , leetcode , p5 , vtk , kaboom , three , animeXYZ ,
    use vue3 , element-plus , codemirror ,pug ,vuepress , pinia...,i love coding,because coding does not lie">
    </objectification>
    <objectification text="rust code demo"></objectification>
    <RustPlayground async :code='code' editable="true"></RustPlayground>
    <objectification text="p5 canvas random"></objectification>
    <p5 type="random"></p5>
    <objectification text="kaboom canvas random"></objectification>
    <kaboom :random="true" :height="500"></kaboom>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const code = ref(`
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
`)
</script>

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