<script setup lang="ts">
import { Ref, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useGlobal } from '@scripts/store.common.ts'

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
        [].forEach.call(document.querySelectorAll("button.navbar-dropdown-title"), (btn: HTMLElement) => {
            btn.addEventListener('mouseover', musicHoverFunc)
        });
    } else {
        [].forEach.call(document.querySelectorAll("button.navbar-dropdown-title"), (btn: HTMLElement) => {
            btn.removeEventListener('mouseover', musicHoverFunc)
        });
    }
    hoverMusicOn.value = !hoverMusicOn.value;
}

const store = useGlobal();
const { getShowIframe } = storeToRefs(store);

const showifram = ()=>{
    console.log(store,!getShowIframe.value);
    
    // store.changeIfram(!getShowIframe.value);
    //这里acticon为啥不起作用呢
    store.showIframe = !store.getShowIframe
}

</script>
<template>
    <div class="container">
        <el-button class="xyz-in" type="primary" xyz="fade up big" @click="music" title="此功能用于给页面链接添加点击声音">
            {{ linkMusicOn ? 'turn off link music' : 'turn on link music' }}
        </el-button>

        <el-button class="xyz-in" xyz="fade up big" type="primary" @click="hoverMusic" title="此功能用于给里列表添加声音">
            {{ hoverMusicOn ? 'turn off hover music' : 'turn on hover music' }}
        </el-button>

        <el-button class="xyz-in" xyz="fade up big" type="primary" @click="showifram" title="使用/不使用iframe">
            {{ getShowIframe ? '关闭iframe' : '打开' }}
        </el-button>





        <!-- do not show -->
        <audio id="link" src="/note/music/link.mp3" preload="auto" ref="link"></audio>
        <audio id="hover-audio" src="/note/music/hover.mp3" preload="auto" ref="hover"></audio>
    </div>


</template>



<style lang="scss" scoped>
.container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .xyz-in{
        padding: 1em;
        font-size: 2em;
        border-radius: 1em;

    }
}
</style>