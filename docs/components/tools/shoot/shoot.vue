
<template>
    <div class="container">
        <div class="capture" ref="capture" v-if="!props.type">
            <h4 style="color: #000; ">Hello world!</h4>
        </div>

        <div class="capture" ref="capture" v-if="props.type === 'hutao'">
            <img :src="imageUrl" alt="">
        </div>

        <div class="capture" ref="capture" v-if="props.type === 'd3'">
            <div ref="imageRef" class="image" @click="addTag"></div>
            <div ref="tagsRef" class="tags" v-html="tagsHtml">
            </div>
        </div>

        <div class="capture" ref="capture" v-if="props.type === 'tag'">
            <div ref="imageRef" class="image linear" @click="addRadioTag"></div>
            <div ref="tagsRef" class="tags" v-html="tagsHtml">
            </div>
        </div>

        <el-radio-group v-model="radio1" class="radio" v-if="props.type === 'tag'">
            <el-radio size="large" v-for="item in selectSunShang" :label="item">{{ item }}</el-radio>
        </el-radio-group>

        <el-radio-group v-model="radio2" class="radio" v-if="props.type === 'tag'">
            <el-radio size="large" v-for="item in selectBuWei" :label="item">{{ item }}</el-radio>
        </el-radio-group>

        <el-button class="el-button" @click="method">转换为图像</el-button>
    </div>

</template>

<script setup name="shoot">

import html2canvas from 'html2canvas';
import { ref } from 'vue'
import { isClient } from "@vueuse/core";
const capture = ref(null)


const downloadBase64File = (base64Data, filename) => {
    const link = document.createElement('a');
    link.download = filename;
    link.href = base64Data;
    document.body.appendChild(link);
    link.click();
    link.remove();
}
const filename = 'html标签.png';
const translate = () => {
    html2canvas(capture.value).then(function (canvas) {
        console.log(canvas.toDataURL());
    });
}
const download = () => {
    html2canvas(capture.value).then(function (canvas) {
        downloadBase64File(canvas.toDataURL(), filename);
    }).catch(e => {
        console.log(e);

    });
}
const props = defineProps({
    type: String
})
let method = translate;
const methods = {
    translate: translate,
    hutao: download,
    d3: download,
    tag: download
}
if (props.type) {
    method = methods[props.type]
}
const imageUrl = ref('/images/logo.jpg');
const tags = ref([]);
const tagsRef = ref('');
const imageRef = ref('');
const tagsHtml = ref('')
const addTag = (event) => {
    // Calculate the position of the click relative to the image
    const imageRect = imageRef.value.getBoundingClientRect();
    const x = event.clientX - imageRect.left;
    const y = event.clientY - imageRect.top;
    // Add a new tag to the data
    tags.value.push({ x, y });

    tagsHtml.value = `${tagsHtml.value}<div style='position:absolute;left:${x}px;top:${y}px'>tags内容可自定义</div>`
    // console.log(tagsHtml.value,x,y);
    // d3.select(tagsRef.value)
    //     .selectAll('div')
    //     .data(tags.value)
    //     .enter()
    //     .append('div')
    //     .style('position', 'absolute')
    //     .style('left', d => `${d.x}px`)
    //     .style('top', d => `${d.y}px`)
    //     .html('New Tag');
}

const selectSunShang = ref(['凹陷', '掉漆', '划痕', '破损', '锈蚀']);
const selectBuWei = ref(['前机盖', '左前门', '右前门', '前保杠']);

const radio1 = ref(selectSunShang.value[0])
const radio2 = ref(selectBuWei.value[0])

const tagStyle = `
color: white;
    position: absolute;
    padding: 0.1em;
    background: red;
`

const spanStyle = `
position: absolute;
    bottom: -1em;
    left: calc(50% - 0.5em);
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background: red;
`
const addRadioTag = (event) => {
    const imageRect = imageRef.value.getBoundingClientRect();
    const x = event.clientX - imageRect.left;
    const y = event.clientY - imageRect.top;
    tags.value.push({ x, y });
    tagsHtml.value = `${tagsHtml.value}<div style='${tagStyle}left:${x}px;top:${y}px'>${radio1.value}<br/>${radio2.value}<span style='${spanStyle}'></span></div>`
}


</script>
<style lang="scss" scoped>
.capture {
    padding: 10px;
    background-color: #f5da55;
    position: relative;

}

.image {
    background-image: url('/images/logo.jpg');
    width: 100%;
    height: 50vh;
    background-size: contain;

    &.linear{
        background-image: linear-gradient();
        background-image: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),
                  url("/images/logo.jpg");
    }
}

.tags {
    &>div {
        position: relative;
    }
}

.el-button {
    margin-top: 2em;
}

.radio {
    width: 100%;
    margin-top: 2em;
}
</style>