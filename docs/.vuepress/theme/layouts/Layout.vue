
<template>
    <XyzTransition appear xyz="fade duration-1 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0">
        <ParentLayout class="parent-layout" @click="closeAll">
            <template #navbar-before>
                <div class="search_content">
                    <input type="text" class="search_input" v-model="searchText" placeholder="search title"
                        @input="search" @change="search">
                    <div class="iconfont icon-close" v-if="searchText.length > 0" @click="clearSearch"></div>
                    <div class="recommend_list" v-if="recommendList.length > 0">
                        <p v-for="item in recommendList" @click.stop="toggle(item)">{{ item.innerText }}</p>
                    </div>
                </div>
            </template>
            <template #navbar-after>
                <div class="navbar-after">
                    <div :class="menuClass">
                        <div class="iconfont icon-nav_drawer" @click="slideDown" ref="parentLayout"></div>
                        <div class="iconfont icon-game" @click.stop="showMirror"></div>
                        <div class="iconfont icon-hints" @click.stop="showIcon"></div>
                        <div :class="`iconfont ${audiuClass}`" @click.stop="speak"></div>
                        <div class="iconfont icon-arrow_down reverse" @click.stop="toggleTop"></div>
                        <div class="iconfont icon-arrow_down" @click.stop="toggleBottom"></div>
                        <div class="iconfont icon-face_happy" @click.stop="changeStyle"></div>
                        <div class="iconfont icon-musicfill" @click.stop="playMusic"></div>
                        <div class="iconfont icon-java-script" @click.stop="jsTool"></div>
                    </div>
                </div>
            </template>
            <template #page-bottom></template>
            <template #page-top></template>
        </ParentLayout>
    </XyzTransition>
    <codemirror class="xyz-in dialog-content" xyz="fade small stagger ease-out-back" v-show="showCodeMirror" />
    <iconCollection class="xyz-in dialog-content" xyz="fade flip-down stagger duration-10 delay-1 ease-out-back"
        v-show="showIconCollection" />
    <div class="xyz-in dialog-content" id="hutao" v-show="backImg"></div>
    <music-player class="xyz-in dialog-content" xyz="fade big delay-1" v-if="music"></music-player>
    <tool-play-use-js xyz="fade up big" class="xyz-in dialog-content" v-show="jstool"></tool-play-use-js>

</template>
<script setup lang="ts">
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
// import Page from '@vuepress/theme-default/lib/client/components/Page.vue'

import { ref } from 'vue';
// import { usePageData } from '@vuepress/client'

const showCodeMirror = ref(false);
const showIconCollection = ref(false);
const menuClass = ref(["tool-menu"]);
const audiuClass = ref("icon-audio")
const parentLayout = ref(null);
const music = ref(false)
const jstool = ref(false)

// const page = usePageData()

const showMenu = () => {
    menuClass.value.push("active")
}


// const darkMode = Symbol('darkMode')
// const d = inject(darkMode);


const hideMenu = () => {
    menuClass.value = menuClass.value.filter((item, index) => {
        return item !== "active"
    })
}

const slideDown = () => {
    if (!menuClass.value.includes("active")) {
        showMenu()
    }
    else {
        hideMenu()
    }
}

const closeAll = () => {
    showCodeMirror.value = false;
    showIconCollection.value = false;
    backImg.value = ''
    music.value = false
    jstool.value = false;
    clearSearch()
}
const showMirror = () => {
    closeAll()
    showCodeMirror.value = !showCodeMirror.value;
    showIconCollection.value = false;
    backImg.value = '';
}
const showIcon = () => {
    closeAll()
    showIconCollection.value = !showIconCollection.value;
    showCodeMirror.value = false;
    backImg.value = ''
}

const speak = () => {
    let text = '', dom: HTMLElement = document.querySelector('.theme-default-content');
    const synth = window.speechSynthesis;
    if (!dom) return;
    if (!synth.speaking) {
        text = dom.innerText;
        const utterance1 = new SpeechSynthesisUtterance(text);
        synth.speak(utterance1);
        audiuClass.value = "icon-audio"
    } else {
        synth.cancel();
        audiuClass.value = "icon-audio_mute"
    }


}

const toggleBottom = () => {
    if (!window) return;
    window.scrollTo({ top: Math.pow(10, 10), behavior: 'smooth' });
    //scrollby????????????scrollto?????????
}

