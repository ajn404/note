export const coordinate = (_p5: any) => {
    let _ = _p5;
    _.setup = () => {
      _.createCanvas(500, 200, _.WEBGL)
    //   _.normalMaterial()
    }
    _.draw = () => {
      _.background(255)
      _.orbitControl()
      _.rotateY(0.003 * _.PI * _.frameCount);
      _.rotateX(0.3 * _.PI )
      _.box(100)
      if (window && window["p5DrawLoop"] !== "coordinate") {
        _.noLoop()
      }
    }
  }