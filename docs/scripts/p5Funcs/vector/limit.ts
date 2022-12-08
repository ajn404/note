import { drawArrow } from '../common'


export const limit = (_: any) => {
    _.setup = () => {
        _.createCanvas(_.windowWidth, _.windowHeight);
    }

    _.draw = () => {
        if (window && window["p5DrawLoop"] !== "limit") _.noLoop()

        _.background(250);

        let v0x = _.width / 2;
        let v0y = _.height / 2;

        let v0 = _.createVector(v0x, v0y);
        let v1 = _.createVector(_.mouseX - v0x, _.mouseY - v0y);

        drawArrow(_, v0, v1, 'red');
        drawArrow(_, v0, v1.limit(100), 'blue');

        _.noFill();
        _.ellipse(v0x, v0y, 100 * 2);
    }
}