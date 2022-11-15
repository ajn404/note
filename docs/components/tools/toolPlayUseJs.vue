<script setup lang="ts">
import { Ref, ref } from 'vue'
const link: Ref<HTMLAudioElement | null> = ref(null)
const hover: Ref<HTMLAudioElement | null> = ref(null)

const linkMusicOn = ref(false);
const hoverMusicOn = ref(false);

const musicLinkFunc = function () {
    if (link.value) link.value.play()
}

const musicHoverFunc = function(){
     hover.value?.play()
}

const music = () => {
    if (!linkMusicOn.value) {
        [].forEach.call(document.querySelectorAll(".navbar-dropdown-item a"), (a: HTMLElement) => {
            a.addEventListener('click', musicLinkFunc)
        });

    } else {
        [].forEach.call(document.querySelectorAll(".navbar-dropdown-item a"), (a: HTMLElement) => {
            a.removeEventListener('click', musicLinkFunc)
        });
    }
    linkMusicOn.value = !linkMusicOn.value;
}

const hoverMusic =()=>{
    if (!linkMusicOn.value) {
        [].forEach.call(document.querySelectorAll("li"), (a: HTMLElement) => {
            a.addEventListener('click', musicLinkFunc)
        });
    } else {
        [].forEach.call(document.querySelectorAll("li"), (a: HTMLElement) => {
            a.removeEventListener('click', musicLinkFunc)
        });
    }
    hoverMusicOn.value = !hoverMusicOn.value;
}

</script>
<template>
    <div class="container">
        <el-button class="xyz-in" xyz="fade up big" @click="music" title="此功能用于给当前页面的所有链接添加点击声音">
            {{ linkMusicOn ? 'turn off link music' : 'turn on link music' }}
        </el-button>


        <!-- do not show -->
        <audio id="link" src="/note/music/link.mp3" preload="auto" ref="link"></audio>
        <audio id="hover-audio" src="/note/music/hover.mp3" preload="auto" ref="hover"></audio>
    </div>


</template>



<style lang="scss" scoped>

</style>