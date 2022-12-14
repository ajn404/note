<template>
    <iframe :src="src" frameborder="0" v-if="showIfram"></iframe>
    <a :href="src" target="_blank">{{src.split('/').pop()}}</a>
</template>

<script>
import { storeToRefs } from 'pinia'
import { useGlobal } from '@scripts/store.common.ts'
import { ref } from 'vue'

export default {
    name: 'iframeControl',
    props: {
        src: String
    },

    setup(props) {
        const store = useGlobal();
        const { getShowIframe } = storeToRefs(store);
        const showIfram = ref(getShowIframe)
        return {
            getShowIframe,
            showIfram
        }
    },
};
</script>
