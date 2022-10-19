//所有方法都导出在p5.vue中，需要展示的放在allMethods里

import { ElMessage } from "element-plus";
const isClickCanvas = (_: any) => {
  let mx = _.mouseX, my = _.mouseY;
  let mw = _.width, mh = _.height;
  return mx > 0 && mx < mw && my > 0 && my < mh
}

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

export const easing = (_: any) => {
  let x = 1;
  let y = 1;
  let easing = 0.05;

  function setup() {
    _.createCanvas(720, 400);
    _.noStroke();
  }

  function draw() {

    if (window && window["p5DrawLoop"] !== "easing") {
      _.noLoop();
    }
    _.background(237, 34, 93);
    let targetX = _.mouseX;
    let dx = targetX - x;
    x += dx * easing;

    let targetY = _.mouseY;
    let dy = targetY - y;
    y += dy * easing;

    _.ellipse(x, y, 66, 66);
  }

  _.setup = setup;
  _.draw = draw;

};

export const LSystem = (_p5: any) => {
  interface rule {
    a: any;
    b: any;
  }

  let p5 = _p5;
  let angle = p5.radians(20);
  let axiom = "F";
  let sentence = axiom;
  let len = 100;
  let rules: rule[] = [];
  let num = 0;
  rules[0] = {
    a: "F",
    b: "FF+[+F-F-F]-[-F+F+F]",
  };
  // "F" p5.line(0, 0, 0, -len); p5.translate(0, -len);
  // "+" p5.rotate(angle);
  // "-" p5.rotate(-angle);
  // "[" p5.push();
  // "]" p5.pop();

  function generate(canGene: any) {
    if (num < 4 || canGene) {
      num++;
      len *= 0.5;
      let nextSentence = "";
      for (let i = 0; i < sentence.length; i++) {
        let current = sentence.charAt(i);
        let found = false;
        for (let j = 0; j < rules.length; j++) {
          if (current == rules[j].a) {
            found = true;
            nextSentence += rules[j].b;
            break;
          }
        }
        if (!found) {
          nextSentence += current;
        }
      }
      sentence = nextSentence;
      turtle();
    } else {
      console.log("哒咩哒咩");
      if (num === 4) {
        let button = addButton("继续生成");
        button.mousePressed(generate(true));
      }
    }
  }

  function turtle() {
    p5.background(255);
    p5.resetMatrix();
    p5.translate(200, 400);
    for (let i = 0; i < sentence.length; i++) {
      let current = sentence.charAt(i);
      p5.stroke(
        Math.floor(255 * Math.random()),
        Math.floor(255 * Math.random()),
        Math.floor(255 * Math.random())
      );
      if (current == "F") {
        p5.line(0, 0, 0, -len);
        p5.translate(0, -len);
      } else if (current == "+") {
        p5.rotate(angle);
      } else if (current == "-") {
        p5.rotate(-angle);
      } else if (current == "[") {
        p5.push();
      } else if (current == "]") {
        p5.pop();
      }
    }
  }

  function addButton(label: any) {
    let button = p5.createButton(label);
    let buttonStyle = button.elt.style;

    buttonStyle.border = "none";
    buttonStyle.marginTop = "20px";
    buttonStyle.padding = "10px";
    buttonStyle.width = "100%";
    buttonStyle.boxShadow = "1px 1px 0 0 #e0e0e0";
    buttonStyle.background = "var(--el-color-primary)";
    buttonStyle.color = "#fff";

    button.elt.addEventListener("mouseenter", function () {
      buttonStyle.opacity = "0.6";
    });
    button.elt.addEventListener("mouseleave", function () {
      buttonStyle.opacity = "1";
    });

    return button;
  }

  p5.setup = () => {
    p5.createCanvas(400, 400);
    p5.background("#fff");
    turtle();
    let button = addButton("click me 持续生成");
    button.mousePressed(generate);
  };
};

export const angularMotion = (_p5: any) => {
  let p5 = _p5;
  let angle = 0;

  let angleV = 0;
  let angleA = 0.00001;

  p5.setup = () => {
    p5.createCanvas(400, 400);
    p5.angleMode(p5.RADIANS);
  };
  p5.draw = () => {
    if (window && window["p5DrawLoop"] !== "angularMotion") {
      p5.noLoop();
    }
    let cWidth = p5.width;
    let cHeight = p5.height;
    angleA = p5.map(p5.mouseX, 0, p5.width, -0.01, 0.01);
    angleV = p5.constrain(angleV, -0.2, 0.2);
    p5.background(146, 83, 161);
    p5.noStroke();
    p5.fill(240, 99, 164);
    p5.rectMode(p5.CENTER);
    p5.translate(cWidth / 2, cHeight / 2);
    p5.rotate(angle);
    p5.rect(0, 0, 256, 32);
    angle += angleV;
    angleV += angleA;
  };
};

