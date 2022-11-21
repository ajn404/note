export const delaySound = (_: any) => {

    let osc: any;
    let p5 = window["p5"];
  
    _.setup = () => {
      let cnv = _.createCanvas(100, 100);
      _.background(220);
      _.textAlign(_.CENTER);
      _.text('点击播放', _.width / 2, _.height / 2);
      osc = new p5.Oscillator('sin');
      osc.amp(0.5);
      let delay = new p5.Delay();
      delay.process(osc, 0.12, .7, 2300);
  
      cnv.mousePressed(oscStart);
    }
  
    function oscStart() {
      osc.start();
    }
  
    _.mouseReleased = () => {
      osc.stop();
    }
  
  
    _.draw = () => {
      if (window && window["p5DrawLoop"] !== "delaySound") {
        _.noLoop();
      }
    }
  }