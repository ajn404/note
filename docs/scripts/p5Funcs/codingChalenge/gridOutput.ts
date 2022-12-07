export const gridOutput = (_: any) => {
    _.setup = () => {
      _.createCanvas(500, 300);
    };
    let x = 0;
  
    _.draw = () => {
      if (window && window["p5DrawLoop"] !== "gridOutput") {
        _.noLoop();
      }
      if (x > _.width) {
        x = 0;
      }
  
      _.gridOutput("hh");
      // https://p5js.org/zh-Hans/reference/#/p5/gridOutput
      _.background(148, 196, 0);
      _.fill(255, 0, 0);
      //
      _.ellipse(x, 20, 20, 20);
  
      _.fill("blue");
      _.rect(50, 50, 50, 50);
      _.ellipse(20, 20, 20, 20);
  
      x += 0.1;
    };
  };