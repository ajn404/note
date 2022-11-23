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
    console.log("你干嘛！😠" + "最终得分为" + count);
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


export { ambientLight } from './p5Funcs/ambientLight'; //环境光
export { chenShiSystem } from './p5Funcs/chenShiSystem'; //陈氏混沌
export { coordinate } from './p5Funcs/coordinate'; //极坐标使用
export { delaySound } from './p5Funcs/delaySound'; //webrtc p5.sound
export { diaona } from './p5Funcs/diaona'; //迪奥娜
export { directionalLight } from './p5Funcs/directionalLight'; //平行光
export { geometries } from './p5Funcs/geometries'; //基本3D模型
export { hypercube4D } from './p5Funcs/hypercube4D'; //四维立方
export { lorenzSystem } from './p5Funcs/lorenzSystem'; //劳伦滋混沌系统
export { pointHandle } from './p5Funcs/pointHandle'; //torus圆环
export { pointLight } from './p5Funcs/pointLight'; //点光源
export { polarCoordinates } from './p5Funcs/polarCoordinates'; //极坐标绘制功夫圆
export { rayCast } from './p5Funcs/rayCast'; //光线投射
export { renderSteps } from './p5Funcs/renderSteps'; //茶壶
export { rose } from './p5Funcs/rose'; //旋转的浪漫
export { sinCos3D } from './p5Funcs/sinCos3D'; //sin cos 应用
export { spotLight } from './p5Funcs/spotLight'; //聚光灯
export { spring } from './p5Funcs/spring'; //弹簧，简单物理引擎
export { stepFeetIIIusion } from './p5Funcs/stepFeetIIIusion'; // 视错觉
export { textureDemo } from './p5Funcs/textureDemo'; //坤坤材质
export { textureGeometries } from './p5Funcs/textureGeometries'; //play
export { waveFunctionCollapse } from "./p5Funcs/waveFunctionCollapse"; //波函数坍塌

