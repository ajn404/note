export const lorenzSystem = (_: any) => {
    let x = 1, y = 1, z = 1;
    let a = 10;
    let b = 28;
    let c = 8 / 3;
  
    _.setup = () => {
      _.createCanvas(800, 600, _.P3D);
      _.background(0);
      _.strokeWeight(0.2);
    }
    _.draw = () => {
      if (window && window["p5DrawLoop"] !== "lorenzSystem") {
        _.noLoop();
      }
      let dt = 0.01;
      let dx = dt * (a * (y - x));
      let dy = dt * (x * (b - z) - y);
      let dz = dt * (x * y - c * z);
      x += dx;
      y += dy;
      z += dz;
      _.translate(_.width / 2, _.height / 2, 0);
      _.stroke((x < 0 ? -x : x) * 10 %255, (y < 0 ? -y : y) * 10 % 255, (z < 0 ? -z : z) * 10 % 255);
      _.scale(10);
      _.point(x, y, z);
    }
  }