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