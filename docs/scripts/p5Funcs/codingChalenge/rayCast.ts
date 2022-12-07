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
          let closest: any = null;
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