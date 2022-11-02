<template>
    <cards></cards>   

    <div class="box">
        <h3>太阳出来我晒太阳，月亮出来我晒月亮喽！</h3>
    </div>
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
$multi:4;
@media screen and (max-width: 900px) {
  $multi:1;
  .box{
    width: 236.4px * $multi!important;
    height:184.5px * $multi!important;

}

h3{
	font-size: 1em!important;
}
}

.box{
    width: 236.4px * $multi;
    height:184.5px * $multi;
    margin: 0 auto;
    background-image: url("/note/images/hutao1.png");
    background-size: cover;

}


h3 {
	display: flex;
	align-items: center;
	justify-content: center;
	align-content: center;
	height: 100%;
	width: 100%;
    padding: 0;
	margin: 0;
	font-size: 6em;
	font-family: 'Luckiest Guy', cursive;
    background-color: #111;
	color: white;
	letter-spacing: 0.625rem;
	mix-blend-mode: multiply;
	text-shadow: 3px 3px 3px rgba(0, 0, 0, 1), 2px 2px 40px rgba(255, 255, 255, 0.7);
}
</style>