export const boxRef1 = (_p5: any) => {
    let _ = _p5;
    _.setup = () => {
      _.createCanvas(500, 200, _.WEBGL);
    };
    _.draw = () => {
      if (window && window["p5DrawLoop"] !== "boxRef1") {
        _.noLoop();
      }
      _.push();
      _.background(250, 0, 22);
      // _.rotateY(_.frameCount*0.0002)
      _.rotateZ(_.frameCount * 0.01);
      _.rotateY(_.frameCount * 0.01);
      _.rotateX(_.frameCount * 0.01);
      _.box(100);
  
      _.pop();
  
      // _.translate(120,0,0)
      // _.box(100)
    };
  };