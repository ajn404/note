<template>
    <div class="playground" ref="playground">
        <codemirror v-model="props.code" placeholder="rust" :style="{ padding: '10px 0', margin: '20px 0 0' }"
            :autofocus="true" :indent-with-tab="true" :tab-size="2" :extensions="extensions" disabled />
            <el-button class="button" v-if="props.async" @click="getRes">
                <objectification  :text="buttonText"></objectification>
            </el-button>
        <div class="res" v-if="stderr||stdout">
            <h4>Standard Error</h4>
            <div v-html="stderr"></div>
            <h4>Standard Output</h4>
            <div v-html="stdout" style="color:green"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { rust } from "@codemirror/lang-rust"
import { oneDark } from '@codemirror/theme-one-dark'
import { Codemirror } from 'vue-codemirror'
import { ElLoading } from "element-plus";
const playground:any = ref(null)
const buttonText = ref('运行')

const extensions = [rust(), oneDark];
const loading = () => {
    return ElLoading.service({
        lock: true,
        text: "运行中",
        fullscreen: true,
        background: "rgba(0, 0, 0, 0.1)",
    });
};

let loadInstance;   

const props = defineProps({
    code: String,
    async:Boolean
})
const stderr = ref("");
const stdout = ref("");

document.onkeydown = e=>{
    if(e?.keyCode===27){
        buttonText.value = '全屏'
    }
    
}

const getRes = ()=>{
    if(!stderr.value){
        loadInstance = loading();
    fetch("https://play.rust-lang.org/execute", {
    method: "post",
    body: JSON.stringify({
        channel: "stable",
        mode: "debug",
        edition: "2021",
        crateType: "bin",
        tests: false,
        code: props.code || "",
        backtrace: false
    }),
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json()).then(response => {
    loadInstance.close()
    buttonText.value = '全屏'
    stderr.value = response?.stderr.replaceAll('\n', '<br/>');
    stdout.value = response?.stdout.replaceAll('\n', '<br/>');
})
    }else{

        
       if(document.fullscreenEnabled&&!document.fullscreenElement){
        playground?.value?.requestFullscreen()
        buttonText.value = '退出全屏'
       }
       else{
        
        document.exitFullscreen().then(_=>{
            buttonText.value = '全屏'
        })
       }
        
    }
}
if(!props.async) getRes()

</script>

<style lang="scss" scoped>
.res {
    div {
        // text-indent:2em;
        margin-left: 2em;
        background-image: linear-gradient(to left,var(--c-bg-lighter),var(--c-bg));
        padding: 1em;
    }

    h4 {
        text-align: center;
    }
}

.button{
    margin: 1em;
    font-size: .6em;
}

.playground{
    background-color: var(--c-bg);
}
</style>