<script setup lang="ts">
import { Ref, ref } from 'vue'
const buttons: any = ref([]);
const link: Ref<HTMLAudioElement | null> = ref(null)
const hover: Ref<HTMLAudioElement | null> = ref(null)

const linkMusicOn = ref(false)
const musicLinkFunc = function(){
    if (link.value) link.value.play()
}

const music = () => {
    if (!linkMusicOn.value) {
        [].forEach.call(document.querySelectorAll("a"), (a: HTMLElement) => {
            a.addEventListener('click',musicLinkFunc)
        });
        linkMusicOn.value = true;
    } else {
        [].forEach.call(document.querySelectorAll("a"), (a: HTMLElement) => {
            a.removeEventListener('click', musicLinkFunc)
        });
        linkMusicOn.value = false;
    }
}
buttons.value = [
    {
        text: linkMusicOn?'turn off link music':'turn on link music',
        title:'此功能用于给当前页面的所有链接添加点击声音',
        click: music
    }
]




</script>

<template>
    <div class="container">
        <el-button v-for="item in buttons" @click="item.click" :title="item.title">
            {{ item.text }}
        </el-button>
        <audio id="link" src="/note/music/link.mp3" preload="auto" ref="link"></audio>
        <audio id="hover-audio" src="/note/music/hover.mp3" preload="auto" ref="hover"></audio>
    </div>


</template>



<style lang="scss" scoped>

</style>