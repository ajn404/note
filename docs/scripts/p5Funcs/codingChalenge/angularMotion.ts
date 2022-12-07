export const angularMotion = (_p5: any) => {
    let p5 = _p5;
    let angle = 0;
  
    let angleV = 0;
    let angleA = 0.00001;
  
    p5.setup = () => {
      p5.createCanvas(400, 400);
      p5.angleMode(p5.RADIANS);
    };
    p5.draw = () => {
      if (window && window["p5DrawLoop"] !== "angularMotion") {
        p5.noLoop();
      }
      let cWidth = p5.width;
      let cHeight = p5.height;
      angleA = p5.map(p5.mouseX, 0, p5.width, -0.01, 0.01);
      angleV = p5.constrain(angleV, -0.2, 0.2);
      p5.background(146, 83, 161);
      p5.noStroke();
      p5.fill(240, 99, 164);
      p5.rectMode(p5.CENTER);
      p5.translate(cWidth / 2, cHeight / 2);
      p5.rotate(angle);
      p5.rect(0, 0, 256, 32);
      angle += angleV;
      angleV += angleA;
    };
  
  };