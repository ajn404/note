<script lang="js" >
import Card from './card.vue';
import { useRouter } from 'vue-router'
export default {
    name: "NoteCards",
    data() {
        return {
            showContainer: true,
        };
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
            this.router.replace(url)
        }
    },
    unmounted() {
        this.showContainer = false;
    },
    components: { Card }
};
</script>

<template>
    <div class="cards">
        <div class="container" v-if="showContainer">


            <XyzTransition appear xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0">
                <div class="card" @click="goUrl('/note/markdown/notes/js')">
                    <card data-image="/note/images/hutao/hutao1.webp">
                        <template v-slot:header>
                            <h1>javascript</h1>
                        </template>
                        <template v-slot:content>
                            <p>2022简单翻译ECMA</p>
                        </template>
                    </card>
                </div>
            </XyzTransition>

            <XyzTransition appear xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0">
                <div class="card" @click="goUrl('/note/markdown/notes/glsl')">
                    <card data-image="/note/images/hutao/hutao2.webp">
                        <template v-slot:header>
                            <h1>glsl</h1>
                        </template>
                        <template v-slot:content>
                            <p>glsl的基本语法</p>
                        </template>
                    </card>
                </div>
            </XyzTransition>
            <XyzTransition appear xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0">
                <div class="card" @click="goUrl('/note/markdown/notes/shell')">
                    <card data-image="/note/images/hutao/hutao3.webp">
                        <template v-slot:header>
                            <h1>shell</h1>
                        </template>
                        <template v-slot:content>
                            <p>基础脚本操作总结</p>
                        </template>
                    </card>
                </div>

            </XyzTransition>
            <XyzTransition appear xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0">
                <div class="card" @click="goUrl('/note/markdown/notes/ts')">
                    <card data-image="/note/images/hutao/hutao4.webp">
                        <template v-slot:header>
                            <h1>typescript</h1>
                        </template>
                        <template v-slot:content>
                            <p>typescript基础与技巧</p>
                        </template>
                    </card>
                </div>

            </XyzTransition>
            <XyzTransition appear xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0">
                <div class="card" @click="goUrl('/note/markdown/notes/leetcode')">
                    <card data-image="/note/images/hutao/hutao5.webp">
                        <template v-slot:header>
                            <h1>algorithm</h1>
                        </template>
                        <template v-slot:content>
                            <p>简单算法试炼场</p>
                        </template>
                    </card>
                </div>

            </XyzTransition>
            <XyzTransition appear xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0">
                <div class="card" @click="goUrl('/note/markdown/fantastic/p5')">
                    <card data-image="/note/images/hutao/hutao6.webp">
                        <template v-slot:header>
                            <h1>p5</h1>
                        </template>
                        <template v-slot:content>
                            <p>p5.js搬运场</p>
                        </template>
                    </card>
                </div>

            </XyzTransition>
            <XyzTransition appear xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0">
                <div class="card" @click="goUrl('/note/markdown/notes/rust')">
                    <card data-image="/note/images/hutao/hutao7.webp">
                        <template v-slot:header>
                            <h1>rust</h1>
                        </template>
                        <template v-slot:content>
                            <p>rust basic</p>
                        </template>
                    </card>
                </div>
            </XyzTransition>


                <!-- <card data-image="/note/images/hutao/hutao8.webp"></card> -->
        </div>

    </div>
</template>



<style lang="scss" scoped>
.cards {
    font-size: .8em;
    font-weight: 500;
}

.container {
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .card {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}

p {
    line-height: 1.5em;
}

h1 {
    font-size: 2.0vw;
}

h1+p,
p+p {
    margin-top: 1vw;
}
</style>

