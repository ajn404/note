
import {drawArrow} from '../common'

export const lerp = (_: any) => {

    
    let p5 = window['p5'];

    _.setup = () => {
        _.createCanvas(_.windowWidth, _.windowHeight);
    }

    let step = 0.01;
    let amount = 0;

    _.draw = () => {
        if (window && window["p5DrawLoop"] !== "lerp") _.noLoop()
        _.background(0);
        let v0 = _.createVector(0, 0);
        let v1 = _.createVector(_.mouseX, _.mouseY);
        drawArrow(_,v0, v1, 'red');

        let v2 = _.createVector(3*_.width/4,_.height/2);
        drawArrow(_,v0,v2,'blue');

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
        drawArrow(_,v0,v3,color);
    }
}



