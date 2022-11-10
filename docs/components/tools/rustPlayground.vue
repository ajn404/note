<template>
    <div class="playground">
        <codemirror v-model="props.code" placeholder="rust" :style="{ padding: '10px 0', margin: '20px 0 0' }"
            :autofocus="true" :indent-with-tab="true" :tab-size="2" :extensions="extensions" disabled />
        <div class="res">
            <h4>Standard Error</h4>
            <div v-html="stderr"></div>
            <h4>Standard Output</h4>
            <div>{{ stdout }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { rust } from "@codemirror/lang-rust"
import { oneDark } from '@codemirror/theme-one-dark'
import { Codemirror } from 'vue-codemirror'
const extensions = [rust(), oneDark];
const props = defineProps({
    code: String
})
const stderr = ref("");
const stdout = ref("");


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
    stderr.value = response?.stderr.replaceAll('\n', '<br/>');
    stdout.value = response?.stdout.replaceAll('\n', '<br/>');
})



</script>

<style lang="scss" scoped>
.res {
    div {
        // text-indent:2em;
        margin-left: 2em;
        color: var(--c-warning-text);
    }

    h4 {
        text-align: center;
    }
}
</style>