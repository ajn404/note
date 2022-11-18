<script lang="ts" setup>
import { ref } from "vue";
import { rust } from "@codemirror/lang-rust"
import { oneDark } from '@codemirror/theme-one-dark'
import { Codemirror } from 'vue-codemirror'
import { ElLoading } from "element-plus";
const playground: any = ref(null)
const editor: any = ref(null)
const buttonText = ref('运行')
const extensions = [rust(), oneDark];
const loading = () => {
    return ElLoading.service({
        lock: false,
        text: "运行中",
        fullscreen: true,
        background: "rgba(100, 100, 0,.1)",
    });
};
let loadInstance;
const props = defineProps({
    code: String,
    async: Boolean,
    editable:String
})
const stderr = ref("");
const stdout = ref("");

document.onkeydown = e => {
    if (e?.keyCode === 27) {
        buttonText.value = '全屏'
    }

}

const getRes = () => {
    if (!stderr.value) {
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
            // let height = editor.value?.$el.clientHeight;
            // //待优化    
            // window.scrollBy({
            //     top: height,
            //     behavior: 'smooth'

            // })
            buttonText.value = '全屏'
            stderr.value = response?.stderr.replaceAll('\n', '<br/>');
            stdout.value = response?.stdout.replaceAll('\n', '<br/>');
        })
    } else {


        if (document.fullscreenEnabled && !document.fullscreenElement) {
            playground?.value?.requestFullscreen()
            buttonText.value = '退出全屏/全屏'
        }
        else {

            document.exitFullscreen().then(_ => {
                buttonText.value = '全屏'
            })
        }

    }
}
if (!props.async) getRes()

</script>

<template>
    <div class="playground" ref="playground">
        <codemirror ref="editor" v-model="props.code" placeholder="rust" class="editor" :autofocus="true"
            :indent-with-tab="true" :tab-size="2" :extensions="extensions" :disabled="(props.editable==='true'?false:true)" />
        <el-button class="button" v-if="props.async" @click="getRes">
            <objectification :text="buttonText"></objectification>
        </el-button>
        <div class="res" v-show="stderr || stdout">
            <h4 v-show="stderr">Standard Error(编译结果)</h4>
            <div v-show="stderr" class="xyz-in" xyz="fade up big" v-html="stderr"></div>
            <h4 v-show="stdout">Standard Output(控制台输出)</h4>
            <div v-html="stdout" v-show="stdout" class="xyz-in" xyz="fade up big" style="color:green"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.res {
    div {
        // text-indent:2em;
        margin-left: 2em;
        background-image: linear-gradient(to left, var(--c-bg-lighter), var(--c-bg));
        padding: 1em;
    }

    h4 {
        text-align: center;
    }
}

.editor {
    display: block !important;
}

.button {
    margin: 1em;
    font-size: .6em;
}

.playground {
    background-color: var(--c-bg);

    &:fullscreen{
        overflow-y: scroll;
    }
}
</style>