const toggleTop = () => {
    if (!window) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    //scrollby????????????scrollto?????????
}
const backImg = ref("")
const changeStyle = () => {
    closeAll()
    const styleImages = [
        "/note/images/hutao/hutao1.webp",
        "/note/images/hutao/hutao2.webp",
        "/note/images/hutao/hutao3.webp",
        "/note/images/hutao/hutao4.webp",
        "/note/images/hutao/hutao5.webp",
        "/note/images/hutao/hutao6.webp",
        "/note/images/hutao/hutao7.webp",
    ];
    if (document.body) {
        const app: HTMLElement = document.querySelector('#hutao');
        backImg.value = styleImages[Math.floor(Math.random() * 7)];
        app.style.background = `url(${backImg.value}) center/100% auto no-repeat fixed`;
    }

}

const recommendList = ref([]);
const searchText = ref("");


const search = (e: Event) => {
    if (!searchText.value) {
        recommendList.value = []
        return
    };
    const target: NodeList = document.querySelectorAll(`
    .theme-default-content>div>h1,
    .theme-default-content>div>h2,
    .theme-default-content>div>h3,
    .theme-default-content>div>h4,
    .theme-default-content>div>h6,
    .theme-default-content>div>h7`)
    recommendList.value = [].filter.call(target, (item: HTMLElement): any => {
        return item.innerText.indexOf(searchText.value) !== -1
    })
}

const clearSearch = () => {
    searchText.value = "";
    recommendList.value = [];
}

const toggle = (item: HTMLElement) => {
    const top = item.getBoundingClientRect().top;
    if (window && top) {
        window.scrollBy({ top: top, behavior: 'smooth' });
    }
}

const playMusic = () => {
    //todo    
    closeAll()
    music.value = true;
}

const jsTool = () => {
    closeAll()
    jstool.value = true;
}

</script>
<style lang="scss" scoped>
//pure happiness
// .parent-layout{
//     :deep(.page){
//         transition: all 1s;
//         transform: scale(1);
//     }

//     :deep(.fade-slide-y-enter-active){
//         transform: scale(0.5) translate(-50%,-100%) !important;
//     }
// }
.dialog-content {
    min-width: 90vw;
    width: 90vw;
    position: fixed;
    left: 0;
    top: 3.6rem;
    background-color: rgba(124, 225, 231, .9);
    padding: 20px;
    z-index: 19;
    overflow-y: scroll;
    max-height: 80vh;
    height: 80vh;
    margin: 20px 0 0 20px;

    &:hover {
        outline: 1px dotted salmon;
    }

    border-radius: 1rem;
}

.navbar-after {
    position: relative;
}

@media screen and (max-width: 900px) {

    .tool-menu,
    .search_content {
        display: none !important;
        ;
    }
}

.tool-menu {
    max-width: 30vw;
    width: 20px;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    right: 1rem;
    top: 3.6rem;
    z-index: -1;
    overflow: hidden;

    &.active {
        .iconfont {
            height: 1.5em;
            display: block;
        }
    }

    .reverse {
        transform: rotate(180deg);
        display: none;
    }

    .iconfont {
        height: 0;
        transition: height .4s;
        line-height: 1.5;
        font-size: 1.5em;
        color: var(--c-text);
        cursor: pointer;

        &:hover {
            color: var(--c-brand);
        }
    }

    .icon-nav_drawer {
        height: 1.5em;

    }


}

.search_content {
    float: right;
    margin: 2px 20px 0 0;

    input {
        height: 1.8rem;
        padding: 0;
        font-family: var(--font-family);
        border: none;
        outline: none;
        transition: all .5s;
        background-image: linear-gradient(to right, var(--c-bg-lighter), var(--c-bg));
        font-size: 1.5em;
        border-radius: 5px;
        padding: 1px 5px 0;
        color: var(--c-text);
    }

    .icon-close {
        margin-left: -20px;
        color: bisque;
        z-index: 99;
    }

    .recommend_list {
        position: absolute;
        background-color: rgb(69, 76, 80);
        padding: 1.5em 0.8em;
        border-radius: 8px;
        transition: all 1s;
        max-height: 200px;
        overflow-y: scroll;

        p {
            line-height: 1;
            margin: 0;
            padding: 10px 0;
            color: var(--c-brand);
            cursor: pointer;

            &:hover {
                color: var(--c-danger);
            }

        }
    }
}
</style>