export const slidePuzzle = (_p5: any) => {
  let p5 = _p5;

  let width = 400;
  let height = 400;

  let source: any;

  let w: any, h: any;
  let cols = 4;
  let rows = 4;

  let board: any[] = [];
  let tiles: any[] = [];
  let bubbles: any[] = [];

  p5.setup = () => {
    p5.createCanvas(width, height);
    source = p5.createGraphics(width, height);
    w = width / cols;
    h = height / rows;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let img = p5.createImage(w, h);
        let index = i + j * cols;
        board.push(index);
        let tile = new Tile(index, img);
        tiles[index] = tile;
      }
    }

    tiles.pop();
    board.pop();
    board.push(-1);

    startViz();

    simpleShuffle(board);
  };

  p5.mousePressed = () => {
    let i = p5.floor(p5.mouseX / w);
    let j = p5.floor(p5.mouseY / h);
    move(i, j, board);
  };

  p5.draw = () => {
    if (window && window["p5DrawLoop"] !== "slidePuzzle") {
      p5.noLoop();
    }

    p5.background(0);
    drawViz();

    updateTiles();

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let index = i + j * cols;
        let x = i * w;
        let y = j * h;
        let tileIndex = board[index];
        if (tileIndex > -1) {
          let img = tiles[tileIndex].img;
          p5.image(img, x, y, w, h);
        }
      }
    }

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * w;
        let y = j * h;
        p5.strokeWeight(1);
        p5.noFill();
        p5.rect(x, y, w, h);
      }
    }

    if (isSolved()) {
      console.log("SOLVED");
    }
  };

  function simpleShuffle(arr: any) {
    for (let i = 0; i < 1000; i++) {
      randomMove(arr);
    }
  }

  function updateTiles() {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = j * w;
        let y = i * h;
        let index = i + j * cols;
        if (tiles[index]) tiles[index].img.copy(source, x, y, w, h, 0, 0, w, h);
      }
    }
  }

  function randomMove(arr: any) {
    let r1 = p5.floor(p5.random(cols));
    let r2 = p5.floor(p5.random(rows));
    move(r1, r2, arr);
  }

  function swap(i: any, j: any, arr: any) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function isSolved() {
    for (let i = 0; i < board.length - 1; i++) {
      if (board[i] !== tiles[i].index) {
        return false;
      }
    }
    return true;
  }

  function move(i: any, j: any, arr: any) {
    let blank = findBlank() || 0;
    let blankCol = blank % cols;
    let blankRow = p5.floor(blank / rows);

    if (isNeighbor(i, j, blankCol, blankRow)) {
      swap(blank, i + j * cols, arr);
    }
  }

  function isNeighbor(i: any, j: any, x: any, y: any) {
    if (i !== x && j !== y) {
      return false;
    }

    if (p5.abs(i - x) == 1 || p5.abs(j - y) == 1) {
      return true;
    }
    return false;
  }

  function findBlank() {
    for (let i = 0; i < board.length; i++) {
      if (board[i] == -1) return i;
    }
  }

  function startViz() {
    for (let i = 0; i < 3; i++) {
      bubbles.push(new Bubble());
    }
  }

  function drawViz() {
    source.background(50);

    for (let b of bubbles) {
      b.update();
      b.show();
    }
  }

  class Bubble {
    r: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    color: any;

    constructor() {
      this.r = p5.random(60, 80);
      this.x = p5.random(this.r, width - this.r);
      this.y = p5.random(this.r, height - this.r);
      this.vx = p5.random(-2, 2);
      this.vy = p5.random(-2, 2);
      this.color = p5.color(
        p5.random(255),
        p5.random(255),
        p5.random(255),
        100
      );
    }

    show() {
      source.noFill();
      source.stroke(255);
      source.fill(this.color);
      source.strokeWeight(2);
      source.circle(this.x, this.y, this.r * 2);
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x > width - this.r || this.x < this.r) {
        this.vx *= -1;
      }
      if (this.y > height - this.r || this.y < this.r) {
        this.vy *= -1;
      }
    }
  }

  class Tile {
    index: any;
    img: any;
    constructor(i: any, img: any) {
      this.index = i;
      this.img = img;
    }
  }
};

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

