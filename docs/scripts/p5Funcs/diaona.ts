export const diaona = (_: any) => {
    _.setup = () => {
        _.createCanvas(_.windowWidth, _.windowHeight, _.WEBGL)
        _.normalMaterial()
    }

    let diaona: any;
    _.preload = () => {
        diaona = _.loadModel('/note/model/diaona.obj', true)
    }
    _.draw = () => {
        _.background(150)
        _.applyMatrix(4, 0, 0, 4, 0, 0);

        // _.orbitControl()
        _.rotateZ(_.PI)

        _.rotateY(_.frameCount * _.PI * 0.01)
        _.model(diaona)
        if (window && window["p5DrawLoop"] !== "diaona") {
            _.redraw()
            _.noLoop()
        }
    }
}