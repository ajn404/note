
<template>
    <div class="capture" ref="capture">
        <h4 style="color: #000; ">Hello world!</h4>
    </div>
    <el-button @click="translate">转换为图像</el-button>


</template>

<script setup>

import html2canvas from 'html2canvas';
import { ref } from 'vue'

const capture = ref(null)



const translate = () => {
    html2canvas(capture.value).then(function (canvas) {
        const img = new Image();
        img.src = canvas.toDataURL();
        console.log(canvas.toDataURL());
        // document.body.appendChild(img);
        // window?.location.href = img.src



    });
}

</script>


<style lang="scss" scoped>
.capture {
    padding: 10px;
    background-color: #f5da55;

}
</style>