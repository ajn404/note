
<template>
    <div class="container">
        <div class="capture" ref="capture" v-if="!props.type">
            <h4 style="color: #000; ">Hello world!</h4>
        </div>

        <div class="capture" ref="capture" v-if="props.type === 'tag'">
            <div ref="imageRef" class="image linear" @click="addRadioTag"></div>
            <div ref="tagsRef" class="tags" v-html="tagsHtml">
            </div>
        </div>

        <el-radio-group v-model="radio1" class="radio" v-if="props.type === 'tag'">
            <h6>损伤标签：</h6>
            <el-radio size="large" v-for="item in selectSunShang" :label="item">{{ item ? item : '取消选择' }}</el-radio>
        </el-radio-group>

        <el-radio-group v-model="radio2" class="radio" v-if="props.type === 'tag'">
            <h6>部位标签:</h6>
            <el-radio size="large" v-for="item in selectBuWei" :label="item">{{ item ? item : '取消选择' }}</el-radio>
        </el-radio-group>
        <el-button class="el-button" @click="method">转换为图像</el-button>
    </div>

</template>

<script setup name="endShoot" >

import html2canvas from 'html2canvas';
import { ref } from 'vue'
import { downloadBase64File } from './index'
const capture = ref(null)
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
    tag: download
}


if (props.type) {
    method = methods[props.type]
}


const tagStyle = `
color: white;
    position: absolute;
    padding: 0.1em;
    background: red;
    text-align:center;
    border-radius:3px;
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


const selectSunShang = ref(['凹陷', '掉漆', '划痕', '破损', '锈蚀', '']);
const selectBuWei = ref(['前机盖', '左前门', '右前门', '前保杠', '']);
const radio1 = ref(selectSunShang.value[0])
const radio2 = ref(selectBuWei.value[0])
const tags = ref([]);
const tagsRef = ref('');
const imageRef = ref('');
const tagsHtml = ref('');
const addRadioTag = (event) => {
    const imageRect = imageRef.value.getBoundingClientRect();
    const x = event.clientX - imageRect.left;
    const y = event.clientY - imageRect.top;
    let maxRadio = radio1.value.length > radio2.value.length ? radio1.value.length : radio2.value.length;
    const divLength = maxRadio + 0.2;
    //padding+text
    const xx = `calc(${x}px - ${divLength / 2}em)`

    let moveY = 3.2;
    if (!radio1.value) {
        moveY -= 1;
    }

    if (!radio2.value) {
        moveY -= 1;
    }
    const yy = `calc(${y}px - ${moveY}em)`

    tags.value.push({ x, y });
    tagsHtml.value = `${tagsHtml.value}<div style='${tagStyle}left:${xx};top:${yy}'>
        ${radio1.value ? `${radio1.value}<br/>` : ''}
        ${radio2.value}
        <span style='${spanStyle}'></span></div>`
}
</script>
<style lang="scss" scoped>
.capture {
    padding: 0 10px 10px 0;
    background-color: #f5da55;
    position: relative;
    box-sizing: border-box;
    // margin: 0 auto;
}

.image {
    background-image: url('/note/images/logo.jpg');
    width: 100%;
    height: 50vh;
    background-size: contain;

    &.linear {
        background-image: linear-gradient();
        background-image: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),
            url("/note/images/logo.jpg");
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