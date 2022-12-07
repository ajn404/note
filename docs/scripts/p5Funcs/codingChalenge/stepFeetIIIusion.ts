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