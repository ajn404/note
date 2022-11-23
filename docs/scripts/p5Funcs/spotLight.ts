export const spotLight = (_: any) => {
    let colorPicker: any;
    _.setup = () => {
      _.createCanvas(200, 200, _.WEBGL)
      _.noStroke()
      colorPicker = _.createColorPicker('#00ff00')
    }
  
    let locX, locY;
    _.draw = () => {
      _.background(0)
  
      locX = _.mouseX - _.width / 2;
      locY = _.mouseY - _.height / 2
  
      _.ambientLight(50)
      _.spotLight(colorPicker.color(), locX, locY, 200, 0, 0, -1, Math.PI / 16);
      _.sphere(80)
  
      if (window && window["p5DrawLoop"] !== 'spotLight') {
        _.noLoop()
      }
    }
  }
  