export const geometries = (_p5: any) => {
  let _ = _p5;
  _.setup = () => {
    _.createCanvas(710, 400, _.WEBGL);
  };

  _.draw = () => {
    if (window && window["p5DrawLoop"] !== "geometries") {
      _.noLoop();
    }
    _.background(255);
    _.translate(-200, -100, 0);
    _.normalMaterial();

    _.push();

    _.rotateZ(_.frameCount * 0.01);
    _.rotateX(_.frameCount * 0.01);
    _.rotateY(_.frameCount * 0.01);

    _.plane(70);
    _.pop();

    _.translate(200, 0, 0);
    _.push();
    _.rotateZ(_.frameCount * 0.01);
    _.rotateX(_.frameCount * 0.01);
    _.rotateY(_.frameCount * 0.01);

    _.box(70, 70, 70);
    _.pop();

    _.translate(200, 0, 0);
    _.push();
    _.rotateZ(_.frameCount * 0.01);
    _.rotateX(_.frameCount * 0.01);
    _.rotateY(_.frameCount * 0.01);
    _.cylinder(30, 10);
    _.pop();

    _.translate(-400, 200, 0);
    _.push();
    _.rotateZ(_.frameCount * 0.01);
    _.rotateX(_.frameCount * 0.01);
    _.rotateY(_.frameCount * 0.01);
    // 底r和高
    _.cone(30, 100);
    _.pop();

    _.translate(200, 0, 0);
    _.push();
    _.rotateZ(_.frameCount * 0.02);
    _.rotateX(_.frameCount * 0.01);
    _.rotateY(_.frameCount * 0.01);
    // 圆环 半径和高
    _.torus(60, 30);
    _.pop();

    _.translate(200, 0, 0);
    _.push();
    _.rotateZ(_.frameCount * 0.01);
    _.rotateX(_.frameCount * 0.01);
    _.rotateY(_.frameCount * 0.01);
    _.sphere(70);
    _.pop();
  };
};

export const sinCos3D = (_p5: any) => {
  let _ = _p5;
  _.setup = () => {
    _.createCanvas(710, 400, _.WEBGL);
  };

  // let teapot ;
  // _.preload=()=>{
  //         teapot = _.loadModel('/model/teapot.obj', true);
  // }

  _.draw = () => {
    if (window && window["p5DrawLoop"] !== "sinCos3D") {
      _.noLoop();
    }

    _.background(255);
    _.rotateY(_.frameCount * 0.01);

    for (let j = 0; j < 5; j++) {
      _.push();
      for (let i = 0; i < 100; i++) {
        _.translate(
          _.sin(_.frameCount * 0.001 + j) * 100,
          _.sin(_.frameCount * 0.001 + j) * 100,
          i * 0.1
        );
        _.rotateZ(_.frameCount * 0.002);

        _.push();
        _.sphere(8, 6, 4);
        // _.model(teapot)
        _.pop();
      }

      _.pop();
    }
  };
};

export const boxRef = (_p5: any) => {
  let _ = _p5;
  _.setup = () => {
    _.createCanvas(500, 200, _.WEBGL);
    _.normalMaterial();
  };

  let rotateNumber = 0;

  _.draw = () => {
    if (window && window["p5DrawLoop"] !== "boxRef") {
      _.noLoop();
    }
    _.background(200);
    _.orbitControl();

    _.push();
    _.translate(-20, -20);
    rotateNumber += 0.1;
    _.rotateY(rotateNumber);
    _.box(30, 50);
    _.pop();
    _.translate(30, 60);
    _.push();
    _.rotateX(rotateNumber);
    _.box(30, 50);
    _.pop();
  };
};

export const boxRef1 = (_p5: any) => {
  let _ = _p5;
  _.setup = () => {
    _.createCanvas(500, 200, _.WEBGL);
  };
  _.draw = () => {
    if (window && window["p5DrawLoop"] !== "boxRef1") {
      _.noLoop();
    }
    _.push();
    _.background(250, 0, 22);
    // _.rotateY(_.frameCount*0.0002)
    _.rotateZ(_.frameCount * 0.01);
    _.rotateY(_.frameCount * 0.01);
    _.rotateX(_.frameCount * 0.01);
    _.box(100);

    _.pop();

    // _.translate(120,0,0)
    // _.box(100)
  };
};

export const defaultFunc = (_p5: any) => {
  let _ = _p5;
  let slider: any;
  _.setup = () => {
    _.createCanvas(500, 500, _.WEBGL);
    _.fill("red");
    _.normalMaterial();

    slider = _.createSlider(0, 255, 200);
    // slider.position(10,10);
    slider.style("width", "500px");
  };
  _.draw = () => {
    if (window && window["p5DrawLoop"] !== "defaultFunc") {
      _.noLoop();
    }
    _.orbitControl();

    _.background(255);
    let val: any = slider.value();
    _.rotateZ(_.frameCount * 0.002);
    _.rotateX(_.frameCount * 0.002);
    _.rotateY(_.frameCount * 0.002);
    _.box(val);
  };
};

