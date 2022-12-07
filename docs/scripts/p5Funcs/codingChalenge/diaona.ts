export const diaona = (_: any) => {
    _.setup = () => {
        _.createCanvas(_.windowWidth-10, _.windowHeight, _.WEBGL)
        _.normalMaterial()
    }

    let diaona: any;
    _.preload = () => {
        diaona = _.loadModel('/note/model/diaona.obj', true)
    }
    _.draw = () => {
        _.background(255)
        _.applyMatrix(3, 0, 0, 3, 0, 0);

        // _.orbitControl()
        _.rotateZ(_.PI)

        _.rotateY(_.frameCount * _.PI * 0.005)
        _.model(diaona)
        if (window && window["p5DrawLoop"] !== "diaona") {
            _.redraw()
            _.noLoop()
        }
    }
}