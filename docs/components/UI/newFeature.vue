<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
const p = defineProps({
    type: String
})


//skicky
const count = ref(0)
const countText: any = ref([])
const load = () => {
    count.value += 2
}

const getJokeSData = async () => {
    const jokes = await getJoke(20)
    const data = await jokes.text();
    const res = JSON.parse(data).data
    countText.value = [...countText.value, ...res]
}

const getJoke = (counts: number = 2) => {
    const secret = 'WnhrK251TWlUUThqaVFWbG5OeGQwdz09'
    const id = 'rgihdrm0kslojqvm'
    return fetch(`https://www.mxnzp.com/api/daily_word/recommend?app_secret=${secret}&app_id=${id}&count=${counts}`, {
        method: 'GET',
        redirect: 'follow'
    })
}


onMounted(async () => {
    if (p.type === 'skicky') {
        await getJokeSData()
    }
})

if (p.type === 'skicky') {
    watch(count, (val) => {
        if (Number(val) % 18 === 0) {
            getJokeSData()
        }
    })
}

</script>

<template>
    <div v-if="p.type === 'skicky'" :class="[p.type]">
        <ul v-infinite-scroll="load" class="infinite-list">
            <li class="infinite-list-item header">infinite!</li>
            <li v-for="i in count" :key="i" class="infinite-list-item">{{ (countText[i]?.content || '') +
                    '---' + countText[i]?.author || ''
            }}</li>
        </ul>
    </div>
    <div v-if="p.type === 'empty'" class="empty">
    </div>
    <div v-if="p.type === 'clip'" class="clip">
    ajn404 tests background-clip👀感受到了么，坤坤的注视
    </div>
    <div v-else class="else">
    </div>


</template>


<style lang="scss" scoped>
.skicky {
    .infinite-list {
        height: 50vh;
        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        overflow: scroll;

        .infinite-list-item {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1em;
            background: var(--el-color-primary-light-9);
            margin: 10px;
            color: var(--el-color-primary);
            height: 2em;
            text-overflow: ellipsis;
            border-radius: 5px;
            box-shadow: 1px 1px 1px 1px rgba(0, 0, 255, .1);;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;

            &.header {
                position: sticky;
                top: 0;
                background: rgba(0,1,1,.6);
                color: bisque;
                margin: 0 10px 10px 10px;
            }

            &+& {
                margin-top: 10px;

            }
        }
    }

}

.empty{
    display: flex;
    align-content: center;
    justify-content: center;
    &:empty::after{
        content: '暂无数据';
        font-size: 1.5em;
    }
}

.clip{
    font-size: 2em;
    letter-spacing: .01em;
    font-weight: bold;
    line-height: 1;
    background-image: url('/note/images/logo.jpg');
    color: transparent;
    background-size: contain;
    background-clip: text;
}
</style>