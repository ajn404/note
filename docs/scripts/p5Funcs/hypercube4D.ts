class P4Vector {
  x: number;
  y: number;
  z: number;
  w: number;
  constructor(x: number, y: number, z: number, w: number) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
    this.w = w || 0;
  }

  mult(f: number) {
    this.x *= f
    this.y *= f
    this.z *= f
    this.w *= f
  }

}
export const hypercube4D = (_: any) => {

  const points: any[] = [];
  let angle = 0;
  let p5 = window['p5'];

  //@ts-ignore
  const vecToMatrix = (v) => {
    let m = [];
    for (let i = 0; i < 3; i++) {
      m[i] = [];
    }
    m[0][0] = v.x;
    m[1][0] = v.y;
    m[2][0] = v.z;
    return m;
  }
  //@ts-ignore
  const vec4ToMatrix = (v) => {
    let m = vecToMatrix(v);
    m[3] = [];
    m[3][0] = v.w;
    return m;
  }

  const matrixToVec = (m: any) => {
    return _.createVector(m[0][0], m[1][0], m[2][0]);
  }

  const matrixToVec4 = (m: any) => {
    let r = new P4Vector(m[0][0], m[1][0], m[2][0], 0);
    if (m.length > 3) {
      r.w = m[3][0];
    }
    return r;
  }

  //@ts-ignore
  const matmulvec = (a, vec) => {
    let m = vecToMatrix(vec);
    let r: any = matmul(a, m);
    return matrixToVec(r);
  }

  const matmulvec4 = (a: any, vec: any) => {
    let m = vec4ToMatrix(vec);
    let r = matmul(a, m);
    return matrixToVec4(r);
  }


  const connect = (offset: any, i: any, j: any, points: any) => {
    _.strokeWeight(4);
    _.stroke(100, 100, 100);
    const a = points[i + offset];
    const b = points[j + offset];
    _.line(a.x, a.y, a.z, b.x, b.y, b.z);
  }

  const matmul = (a: any, b: any): any => {
    if (b instanceof p5.Vector) {
      return matmulvec(a, b);
    }
    if (b instanceof P4Vector) {
      return matmulvec4(a, b);
    }

    let colsA = a[0].length;
    let rowsA = a.length;
    let colsB = b[0].length;
    let rowsB = b.length;

    if (colsA !== rowsB) {
      console.error("Columns of A must match rows of B");
      return null;
    }

    let result = [];
    for (let j = 0; j < rowsA; j++) {
      result[j] = [];
      for (let i = 0; i < colsB; i++) {
        let sum = 0;
        for (let n = 0; n < colsA; n++) {
          sum += a[j][n] * b[n][i];
        }
        result[j][i] = sum;
      }
    }
    return result;
  }



  _.setup = () => {
    let size = _.min(_.windowWidth, _.windowHeight);
    _.createCanvas(size, size, _.WEBGL);


    points[0] = new P4Vector(-1, -1, -1, 1);
    points[1] = new P4Vector(1, -1, -1, 1);
    points[2] = new P4Vector(1, 1, -1, 1);
    points[3] = new P4Vector(-1, 1, -1, 1);
    points[4] = new P4Vector(-1, -1, 1, 1);
    points[5] = new P4Vector(1, -1, 1, 1);
    points[6] = new P4Vector(1, 1, 1, 1);
    points[7] = new P4Vector(-1, 1, 1, 1);
    points[8] = new P4Vector(-1, -1, -1, -1);
    points[9] = new P4Vector(1, -1, -1, -1);
    points[10] = new P4Vector(1, 1, -1, -1);
    points[11] = new P4Vector(-1, 1, -1, -1);
    points[12] = new P4Vector(-1, -1, 1, -1);
    points[13] = new P4Vector(1, -1, 1, -1);
    points[14] = new P4Vector(1, 1, 1, -1);
    points[15] = new P4Vector(-1, 1, 1, -1);

  }


  _.draw = () => {
    _.background(255);
    _.rotateX(-_.PI / 2);
    let projected3d = [];
    for (let i = 0; i < points.length; i++) {
      const v: any = points[i];
      const rotationXY = [
        [_.cos(angle), -_.sin(angle), 0, 0],
        [_.sin(angle), _.cos(angle), 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
      ];

      const rotationZW = [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, _.cos(angle), -_.sin(angle)],
        [0, 0, _.sin(angle), _.cos(angle)]
      ];

      let rotated = matmul(rotationXY, v);
      rotated = matmul(rotationZW, rotated);

      let distance = 2;
      let w = 1 / (distance - rotated.w);

      const projection = [
        [w, 0, 0, 0],
        [0, w, 0, 0],
        [0, 0, w, 0],
      ];

      let projected = matmul(projection, rotated);
      projected.mult(_.width / 8);
      projected3d[i] = projected;

      _.stroke(100, 200);
      _.strokeWeight(32);
      _.noFill();
      _.point(projected.x, projected.y, projected.z);
    }


    // Connecting
    for (let i = 0; i < 4; i++) {
      connect(0, i, (i + 1) % 4, projected3d);
      connect(0, i + 4, ((i + 1) % 4) + 4, projected3d);
      connect(0, i, i + 4, projected3d);
    }

    for (let i = 0; i < 4; i++) {
      connect(8, i, (i + 1) % 4, projected3d);
      connect(8, i + 4, ((i + 1) % 4) + 4, projected3d);
      connect(8, i, i + 4, projected3d);
    }

    for (let i = 0; i < 8; i++) {
      connect(0, i, i + 8, projected3d);
    }

    angle = _.map(_.mouseX, 0, _.width, 0, _.TWO_PI);
    // angle += 0.02;

    if (window && window["p5DrawLoop"] !== "hypercube4D") {
      _.noLoop();
    }
  }
}