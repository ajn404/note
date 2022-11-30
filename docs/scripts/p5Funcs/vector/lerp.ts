
export const lerp = (_: any) => {

    
    let p5 = window['p5'];

    _.setup = () => {
        _.createCanvas(_.windowWidth-200, _.windowHeight-200);
    }

    let step = 0.01;
    let amount = 0;

    _.draw = () => {
        if (window && window["p5DrawLoop"] !== "lerp") _.noLoop()
        _.background(0);
        let v0 = _.createVector(0, 0);
        let v1 = _.createVector(_.mouseX, _.mouseY);
        drawArrow(v0, v1, 'red');

        let v2 = _.createVector(3*_.width/4,_.height/2);
        drawArrow(v0,v2,'blue');

        if(amount<0||amount>1){
            step*=-1;
        }

        amount+=step;
        let v3 = p5.Vector.lerp(v1,v2,amount);
        let color = _.color(
            _.random(255),
            255,
            _.random(255),
            255
          );
        drawArrow(v0,v3,color);
    }

    const drawArrow = (base:any, vec:any, myColor:any) =>{
        _.push();
        _.stroke(myColor);
        _.strokeWeight(3);
        _.fill(myColor);
        _.translate(base.x, base.y);
        _.line(0, 0, vec.x, vec.y);
        _.rotate(vec.heading());
        let arrowSize = 20;
        _.translate(vec.mag() - arrowSize, 0);
        _.triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
        _.pop();
      }
}



