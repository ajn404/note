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