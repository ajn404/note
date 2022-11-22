export const directionalLight = (_: any) => {
    let p5DrawLoop = window["p5DrawLoop"];
    _.setup = () => {
      _.createCanvas(500, 500, _.WEBGL)
    }
  
    let dirX, dirY;
    _.draw = () => {
      _.background(0)
  
      dirX = (_.mouseX / _.width - 0.5) * 2;
      dirY = (_.mouseY / _.height - 0.5) * 2
  
      _.directionalLight(255, 255, 255, -dirX, -dirY, -1)
      _.noStroke()
      _.sphere(80)
  
  
  
      if (window && window["p5DrawLoop"] !== p5DrawLoop) {
        _.noLoop()
      }
    }
  
  }
  