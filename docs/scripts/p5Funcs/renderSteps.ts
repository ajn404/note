export const renderSteps = (_: any) => {
    let p5DrawLoop = window["p5DrawLoop"];
    _.setup = () => {
      _.createCanvas(_.windowWidth, _.windowHeight, _.WEBGL)
      _.normalMaterial()
  
    }
  
    let teaBox: any;
    _.preload = () => {
      teaBox = _.loadModel('/note/model/teapot.obj', true)
    }
  
    _.draw = () => {
      _.background(200)
  
  
      _.orbitControl()
      _.rotateZ(_.PI)
  
      _.rotateY(_.frameCount * _.PI * 0.01)
      _.model(teaBox)
      if (window && window["p5DrawLoop"] !== "renderSteps") {
        _.redraw()
        _.noLoop()
      }
    }
  }