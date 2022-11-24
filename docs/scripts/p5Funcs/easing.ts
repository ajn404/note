export const easing = (_: any) => {
    let x = 1;
    let y = 1;
    let easing = 0.05;
  
    function setup() {
      _.createCanvas(_.windowWidth, 400);
      _.noStroke();
      _.textSize(20);
    }
  
    function draw() {
      _.background(189, 233, 189)
      if (window && window["p5DrawLoop"] !== "easing") {
        _.noLoop();
      }
      let targetX = _.mouseX;
      let dx = targetX - x;
      x += dx * easing;
  
      let targetY = _.mouseY;
      let dy = targetY - y;
      y += dy * easing;
      _.fill(0, 0, 189)
      _.text('note', x, y, 66, 66);
    }
  
    _.setup = setup;
    _.draw = draw;
  
  };