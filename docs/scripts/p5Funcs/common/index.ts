export const drawArrow = (_: any, base: any, vec: any, myColor: any) => {
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