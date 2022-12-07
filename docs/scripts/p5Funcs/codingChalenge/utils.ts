export const  addButton = (label: any, p5: any,option?:any)=> {
    let button = p5.createButton(label);
    let buttonStyle = button.elt.style;
    buttonStyle.border = option.border ??"none";
    buttonStyle.marginTop =option.marginTop ?? "20px";
    buttonStyle.padding = option.padding ??"10px";
    buttonStyle.width = option.width??"100%";
    buttonStyle.boxShadow = option.boxShadow ??"1px 1px 0 0 #e0e0e0";
    buttonStyle.background = option.background ??"var(--el-color-primary)";
    buttonStyle.color = option.color ??"#fff";
    button.elt.addEventListener("mouseenter", function () {
        buttonStyle.opacity = "0.6";
    });
    button.elt.addEventListener("mouseleave", function () {
        buttonStyle.opacity = "1";
    });
    return button;
}