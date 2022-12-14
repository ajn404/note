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
    console.log(count.value);


}

watch(count, (val) => {
    console.log(val);

    if (Number(val) % 18 === 0) {
        getJokeSData()
    }
})




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
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;

            &.header {
                position: sticky;
                top: 0;
                background: var(--el-color-success);
                color: bisque;
                margin: 0 10px 10px 10px;
            }

            &+& {
                margin-top: 10px;

            }
        }
    }

}
</style>