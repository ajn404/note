export const ambientLight = (_: any) => {
    let p5DrawLoop = window["p5DrawLoop"];
    let angle;
    let lightColor: any, materialColor: any;
    _.setup = () => {
      _.createCanvas(500, 500, _.WEBGL)
      lightColor = _.createColorPicker('#ffffff')
      materialColor = _.createColorPicker('#ff00ff')
      lightColor.style('margin-top', '1em')
      materialColor.style('margin-top', '1em')
    }
  
  
    _.draw = () => {
      _.background(255)
      angle = _.PI * _.frameCount * 0.001
      _.rotateX(angle)
      _.rotateY(angle)
      _.rotateZ(angle)
      _.ambientLight(lightColor.color())
      _.ambientMaterial(materialColor.color());
      _.cone(30, 70)
      _.translate(0, 0, -100)
      _.box(50)
  
  
      if (window && window["p5DrawLoop"] !== 'ambientLight') {
        _.noLoop()
      }
    }
  }
  