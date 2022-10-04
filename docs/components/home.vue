<template>
    <h1 class="animate">
        转眼如隔世，已是很多年   
    </h1>
</template>
<script lang="ts" setup>
//setup 执行时dom还不存在
import {
    ref,
    computed,
    watch,

    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
Prop
} from 'vue';



const data = ref([{
    value: '1', hidden: false
}]);
const computeData = computed(() => {
    return data.value.filter(item => item.hidden === false)
})

watch(data, (newVal) => {
    console.log('data changed new data is ', data)
})

const method = () => {
    console.log('i am fool');
}

//ts语法定义props
const props = defineProps<{
    title?: String,
    msg?: String,

}>()


interface Props {
    title:String,
    msg?:String
}

// 同上述声明
// const props = defineProps<Props>()





//整个生命周期
//setup=>beforeCreate=>created=>beforeMount=>mouted=>beforeUpdate=>updated=>beforeUnmount=>unmounted


onMounted(() => {
    console.log('onMounted')
})

onBeforeMount(() => {
    console.log('onBeforeMount')
})

onBeforeUpdate(() => {
    console.log('onBeforeUpdate')
})

onUpdated(() => {
    console.log('onUpdated')
})

onBeforeUnmount(() => {
    console.log('onBeforeUnmount')
})

onUnmounted(() => {
    console.log('onUnmounted')
})





console.log('setup')

</script>