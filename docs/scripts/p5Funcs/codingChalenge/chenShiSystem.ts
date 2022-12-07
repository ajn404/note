export const chenShiSystem = (_: any) => {
    let x = 1, y = 1, z = 1;
    let a = 35;
    let b = 3;
    let c = 28;
  
    const colorSize = 8;
  
    _.setup = () => {
      _.createCanvas(800, 600, _.P3D);
      _.background(0);
      _.strokeWeight(0.2);
    }
    _.draw = () => {
      if (window && window["p5DrawLoop"] !== "chenShiSystem") {
        _.noLoop();
      }
      let dt = 0.001;
      let dx = dt * (a * (y - x));
      let dy = dt * (x * (c - a) - x * z + c * y);
      let dz = dt * (x * y - b * z);
      x += dx;
      y += dy;
      z += dz;
      _.translate(_.width / 2, _.height / 2, 0);
      _.stroke((x < 0 ? -x : x) * colorSize % 255, (y < 0 ? -y : y) * colorSize % 255, (z < 0 ? -z : z) * colorSize % 255);
      _.scale(8);
      _.point(x, y, z);
    }
  }