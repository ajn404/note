export const boxRef = (_p5: any) => {
    let _ = _p5;
    _.setup = () => {
      _.createCanvas(500, 200, _.WEBGL);
      _.normalMaterial();
    };
  
    let rotateNumber = 0;
  
    _.draw = () => {
      if (window && window["p5DrawLoop"] !== "boxRef") {
        _.noLoop();
      }
      _.background(200);
      _.orbitControl();
  
      _.push();
      _.translate(-20, -20);
      rotateNumber += 0.1;
      _.rotateY(rotateNumber);
      _.box(30, 50);
      _.pop();
      _.translate(30, 60);
      _.push();
      _.rotateX(rotateNumber);
      _.box(30, 50);
      _.pop();
    };
  };