// 地震震级分布
export const earthQuake = (_: any) => {
  let table: any;
  let r = 200;
  let earth: any;
  const PI = _.PI;

  _.preload = () => {
    earth = _.loadImage("/note/images/earth.jpg");
    table = _.loadTable(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.csv",
      "header"
    );
  };

  _.setup = () => {
    _.createCanvas(600, 600, _.WEBGL);
    _.normalMaterial();
  };
  _.draw = () => {
    if (window && window["p5DrawLoop"] !== "earthQuake") {
      _.noLoop();
    }
    _.orbitControl();

    _.background(0);

    // Sets the default ambient and directional light.
    // The defaults are ambientLight(128, 128, 128) and
    // directionalLight(128, 128, 128, 0, 0, -1)
    _.lights();

    // _.rotateY(angle)
    // angle+=0.01;
    _.fill(200);
    _.noStroke();
    _.texture(earth);
    _.sphere(r);

    for (let row of table.rows) {
      let lat = row.getNum("latitude");
      let lon = row.getNum("longitude");
      let mag = row.getNum("mag");

      let theta = _.radians(lat);

      let phi = _.radians(lon) + PI;

      let x = r * _.cos(theta) * _.cos(phi);
      let y = -r * _.sin(theta);
      let z = -r * _.cos(theta) * _.sin(phi);

      let pos = _.createVector(x, y, z);

      let h = _.pow(10, mag);
      let maxh = _.pow(10, 7);
      h = _.map(h, 0, maxh, 10, 100);
      let xaxis = _.createVector(1, 0, 0);
      let angleb = _.abs(xaxis.angleBetween(pos));

      let raxis = xaxis.cross(pos);

      _.push();

      _.translate(x, y, z);
      // In p5.js, the rotation axis is a vector object instead of x,y,z
      _.rotate(angleb, raxis);
      _.fill(_.map(h, 0, maxh, 0, 255), 255, 255);
      _.box(_.frameCount % (h * 10), 5, 5);
      _.pop();
    }
  };
};

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
      ElMessage.success("冒泡结束");
    }
    i++;
    for (let m = 0; m < values.length; m++) {
      _.stroke(255);
      _.line(m, _.windowHeight, m, _.height - values[m]);
    }
  };

  _.mousePressed = () => { };
};

