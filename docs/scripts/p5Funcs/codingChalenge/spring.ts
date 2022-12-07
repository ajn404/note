export const spring = (_: any) => {
    let springHeight = 32,
      left: any,
      right: any,
      maxHeight = 200,
      minHeight = 100,
      over = false,
      move = false;
  
    let M = 0.8,  // Mass
      K = 0.2,  // 弹簧系数
      D = 0.92, // 阻尼
      R = 150;  // Rest position
  
    let ps = R,   // Position
      vs = 0.0, // Velocity
      as = 0,   // Acceleration
      f = 0;    // Force
  
    _.setup = () => {
      _.createCanvas(_.windowWidth * 3 / 4, _.windowHeight * 3 / 4);
      _.rectMode(_.CORNERS);
      _.noStroke();
      left = _.width / 2 - 100;
      right = _.width / 2 + 100;
    }
  
    _.draw = () => {
      if (window && window["p5DrawLoop"] !== "spring") {
        _.noLoop();
      }
      _.background(102);
      updateSpring()
      drawSpring();
    }
    const drawSpring = () => {
      _.fill(0.2);
      let baseWidth = 0.5 * ps + -8;
      _.rect(_.width / 2 - baseWidth, ps + springHeight, _.width / 2 + baseWidth, _.height);
      if (over || move) {
        _.fill(255);
      } else {
        _.fill(204);
      }
      _.rect(left, ps, right, ps + springHeight);
    }
  
    const updateSpring = () => {
      if (_.mouseX > left && _.mouseX < right && _.mouseY > ps && _.mouseY < ps + springHeight) {
        over = true;
      } else {
        over = false;
      }
  
      if (!move) {
        f = -K * (ps - R);//力
        as = f / M;//加速度
        vs = D * (vs + as);//速度
        ps = ps + vs;
      }
      if (_.abs(vs) < 0.1) {
        vs = 0.0;
      }
      if (move) {
        ps = _.mouseY - springHeight / 2;
        ps = _.constrain(ps, minHeight, maxHeight);
      }
    }
  
    _.mousePressed = () => {
      if (over) {
        move = true
      }
    }
  
    _.mouseReleased = () => {
      move = false
    }
  }