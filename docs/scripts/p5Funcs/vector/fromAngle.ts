export const fromAngle = (_:any)=>{
    const p5 = window['p5'];
 
    _.setup = () => {
        _.createCanvas(_.windowWidth, _.windowHeight);
    }

    _.draw = ()=>{
        if (window && window["p5DrawLoop"] !== "fromAngle") _.noLoop()
        _.background(255);
        _.noStroke();
        _.fill(0);
        // _.text('i can change', 5, 15);

        let myDegrees = _.map(_.mouseX, 0, _.width, 0, 360);

        let line = _.width/4
        let v = p5.Vector.fromAngle(_.radians(myDegrees), line);
        let vx = v.x;
        let vy = v.y;

        let readout = 'angle = ' + _.nfc(myDegrees, 1) + '\xB0';

        _.text(`${readout}`, 5, 15);

        _.push();
        _.translate(_.width / 2, _.height / 2);
        _.noFill();
        _.stroke(0);
        _.line(0, 0, line, 0);
        _.stroke(0);
        _.line(0, 0, vx, vy);
        _.pop();

    }   


}