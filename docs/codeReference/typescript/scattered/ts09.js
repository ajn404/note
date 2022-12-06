var freezeOrigin = Object.freeze({
    x: 1,
    y: 1
});
freezeOrigin.x = 1; //无法分配到"x"，因为它是只读属性
