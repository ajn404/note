export const pointHandle = (_: any) => {
    let p5DrawLoop = window["p5DrawLoop"];
    _.setup = () => {
      _.createCanvas(500, 200, _.WEBGL)
    }
    _.draw = () => {
      _.background(255)
      _.camera(0, 0, 160 + _.sin(_.frameCount * 0.01) * 100, 0, 0, 0, 0, 1, 0)
      _.rotateX(_.PI / 3)
      _.torus(30, 10)
      if (window && window["p5DrawLoop"] !== 'pointHandle') {
        _.noLoop()
      }
    }
  }