export const quickSort = (_: any) => {
  let values: any[] = [];
  let w = 10;

  let states: number[] = [];
  _.setup = () => {
    _.createCanvas(_.windowWidth, _.windowHeight);
    values = new Array(_.floor(_.width / w));
    for (let i = 0; i < values.length; i++) {
      values[i] = _.random(_.height);
      states[i] = -1;
    }
    quickSort(values, 0, values.length - 1);
  };

  _.draw = () => {
    _.background(0);

    for (let i = 0; i < values.length; i++) {
      _.noStroke();
      if (states[i] == 0) {
        _.fill("#E0777D");
      } else if (states[i] == 1) {
        _.fill("#D6FFB7");
      } else {
        _.fill(255);
      }
      _.rect(i * w, _.height - values[i], w, values[i]);
    }
  };

  async function quickSort(arr: any, start: any, end: any) {
    if (start >= end) {
      return;
    }
    let index = await partition(arr, start, end);
    states[index] = -1;

    await Promise.all([
      quickSort(arr, start, index - 1),
      quickSort(arr, index + 1, end),
    ]);
  }

  async function partition(arr: any, start: any, end: any) {
    for (let i = start; i < end; i++) {
      states[i] = 1;
    }

    let pivotValue = arr[end];
    let pivotIndex = start;
    states[pivotIndex] = 0;
    for (let i = start; i < end; i++) {
      if (arr[i] < pivotValue) {
        await swap(arr, i, pivotIndex);
        states[pivotIndex] = -1;
        pivotIndex++;
        states[pivotIndex] = 0;
      }
    }
    await swap(arr, pivotIndex, end);

    for (let i = start; i < end; i++) {
      if (i != pivotIndex) {
        states[i] = -1;
      }
    }

    return pivotIndex;
  }

  async function swap(arr: any, a: any, b: any) {
    await sleep(50);
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  function sleep(ms: any) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
};

// 视错觉
export const stepFeetIIIusion = (_: any) => {
  class Brick {
    brickColor: any;
    yPos: any;
    xPos: number;
    xSpeed: number;
    constructor(bc: any, y: any) {
      this.brickColor = bc;
      this.yPos = y;
      this.xPos = 0;
    }

    // this function creates the brick
    createBrick() {
      _.fill(this.brickColor);
      _.rect(this.xPos, this.yPos, 100, 50);
    }

    // this function sets the speed
    // of movement of the brick to 1
    setSpeed() {
      this.xSpeed = 1;
    }

    // this function sets the bricks in motion
    moveBrick() {
      this.xPos += this.xSpeed;
      if (this.xPos + 100 >= _.width || this.xPos <= 0) {
        this.xSpeed *= -1;
      }
    }
  }

  let brick1 = new Brick("white", 50);
  let brick2 = new Brick("black", 150);
  let brick3 = new Brick("#888888", 250);

  const setText = () => {
    let p = document.createElement("p");
    p.innerText = "mouseIsPressed canvas 可以隐藏栅栏";
    document.querySelector("#p5-start")?.append(p);
  };

  _.setup = () => {
    _.createCanvas(500, 300);

    setText();
  };

  brick1.setSpeed();
  brick2.setSpeed();
  brick3.setSpeed();
  _.draw = () => {
    if (window && window["p5DrawLoop"] !== "stepFeetIIIusion") {
      _.noLoop();
    }

    _.background(0);
    if (_.mouseIsPressed) {
      _.background(50);
    }
    brick1.createBrick();
    brick1.moveBrick();
    if (!_.mouseIsPressed) {
      createBars();
    }
    brick2.createBrick();
    brick2.moveBrick();
    brick3.createBrick();
    brick3.moveBrick();
  };

  function createBars() {
    let len = 12;
    for (let i = 0; i < _.width / len; i++) {
      _.fill("white");
      if (i % 2 === 0) _.rect(i * len, _.height, len, -_.height);
    }
  }
};

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

export const genFuncDemo = (_: any) => {
  function* gen() {
    let index = 1;
    while (index < 10) {
      yield index++;
      // 吐了
    }
  }

  _.setup = () => {
    _.createCanvas(500, 300);
    _.frameRate(1);
  };

  function sleep(duration: any) {
    return new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  }

  async function drawRect(len: any, duration: any) {
    // _.fill(_.random(255),_.random(255),_.random(255))
    _.rect(0, 0, len * 50, len * 50);
    await sleep(duration);
  }

  let g = gen();
  let x: any;
  x = g.next();
  _.draw = async () => {
    if (window && window["p5DrawLoop"] !== "genFuncDemo") {
      _.noLoop();
    }
    _.background(0);

    while (!x.done) {
      await drawRect(x.value, 500);
      x = g.next();
    }
    g = gen();
    _.fill(255);
    _.line();
  };
};

export const minesweeper = (_: any) => {
  let grid: any;
  const rows = 20,
    cols = 20;
  const w = 20;
  let gameIsOver = false;

  _.setup = () => {
    _.createCanvas(400, 400);
    grid = make2DArray(cols, rows);
    setup();

    let button = addButton("开始");
    button.mousePressed(() => {
      setup();
      _.noLoop();
      _.loop();
    });
  };

  const setup = () => {
    gameIsOver = false;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = new Cell(i * w, j * w, w);
      }
    }

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j].countBees(i, j);
      }
    }
  };

  _.draw = () => {
    if (window && window["p5DrawLoop"] !== "minesweeper") {
      _.noLoop();
      _.mousePressed = () => { };
    }
    _.background(255);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j].show();
      }
    }
  };

  const make2DArray = (cols: any, rows: any) => {
    const arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
    return arr;
  };

  const gameOver = () => {
    gameIsOver = true;
    let count = 0;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (grid[i][j].revealed && grid[i][j].neighborCount !== -1) {
          count += grid[i][j].neighborCount;
        }
      }
    }
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j].reveale();
      }
    }
    ElMessage.warning("你干嘛！😠" + "最终得分为" + count);
    _.noLoop();
  };

  _.mousePressed = () => {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (grid[i][j].containes(_.mouseX, _.mouseY)) {
          grid[i][j].reveale();
          if (grid[i][j].bee && !gameIsOver) {
            gameOver();
          }
        }
      }
    }
  };

  let img: any;
  _.preload = () => {
    img = _.loadImage("/note/images/logo.jpg");
  };

  class Cell {
    bee: Boolean;
    revealed: Boolean;
    x: number;
    y: number;
    w: number;
    i: number;
    j: number;
    neighborCount: number;

    constructor(x: any, y: any, w: any) {
      // 设置炸弹数量
      if (_.random(1) < 0.1) {
        this.bee = true;
      } else {
        this.bee = false;
      }

      this.revealed = false;
      // this.revealed = true;

      this.x = x;
      this.y = y;
      this.w = w;

      this.i = Math.floor(x / w);
      this.j = Math.floor(y / w);
      this.neighborCount = 0;
    }

    show() {
      _.stroke(0);
      _.noFill();
      _.rect(this.x, this.y, this.w, this.w);
      if (this.revealed) {
        if (this.bee) {
          _.stroke(0);
          _.fill(127);
          _.ellipse(this.x + this.w / 2, this.y + this.w / 2, this.w / 2);
          _.image(img, this.x, this.y, this.w, this.w);
        } else {
          _.fill(200);
          _.rect(this.x, this.y, this.w, this.w);

          if (this.neighborCount > 0) {
            _.textAlign(_.CENTER);
            _.fill(0);
            _.text(
              this.neighborCount,
              this.x + this.w / 2,
              this.y + this.w - 4
            );
          }
        }
      }
    }

    containes(x: any, y: any) {
      return (
        x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w
      );
    }

    reveale() {
      this.revealed = true;
      if (this.neighborCount === 0) {
        this.floodFill();
      }

      this.show();
    }

    floodFill() {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          let x0 = this.i + i;
          let y0 = this.j + j;
          if (x0 > -1 && x0 < cols && y0 > -1 && y0 < rows) {
            let nabor = grid[x0][y0];
            if (!nabor.bee && !nabor.revealed) nabor.reveale();
          }
        }
      }
    }

    countBees() {
      if (this.bee) {
        this.neighborCount = -1;
        return;
      }

      let total = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          let x0 = this.i + i;
          let y0 = this.j + j;
          let neighbor;
          if (x0 > -1 && x0 < cols && y0 > -1 && y0 < rows) {
            neighbor = grid[x0][y0];
            if (neighbor.bee) {
              total++;
            }
          }
        }
      }
      this.neighborCount = total;
    }
  }

  function addButton(label: any) {
    let button = _.createButton(label);
    let buttonStyle = button.elt.style;

    buttonStyle.border = "none";
    buttonStyle.marginTop = "20px";
    buttonStyle.padding = "10px";
    buttonStyle.width = "100%";
    buttonStyle.boxShadow = "1px 1px 0 0 #e0e0e0";
    buttonStyle.background = "var(--el-color-primary)";
    buttonStyle.color = "#fff";

    button.elt.addEventListener("mouseenter", function () {
      buttonStyle.opacity = "0.6";
    });
    button.elt.addEventListener("mouseleave", function () {
      buttonStyle.opacity = "1";
    });

    return button;
  }
};

