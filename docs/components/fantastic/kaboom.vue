<template>
    <div class="kaboom-box">
        <canvas ref="kaboomCanvas" height="250"></canvas>
    </div>
</template>

<script lang="ts" setup>
import kaboom from "kaboom";
import { ref, nextTick  } from 'vue';
import * as kaboomFunc from '@scripts/kaboomStartFunc/index'
const props = defineProps({
    func:String
})

const kaboomCanvas = ref(null);
function assertIsNonNullish<T>(
    value: T,
    message: string
): asserts value is NonNullable<T> {
    if (value === null || value === undefined) {
        throw Error(message);
    }
}
const start = () => {
    assertIsNonNullish(kaboomCanvas?.value, "找不到canvas元素")
    kaboom(
        {
            canvas:kaboomCanvas.value
        }
    )
    if(props.func) kaboomFunc[props.func]()
}
nextTick(()=>{
    start()
})

</script>

<style lang="scss" scoped>
.kaboom-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    margin-top: 2em;
    canvas{
        width: 100%;
        height: 100%;
    }
}
</style>