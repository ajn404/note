

<script lang="ts" setup name="pureColorCard">
import { h, ref, nextTick, watchEffect } from 'vue';
import { isClient } from "@vueuse/core";
import {isElementNotInViewport,throttle} from '@scripts/utils'

const randomColor = `rgba(${Math.random() * 1000 % 255},${Math.random() * 1000 % 255},${Math.random() * 1000 % 255},.5)`
const props = defineProps({
    xyz: String,
    width: String,
    height: String,
})

const className = { card: true };
const show = ref(true)
const classXYZ = ref('xyz-in')

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
        classXYZ.value = 'xyz-out'
        setTimeout(() => {
            classXYZ.value = 'xyz-in'
        })
    }
})

const pureCard = () => {
    return h('div', cardProps.value)
}

watchEffect(() => {
    classXYZ.value = show.value ? 'xyz-in' : 'xyz-out'
})

const card = ref(null);
nextTick(() => {
    if (isClient) {
        window.addEventListener('scroll', throttle(() => {
            
            show.value = !isElementNotInViewport(card.value);

            if (show.value) return
            
            show.value = !isElementNotInViewport(card.value);
        },100))
    }
})

const onPresetMouseEnter = () => { }
const onPresetMouseLeave = () => { }

</script>

<template>
    <pureCard ref="card" :class="classXYZ" @mouseenter="onPresetMouseEnter" @mouseleave="onPresetMouseLeave"></pureCard>

</template>
