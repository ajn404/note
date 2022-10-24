<template>
    <div class="cards">
        <div class="container" v-if="showContainer">
            <div class="card" @click="goUrl('markdown/notes/js')">
                <card data-image="/note/images/hutao1.png">
                    <template v-slot:header>
                        <h1>javascript</h1>
                    </template>
                    <template v-slot:content>
                        <p>2022简单翻译ECMA</p>
                    </template>
                </card>
            </div>

            <div class="card" @click="goUrl('markdown/notes/glsl')">
                <card data-image="/note/images/hutao1.png">
                    <template v-slot:header>
                        <h1>glsl</h1>
                    </template>
                    <template v-slot:content>
                        <p>glsl的基本语法</p>
                    </template>
                </card>
            </div>

            <div class="card" @click="goUrl('markdown/notes/shell')">
                <card data-image="/note/images/hutao3.png">
                    <template v-slot:header>
                        <h1>shell</h1>
                    </template>
                    <template v-slot:content>
                        <p>基础脚本操作总结</p>
                    </template>
                </card>
            </div>


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
        return {
            showContainer:true
        };
    },
    mounted() {
    },

    setup() {
        const router = useRouter();
        return {
            router: router
        }
    },
    methods: {
        goUrl(url) {
            this.showContainer = false;
            this.router.push(url)
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
    padding: 20px 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .card{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}

p {
    line-height: 1.5em;
}

h1+p,
p+p {
    margin-top: 10px;
}
</style>

