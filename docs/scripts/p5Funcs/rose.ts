export const rose = (_: any) => {
    let n = 0,
        d = 0;
    _.setup = () => {
        _.createCanvas(400, 400);
        _.angleMode(_.DEGREES);
    };

    _.draw = () => {
        if (window && window["p5DrawLoop"] !== "rose") {
            _.noLoop();
        }
        _.background(0);
        _.translate(200, 200);
        _.stroke(255);

        _.noFill();
        _.beginShape();
        _.strokeWeight(1);
        for (let i = 0; i < 361; i++) {
            let k = i * d;
            let r = 150 * _.sin(n * k);
            let x = r * _.cos(k);
            let y = r * _.sin(k);
            _.vertex(x, y);
        }
        _.endShape();

        _.noFill();
        _.stroke(255, 0, 255, 255);
        _.strokeWeight(4);
        _.beginShape();

        for (let i = 0; i < 361; i++) {
            let k = i;
            let r = 150 * _.sin(n * k);
            let x = r * _.cos(k);
            let y = r * _.sin(k);
            _.vertex(x, y);
        }
        _.endShape();

        n += 0.001;
        d += 0.003;
    };
};