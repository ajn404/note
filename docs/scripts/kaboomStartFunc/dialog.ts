// @ts-nocheck
export const dialog = ()=>{
    loadSprite("cat", "/note/images/boy.svg")
    loadSprite("mark", "/note/images/girl.svg")
    const dialogs = [
        ["cat", "hi my butterfly"],
        ["mark", "i love u"],
        ["cat", "you love me? pretty baby"],
        ["cat", "mark is a stupid"],
        ["cat", "he did not know how to take care of you..."],
        ["mark", "you don't know me ..."],
        ["cat", "what! mark???"],
        ["mark", "oh...hi "],
    ]
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
        text("", { 
            size: 32, 
            width: width() - 230,            
        }),
        pos(textbox.pos),
        origin("center")
    ])
    // Character avatar
    const avatar = add([
        sprite("cat"),
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