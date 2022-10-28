<template>
    <div class="kaboom-box" ref="kaboomBox">
        <canvas ref="kaboomCanvas" height="250"></canvas>
    </div>
</template>

<script lang="ts" setup>
import kaboom from "kaboom";
import { ref, nextTick  } from 'vue';
const kaboomBox = ref(null);
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

    // assertIsNonNullish(kaboomBox?.value, "找不到dom元素")
    assertIsNonNullish(kaboomCanvas?.value, "找不到canvas元素")
    kaboom(
        {
            canvas:kaboomCanvas.value
        }
    )
    loadSprite("bean", "/note/images/boy.svg")
    loadSprite("mark", "/note/images/girl.svg")
    const dialogs = [
        ["bean", "hi my butterfly"],
        ["mark", "i love u"],
        ["bean", "you love me? pretty baby"],
        ["bean", "mark is a stupid"],
        ["bean", "he did not know how to take care of you..."],
        ["mark", "you don't know me ..."],
        ["bean", "what! mark???"],
        ["mark", "oh...hi "],
    ]

    const origin = window['origin']

    let curDialog = 0

    // Text bubble
    const textbox = add([
        rect(width() / 3 * 2, 60),
        origin("center"),
        pos(center().x, height() - 100),
        outline(2),
    ])

    // Text
    const txt = add([
        text("", { size: 32, width: width() - 230 }),
        pos(textbox.pos),
        origin("center")
    ])

    // Character avatar
    const avatar = add([
        sprite("bean"),
        scale(1),
        origin("center"),
        pos(center().sub(-200, 30))
    ])

    onKeyPress("space", () => {
        curDialog = (curDialog + 1) % dialogs.length
        updateDialog()
    })

    function updateDialog() {
        const [char, dialog] = dialogs[curDialog]
        avatar.use(sprite(char))
        txt.text = dialog
    }

    onClick(() => {
	// Use toWorld() to transform a screen-space coordinate (like mousePos()) to the world-space coordinate, which has the camera transform applied
	const worldMousePos = toWorld(mousePos())
	addKaboom(worldMousePos)
    curDialog = (curDialog + 1) % dialogs.length
        updateDialog()
})

    updateDialog()
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