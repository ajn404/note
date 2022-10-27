<template>
    <div class="kaboom-box" ref="kaboomBox">
        <el-button @click="start"> 
            打开对话
        </el-button>
    </div>
</template>

<script lang="ts" setup>
import kaboom from "kaboom";
import {ref} from 'vue';
const kaboomBox = ref(null)


function assertIsNonNullish<T>(
    value:T,
    message:string
):asserts value is NonNullable<T>{
    if(value===null||value===undefined){
        throw Error(message);
    }
}
const start = ()=>{
    assertIsNonNullish(kaboomBox?.value,"找不到dom元素")
    kaboom(
        {
            root:kaboomBox.value,
            height:1845,
        }
    )

    loadSprite("bean", "/note/images/sun.svg")
    loadSprite("mark", "/note/images/logo.jpg")
    const dialogs = [
	[ "bean", "hi my butterfly" ],
	[ "mark", "i love u" ],
	[ "bean", "you love me? pretty baby" ],
	[ "bean", "mark is a stupid" ],
	[ "bean", "he did not know how to take care of you..." ],
	[ "mark", "you don't know me ..." ],
	[ "bean", "what! mark???" ],
	[ "mark", "oh...hi " ],
]

let curDialog = 0

// Text bubble
const textbox = add([
	rect(width() - 200, 120, { radius: 32 }),
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
	scale(3),
	origin("center"),
	pos(center().sub(0, 50))
])

onKeyPress("space", () => {
	curDialog = (curDialog + 1) % dialogs.length
	updateDialog()
})

function updateDialog() {
	const [ char, dialog ] = dialogs[curDialog]
	avatar.use(sprite(char))
	txt.text = dialog

}

updateDialog()

}

</script>

<style lang="scss" scoped>
.kaboom-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
}
</style>