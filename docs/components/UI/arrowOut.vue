
<script lang="ts" setup>
const props = defineProps({
    text:String,
})
</script>


<template>
    <div class="twoslash-annotation right">
        <svg style="transform: translateX(0px) translateY(-10px) rotate(270deg);" width="40" height="40"
            viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1 39C1.5 32.7511 6.1 17.5173 20.5 6.57333M11.5 4.04L27 0.999998C24.8333 4.88444 20.5 13.16 20.5 15.1867"
                stroke="black"></path>
        </svg>
        <p class="twoslash-annotation-text" style="transform: rotate(3deg)">{{props.text}}</p>
    </div>
</template>

<style lang="scss" scoped>
.twoslash-annotation p {
    font-size: .8rem;
    line-height: .9rem;
    text-align: left;
}

.twoslash-annotation {
    color: #187abf;
    width: 200px;
    transform: rotate(20deg);
}
</style>