//名字与功能未匹配
export const rose = (_: any) => {
  let n = 0,
    d = 0;
  _.setup = () => {
    _.createCanvas(400, 400);
    _.angleMode(_.DEGREES);
  };

  _.draw = () => {
    if (window && window["p5DrawLoop"] !== "rose") {
      _.noLoop();
    }
    _.background(0);
    _.translate(200, 200);
    _.stroke(255);

    _.noFill();
    _.beginShape();
    _.strokeWeight(1);
    for (let i = 0; i < 361; i++) {
      let k = i * d;
      let r = 150 * _.sin(n * k);
      let x = r * _.cos(k);
      let y = r * _.sin(k);
      _.vertex(x, y);
    }
    _.endShape();

    _.noFill();
    _.stroke(255, 0, 255, 255);
    _.strokeWeight(4);
    _.beginShape();

    for (let i = 0; i < 361; i++) {
      let k = i;
      let r = 150 * _.sin(n * k);
      let x = r * _.cos(k);
      let y = r * _.sin(k);
      _.vertex(x, y);
    }
    _.endShape();

    n += 0.001;
    d += 0.003;
  };
};

export const rayCast = (_: any) => {


  let p5 = window['p5'];

  class Ray {
    pos: any;
    dir: any;

    constructor(pos: any, angle: any) {
      this.pos = pos;
      this.dir = p5.Vector.fromAngle(angle);
    }

    lookAt(x: any, y: any) {
      this.dir.x = x - this.pos.x;
      this.dir.y = y - this.pos.y;
      this.dir.normalize();
    }

    show() {
      _.stroke(255);
      _.push();
      _.translate(this.pos.x, this.pos.y);
      _.line(0, 0, this.dir.x * 10, this.dir.y * 10);
      _.pop();
    }

    cast(wall: any) {
      const x1 = wall.a.x;
      const y1 = wall.a.y;
      const x2 = wall.b.x;
      const y2 = wall.b.y;

      const x3 = this.pos.x;
      const y3 = this.pos.y;
      const x4 = this.pos.x + this.dir.x;
      const y4 = this.pos.y + this.dir.y;

      const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
      if (den == 0) {
        return;
      }

      const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
      const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
      if (t > 0 && t < 1 && u > 0) {
        const pt = _.createVector();
        pt.x = x1 + t * (x2 - x1);
        pt.y = y1 + t * (y2 - y1);
        return pt;
      } else {
        return;
      }
    }


  }

  class Particle {

    pos: any;
    rays: any;
    constructor() {
      this.pos = _.createVector(_.width / 2, _.height / 2);
      this.rays = [];
      for (let a = 0; a < 360; a += 1) {
        this.rays.push(new Ray(this.pos, _.radians(a)));
      }
    }

    update(x: any, y: any) {
      this.pos.set(x, y);
    }

    look(walls: any) {
      for (let i = 0; i < this.rays.length; i++) {
        const ray = this.rays[i];
        let closest = null;
        let record = Infinity;
        for (let wall of walls) {
          const pt = ray.cast(wall);
          if (pt) {
            const d = p5.Vector.dist(this.pos, pt);
            if (d < record) {
              record = d;
              closest = pt;
            }
          }
        }
        if (closest) {
          // colorMode(HSB);
          // stroke((i + frameCount * 2) % 360, 255, 255, 50);
          _.stroke(255, 100);
          _.line(this.pos.x, this.pos.y, closest.x, closest.y);
        }
      }
    }

    show() {
      _.fill(255);
      _.ellipse(this.pos.x, this.pos.y, 4);
      for (let ray of this.rays) {
        ray.show();
      }
    }
  }

  class Boundary {
    a: any;
    b: any;
    constructor(x1: any, y1: any, x2: any, y2: any) {
      this.a = _.createVector(x1, y1);
      this.b = _.createVector(x2, y2);
    }

    show() {
      _.stroke(255);
      _.line(this.a.x, this.a.y, this.b.x, this.b.y);
    }
  }

  let walls: any = [];
  let particle: any;
  let xoff = 0;
  let yoff = 10000;
  _.setup = () => {
    _.createCanvas(_.windowWidth, _.windowHeight);
    for (let i = 0; i < 5; i++) {
      let x1 = _.random(_.width);
      let x2 = _.random(_.width);
      let y1 = _.random(_.height);
      let y2 = _.random(_.height);
      walls[i] = new Boundary(x1, y1, x2, y2);
    }
    walls.push(new Boundary(-1, -1, _.width, -1));
    walls.push(new Boundary(_.width, -1, _.width, _.height));
    walls.push(new Boundary(_.width, _.height, -1, _.height));
    walls.push(new Boundary(-1, _.height, -1, -1));
    particle = new Particle();
  };

  _.draw = () => {
    _.background(0);
    for (let wall of walls) {
      wall.show();
    }
    //particle.update(noise(xoff) * width, noise(yoff) * height);
    particle.update(_.mouseX, _.mouseY);
    particle.show();
    particle.look(walls);

    xoff += 0.01;
    yoff += 0.01;
    if (window && window["p5DrawLoop"] !== "rayCast") {
      _.noLoop();
    }


  };
};

