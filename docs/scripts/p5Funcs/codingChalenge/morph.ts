export const morph = (_: any) => {

    let circle: any[] = [];
    let square: any[] = [];
    let morph: any[] = [];
    let state = false;
    let p5 = window['p5'];

    _.setup = () => {
        _.createCanvas(_.windowWidth - 10, _.windowHeight);
        for (let angle = 0; angle < 360; angle += 9) {
            let v = p5.Vector.fromAngle(_.radians(angle - 135));
            v.mult(350);
            circle.push(v);
            morph.push(_.createVector());
        }
        for (let x = -50; x < 50; x += 10) {
            square.push(_.createVector(x, -50));
        }
        for (let y = -50; y < 50; y += 10) {
            square.push(_.createVector(50, y));
        }
        for (let x = 50; x > -50; x -= 10) {
            square.push(_.createVector(x, 50));
        }
        for (let y = 50; y > -50; y -= 10) {
            square.push(_.createVector(-50, y));
        }
        
    }

    _.draw = () => {
        if (window && window["p5DrawLoop"] !== "morph") _.noLoop()
        _.background(255);

        let totalDistance = 0;

        {
            for (let i = 0; i < circle.length; i++) {
                let v1;
                if (state) {
                    v1 = circle[i];
                } else {
                    v1 = square[i];
                }
                let v2 = morph[i];
                v2.lerp(v1, 0.1);
                totalDistance += p5.Vector.dist(v1, v2);
            }
            if (totalDistance < 0.1) {
                state = !state;
            }
            // debugger
        }
        _.translate(_.width / 2, _.height / 2);
        _.strokeWeight(4);
        _.beginShape();
        _.noFill();
        _.stroke(0);
        
        morph.forEach(v => {
            
            _.vertex(v.x, v.y);
        });
        _.endShape(_.CLOSE);
    }
}



