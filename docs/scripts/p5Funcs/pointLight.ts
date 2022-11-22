export const pointLight = (_: any) => {
    let p5DrawLoop = window["p5DrawLoop"];
    _.setup = () => {
      _.createCanvas(500, 500, _.WEBGL)
    }
  
  
    _.draw = () => {
      _.background(0)
      let locX = _.mouseX - _.width / 2;
      let locY = _.mouseY - _.height / 2;
      _.pointLight(250, 250, 250, locX, locY, 100);
      _.noStroke();
      _.sphere(80);
      if (window && window["p5DrawLoop"] !== p5DrawLoop) {
        _.noLoop()
      }
    }
  
  }