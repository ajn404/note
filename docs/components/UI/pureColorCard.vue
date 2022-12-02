

<script lang="ts" setup name="pureColorCard">
import { h, ref, nextTick } from 'vue';
// import { isClient } from "@vueuse/core";

const randomColor = `rgba(${Math.random() * 1000 % 255},${Math.random() * 1000 % 255},${Math.random() * 1000 % 255},.5)`
const props = defineProps({
    xyz: String,
    width: String,
    height: String,
})

const className = { card: true };
const show = ref(true)

const cardProps = ref({
    class: {
        ...className
    },
    style: {
        backgroundColor: randomColor,
        width: `${props.width ?? '100px'}`,
        height: `${props.height ?? '100px'}`,
        margin: `20px auto`
    },
    xyz: props.xyz,
    onClick: () => {

    }
})

const pureCard = () => {
    return h('div', cardProps.value)
}

// const isElementNotInViewport = (el) => {
//     if (el) {
//         let rect = el.getBoundingClientRect();
//         return (
//             (rect.top) >=(window.innerHeight || document.documentElement.clientHeight) || rect.bottom <= 0
//         );
//     }return false
// }

const card = ref(null);
// nextTick(() => {
//     if(isClient){
//         show.value = !isElementNotInViewport(card.value);
//         window.addEventListener('scroll',()=>{
//             if(show.value) return            
//             show.value = !isElementNotInViewport(card.value);
//         })
// }
// })

const onPresetMouseEnter = ()=>{}
const onPresetMouseLeave = ()=>{}

</script>

<template>
        <pureCard ref="card" v-show="show"
        @mouseenter="onPresetMouseEnter" @mouseleave="onPresetMouseLeave"
        ></pureCard>
        
</template>
