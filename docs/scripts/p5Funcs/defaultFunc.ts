export const defaultFunc = (_p5: any) => {
    let _ = _p5;
    let slider: any;
    _.setup = () => {
      _.createCanvas(500, 500, _.WEBGL);
      _.fill("red");
      _.normalMaterial();
  
      slider = _.createSlider(0, 255, 200);
      // slider.position(10,10);
      slider.style("width", "500px");
    };
    _.draw = () => {
      if (window && window["p5DrawLoop"] !== "defaultFunc") {
        _.noLoop();
      }
      _.orbitControl();
  
      _.background(255);
      let val: any = slider.value();
      _.rotateZ(_.frameCount * 0.002);
      _.rotateX(_.frameCount * 0.002);
      _.rotateY(_.frameCount * 0.002);
      _.box(val);
    };
  };