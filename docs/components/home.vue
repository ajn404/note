<template>

    <!-- <div class="box">
        <h3>太阳出来我晒太阳<br/>月亮出来我晒月亮喽！<br/>
            白天你尽管到处跑 <br/>晚上可得小心点<br/> 我不在的时候,<br/>务必谨慎行动<br/>
        </h3>
    </div> -->

    <objectification></objectification>
    <h2>cards</h2>
    <cards></cards>
    <h2>rust code demo</h2>
    <RustPlayground code='fn main(){
    first_name();
    last_name();
}
fn first_name(){
    println!("ajn404");
}

fn last_name(){
    println!("n-graymoon");
}'></RustPlayground>
    <h2>music player</h2>
    <music-player></music-player>

</template>


<script lang="ts" setup>
// //setup 执行时dom还不存在
// import {
//     ref,
//     computed,
//     watch,

//     onBeforeMount,
//     onMounted,
//     onBeforeUpdate,
//     onUpdated,
//     onBeforeUnmount,
//     onUnmounted,
// Prop
// } from 'vue';



// const data = ref([{
//     value: '1', hidden: false
// }]);
// const computeData = computed(() => {
//     return data.value.filter(item => item.hidden === false)
// })

// watch(data, (newVal) => {
//     console.log('data changed new data is ', data)
// })

// const method = () => {
//     console.log('i am fool');
// }

// //ts语法定义props
// const props = defineProps<{
//     title?: String,
//     msg?: String,

// }>()


// interface Props {
//     title:String,
//     msg?:String
// }

// // 同上述声明
// // const props = defineProps<Props>()





// //整个生命周期
// //setup=>beforeCreate=>created=>beforeMount=>mouted=>beforeUpdate=>updated=>beforeUnmount=>unmounted


// onMounted(() => {
//     console.log('onMounted')
// })

// onBeforeMount(() => {
//     console.log('onBeforeMount')
// })

// onBeforeUpdate(() => {
//     console.log('onBeforeUpdate')
// })

// onUpdated(() => {
//     console.log('onUpdated')
// })

// onBeforeUnmount(() => {
//     console.log('onBeforeUnmount')
// })

// onUnmounted(() => {
//     console.log('onUnmounted')
// })





// console.log('setup')

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
    background-image: url("/note/images/hutao1.png");
    background-size: cover;

}
</style>