export const polarCoordinates = (_p5: any) => {
    let p5 = _p5;
    let r = 150;
  
    let TWO_PI = p5.PI * 2;
  
    p5.setup = () => {
      p5.createCanvas(400, 400);
    };
  
    p5.draw = () => {
      if (window && window["p5DrawLoop"] !== "polarCoordinates") {
        p5.noLoop();
      }
  
      let increment = p5.map(p5.mouseX, 0, 400, p5.PI, 0.01);
      p5.translate(200, 200);
  
      p5.background(0, 10);
      p5.stroke(255);
      p5.strokeWeight(4);
      p5.noFill();
      p5.beginShape();
  
      if (increment < 0) {
        increment = -increment;
      }
  
      for (let i = 0; i < TWO_PI; i += increment) {
        let x = r * p5.cos(i);
        let y = r * p5.sin(i);
        p5.vertex(x, y);
      }
  
      p5.endShape(p5.CLOSE);
    };
  };