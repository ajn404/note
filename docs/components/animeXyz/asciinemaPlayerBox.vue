

<script lang="ts" setup>
// import * as AsciinemaPlayer from 'asciinema-player';
// import 'asciinema-player/dist/bundle/asciinema-player.css'
import { nextTick, ref } from 'vue'
const player = ref(null)
const themeList = ["asciinema","monokai","tango","solarized-dark","solarized-light"];//所有的主题
const theme = themeList[Math.floor(Math.random()*10%themeList.length)]
const AsciinemaPlayer = window['AsciinemaPlayer'];

const props =defineProps({
    file:String,
    loop:Boolean,
    speed:Number
})


nextTick(() => {
    AsciinemaPlayer.create(`/note/data/cast/${props.file||'ncu'}.cast`, player.value,
        {
            loop: props.loop??false,
            theme: theme,
            speed:props.speed??1,
        });
});
</script>

<template>
    <div class="player-box">
        <div ref="player" class="player"></div>
    </div>
</template>

<style lang="scss" scoped>
.player{
    :deep(.asciinema-terminal){
    max-width: calc(100% - 3rem - 1.5em);
    span{
        max-width: 100%;
    }
}
}
</style>