export const main = (_p5: any) => {
    const p5 = _p5;
    let xpos1: any;
    let xpos2: any;
    let xpos3: any;
    let xpos4: any;
    let thin = 8;
    let thick = 36;
    p5.setup = () => {
      p5.createCanvas(400, 400);
      p5.noStroke();
      xpos1 = p5.width / 2;
      xpos2 = p5.width / 2;
      xpos3 = p5.width / 2;
      xpos4 = p5.width / 2;
    };
  
    p5.draw = () => {
      if (window && window["p5DrawLoop"] !== "main") {
        p5.noLoop();
      }
      p5.background(0);
      const width = p5.width;
      let mx = p5.mouseX * 0.4 - p5.width / 5.0;
      p5.fill(102);
      p5.rect(xpos2, 0, thick, p5.height / 2);
      p5.fill(204);
      p5.rect(xpos1, 0, thin, p5.height / 2);
      p5.fill(102);
      p5.rect(xpos4, p5.height / 2, thick, p5.height / 2);
      p5.fill(204);
      p5.rect(xpos3, p5.height / 2, thin, p5.height / 2);
      xpos1 += mx / 16;
      xpos2 += mx / 64;
      xpos3 -= mx / 16;
      xpos4 -= mx / 64;
      if (xpos1 < -thin) {
        xpos1 = width;
      }
      if (xpos1 > width) {
        xpos1 = -thin;
      }
      if (xpos2 < -thick) {
        xpos2 = width;
      }
      if (xpos2 > width) {
        xpos2 = -thick;
      }
      if (xpos3 < -thin) {
        xpos3 = width;
      }
      if (xpos3 > width) {
        xpos3 = -thin;
      }
      if (xpos4 < -thick) {
        xpos4 = width;
      }
      if (xpos4 > width) {
        xpos4 = -thick;
      }
    };
  };
  