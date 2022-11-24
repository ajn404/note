export const bubbleSort = (_: any) => {
    let i = 0,
      j = 0,
      values: any = [];
  
    let rate = 60;
    _.setup = () => {
      _.createCanvas(_.windowWidth, _.windowHeight);
      _.frameRate(rate);
      values = new Array(_.width);
      for (let n = 0; n < values.length; n++) {
        values[n] = _.random(_.windowHeight);
      }
    };
    _.draw = () => {
      if (window && window["p5DrawLoop"] !== "bubbleSort") {
        _.noLoop();
      }
      _.background(0);
      if (i < values.length) {
        for (let j = 0; j < values.length - i - 1; j++) {
          let a = values[j];
          let b = values[j + 1];
          if (a > b) {
            [values[j], values[j + 1]] = [values[j + 1], values[j]];
          }
        }
      } else {
        _.noLoop();
      }
      i++;
      for (let m = 0; m < values.length; m++) {
        _.stroke(255);
        _.line(m, _.windowHeight, m, _.height - values[m]);
      }
    };
  
    _.mousePressed = () => { };
  };