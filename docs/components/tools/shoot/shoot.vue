
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

        <el-button @click="method">转换为图像</el-button>
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
    }).catch(e=>{
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
    d3:download
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
</script>
<style lang="scss" scoped>
.capture {
    padding: 10px;
    background-color: #f5da55;
    position: relative;

}

.image{
    background-image: url('/images/logo.jpg');
    width:100%;
    height: 50vh;
    background-size: contain;
}

.tags{
    &>div{
        position: relative;
    }
}
</style>