//lorenz system
//劳伦滋混沌系统
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
    _.stroke((x < 0 ? -x : x) * 10 % 255, (y < 0 ? -y : y) * 10 % 255, (z < 0 ? -z : z) * 10 % 255);
    _.scale(10);
    _.point(x, y, z);
  }
}
//陈氏混沌
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

export const coordinate = (_p5: any) => {
  let _ = _p5;
  let p5DrawLoop = window["p5DrawLoop"];
  _.setup = () => {
    _.createCanvas(500, 200, _.WEBGL)
    _.normalMaterial()

  }
  _.draw = () => {
    _.background(250)

    _.orbitControl()
    _.rotateY(0.003 * _.PI * _.frameCount);
    _.box(100)

    if (window && window["p5DrawLoop"] !== p5DrawLoop) {
      _.noLoop()
    }
  }
  _.mousePressed = () => {
    if (isClickCanvas(_)) {
      window["p5DrawLoop"] = p5DrawLoop
      if (!(_.isLooping())) {
        _.redraw()
        _.loop()
      }
    }
  }
}

export const renderSteps = (_: any) => {
  let p5DrawLoop = window["p5DrawLoop"];
  _.setup = () => {
    _.createCanvas(500, 500, _.WEBGL)
    _.normalMaterial()

  }

  let teaBox: any;
  _.preload = () => {
    teaBox = _.loadModel('/note/model/teapot.obj', true)
  }

  _.draw = () => {
    _.background(255)


    _.orbitControl()
    _.rotateZ(_.PI)

    _.rotateX(_.frameCount * _.PI * 0.01)
    _.model(teaBox)
    if (window && window["p5DrawLoop"] !== p5DrawLoop) {
      _.redraw()
      _.noLoop()
    }
  }

  _.mousePressed = () => {
    if (isClickCanvas(_)) {
      window["p5DrawLoop"] = p5DrawLoop
      if (!(_.isLooping())) {
        _.loop()
      }
    }
  }
}

export const pointHandle = (_: any) => {
  let p5DrawLoop = window["p5DrawLoop"];
  _.setup = () => {
    _.createCanvas(500, 200, _.WEBGL)
  }

  _.draw = () => {
    _.background(255)


    _.camera(0, 0, 160 + _.sin(_.frameCount * 0.01) * 100, 0, 0, 0, 0, 1, 0)
    _.rotateX(_.PI / 3)
    _.torus(30, 10)
    if (window && window["p5DrawLoop"] !== p5DrawLoop) {
      _.noLoop()
    }
  }
  _.mousePressed = () => {
    if (isClickCanvas(_)) {
      window["p5DrawLoop"] = p5DrawLoop
      if (!(_.isLooping())) {
        _.redraw()
        _.loop()
      }
    }
  }
}

export const textureDemo = (_: any) => {
  _.setup = () => {
    _.createCanvas(500, 500, _.WEBGL)
  }

  let img: any, angle;
  _.preload = () => {
    img = _.loadImage('/note/images/logo.jpg')
  }

  _.draw = () => {
    _.background(255);
    _.orbitControl();
    angle = _.PI * _.frameCount * 0.001
    _.rotateX(angle)
    _.rotateY(angle)
    _.rotateZ(angle)
    _.texture(img)
    _.box(100)
    if (window && window["p5DrawLoop"] !== "textureDemo") {
      _.noLoop()
    }
  }
}

