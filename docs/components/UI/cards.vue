<template>
    <div class="cards">

        <div class="container">
            <card data-image="/note/images/hutao1.png" @click="goUrl('note/markdown/notes/js')">
                <template v-slot:header>
                    <h1>note</h1>
                </template>
                <template v-slot:content>
                    <p>包含ecma,typescript,glsl,shell的学习笔记</p>
                </template>
            </card>
            <card data-image="/note/images/hutao2.jpg"></card>
            <card data-image="/note/images/hutao3.png"></card>
            <card data-image="/note/images/hutao4.jpg"></card>
            <card data-image="/note/images/hutao5.png"></card>
            <card data-image="/note/images/hutao6.jpg"></card>
            <card data-image="/note/images/hutao7.png"></card>
            <card data-image="/note/images/hutao8.jpg"></card>
        </div>

    </div>
</template>

<script>
import Card from './card.vue';
import { useRouter } from 'vue-router'

export default {
    name: "NoteCards",
    data() {
        return {};
    },
    mounted() {
    },
    methods: {
        goUrl(url) {
            const router = useRouter();
            console.log(router)

        }
    },
    components: { Card }
};
</script>

<style lang="scss" scoped>
.cards {
    font-size: 14px;
    font-weight: 500;
}

.container {
    padding: 0 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

p {
    line-height: 1.5em;
}

h1+p,
p+p {
    margin-top: 10px;
}
</style>

