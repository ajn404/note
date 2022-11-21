<template>
    <div class="cards">
        <div class="container" v-if="showContainer">
            <div class="card" @click="goUrl('markdown/notes/js')">
                <card data-image="/note/images/hutao/hutao1.png">
                    <template v-slot:header>
                        <h1>javascript</h1>
                    </template>
                    <template v-slot:content>
                        <p>2022简单翻译ECMA</p>
                    </template>
                </card>
            </div>

            <div class="card" @click="goUrl('markdown/notes/glsl')">
                <card data-image="/note/images/hutao/hutao2.jpg">
                    <template v-slot:header>
                        <h1>glsl</h1>
                    </template>
                    <template v-slot:content>
                        <p>glsl的基本语法</p>
                    </template>
                </card>
            </div>

            <div class="card" @click="goUrl('markdown/notes/shell')">
                <card data-image="/note/images/hutao/hutao3.png">
                    <template v-slot:header>
                        <h1>shell</h1>
                    </template>
                    <template v-slot:content>
                        <p>基础脚本操作总结</p>
                    </template>
                </card>
            </div>

            <div class="card" @click="goUrl('markdown/notes/ts')">
                <card data-image="/note/images/hutao/hutao4.jpg">
                    <template v-slot:header>
                        <h1>ts</h1>
                    </template>
                    <template v-slot:content>
                        <p>typescript基础与技巧</p>
                    </template>
                </card>
            </div>

            <div class="card" @click="goUrl('markdown/notes/leetcode')">
                <card data-image="/note/images/hutao/hutao5.png">
                    <template v-slot:header>
                        <h1>algorithm</h1>
                    </template>
                    <template v-slot:content>
                        <p>简单算法试炼场</p>
                    </template>
                </card>
            </div>

            <div class="card" @click="goUrl('markdown/fantastic/p5')">
                <card data-image="/note/images/hutao/hutao6.jpg">
                    <template v-slot:header>
                        <h1>p5</h1>
                    </template>
                    <template v-slot:content>
                        <p>p5.js搬运场</p>
                    </template>
                </card>
            </div>

            <div class="card" @click="goUrl('markdown/fantastic/rust')">
                <card data-image="/note/images/hutao/hutao7.png">
                    <template v-slot:header>
                        <h1>rust</h1>
                    </template>
                    <template v-slot:content>
                        <p>rust basic</p>
                    </template>
                </card>
            </div>

            <card data-image="/note/images/hutao/hutao8.jpg"></card>
        </div>

    </div>
</template>

<script lang="ts">
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
    unmounted(){
        this.showContainer = false;
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