export const ambientLight = (_: any) => {
  let p5DrawLoop = window["p5DrawLoop"];
  let angle;
  let lightColor: any, materialColor: any;
  _.setup = () => {
    _.createCanvas(500, 500, _.WEBGL)
    lightColor = _.createColorPicker('#ffffff')
    materialColor = _.createColorPicker('#ff00ff')
    lightColor.style('margin-top', '1em')
    materialColor.style('margin-top', '1em')
  }


  _.draw = () => {
    _.background(255)
    angle = _.PI * _.frameCount * 0.001
    _.rotateX(angle)
    _.rotateY(angle)
    _.rotateZ(angle)
    _.ambientLight(lightColor.color())
    _.ambientMaterial(materialColor.color());
    _.cone(30, 70)
    _.translate(0, 0, -100)
    _.box(50)


    if (window && window["p5DrawLoop"] !== p5DrawLoop) {
      _.noLoop()
    }
  }
  _.mousePressed = () => {
    if (isClickCanvas(_)) {
      window["p5DrawLoop"] = p5DrawLoop
      if (!(_.isLooping())) {
        _.redraw()
        _.loop()
      }
    }
  }
}

export const directionalLight = (_: any) => {
  let p5DrawLoop = window["p5DrawLoop"];
  _.setup = () => {
    _.createCanvas(500, 500, _.WEBGL)
  }

  let dirX, dirY;
  _.draw = () => {
    _.background(0)

    dirX = (_.mouseX / _.width - 0.5) * 2;
    dirY = (_.mouseY / _.height - 0.5) * 2

    _.directionalLight(255, 255, 255, -dirX, -dirY, -1)
    _.noStroke()
    _.sphere(80)



    if (window && window["p5DrawLoop"] !== p5DrawLoop) {
      _.noLoop()
    }
  }
  _.mousePressed = () => {
    if (isClickCanvas(_)) {
      window["p5DrawLoop"] = p5DrawLoop
      if (!(_.isLooping())) {
        _.redraw()
        _.loop()
      }
    }
  }
}

export const pointLight = (_: any) => {
  let p5DrawLoop = window["p5DrawLoop"];
  _.setup = () => {
    _.createCanvas(500, 500, _.WEBGL)
  }


  _.draw = () => {
    _.background(0)
    let locX = _.mouseX - _.width / 2;
    let locY = _.mouseY - _.height / 2;
    _.pointLight(250, 250, 250, locX, locY, 100);
    _.noStroke();
    _.sphere(80);
    if (window && window["p5DrawLoop"] !== p5DrawLoop) {
      _.noLoop()
    }
  }
  _.mousePressed = () => {
    if (isClickCanvas(_)) {
      window["p5DrawLoop"] = p5DrawLoop
      if (!(_.isLooping())) {
        _.redraw()
        _.loop()
      }
    }
  }
}

export const spotLight = (_: any) => {
  let p5DrawLoop = window["p5DrawLoop"];
  let colorPicker: any;
  _.setup = () => {
    _.createCanvas(200, 200, _.WEBGL)
    _.noStroke()
    colorPicker = _.createColorPicker('#00ff00')
  }

  let locX, locY;
  _.draw = () => {
    _.background(0)

    locX = _.mouseX - _.width / 2;
    locY = _.mouseY - _.height / 2

    _.ambientLight(50)
    _.spotLight(colorPicker.color(), locX, locY, 200, 0, 0, -1, Math.PI / 16);
    _.sphere(80)

    if (window && window["p5DrawLoop"] !== p5DrawLoop) {
      _.noLoop()
    }
  }
  _.mousePressed = () => {
    if (isClickCanvas(_)) {
      window["p5DrawLoop"] = p5DrawLoop
      if (!(_.isLooping())) {
        _.redraw()
        _.loop()
      }
    }
  }
}

export const spring = (_: any) => {
  let springHeight = 32,
    left:any,
    right:any,
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
    _.createCanvas(600, 600);
    _.rectMode(_.CORNERS);
    _.noStroke();
    left =  _.width/2 - 100;
    right = _.width/2 +100;
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

  const updateSpring=()=>{
    if (_.mouseX > left && _.mouseX < right && _.mouseY > ps && _.mouseY < ps + springHeight) {
      over = true;
    } else {
      over = false;
    }

    if(!move){
      f = -K * (ps - R);//力
      as = f/M;//加速度
      vs = D*(vs+as);//速度
      ps = ps+vs;
    }
    if (_.abs(vs) < 0.1) {
      vs = 0.0;
    }
    if (move) {
      ps = _.mouseY - springHeight / 2;
      ps = _.constrain(ps, minHeight, maxHeight);
    } 
  }

  _.mousePressed = ()=>{
    if(over){
      move = true
    }
  }

  _.mouseReleased = ()=>{
    move = false
  }
}