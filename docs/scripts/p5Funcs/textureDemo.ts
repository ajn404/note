export const textureDemo = (_: any) => {
    _.setup = () => {
      _.createCanvas(500, 500, _.WEBGL)
    }
  
    let img: any, angle;
    _.preload = () => {
      img = _.loadImage('/note/images/logo.jpg')
    }
  
    _.draw = () => {
      _.background(255);
      _.orbitControl();
      angle = _.PI * _.frameCount * 0.001
      _.rotateX(angle)
      _.rotateY(angle)
      _.rotateZ(angle)
      _.texture(img)
      _.box(100)
      if (window && window["p5DrawLoop"] !== "textureDemo") {
        _.noLoop()
      }
    }
  }