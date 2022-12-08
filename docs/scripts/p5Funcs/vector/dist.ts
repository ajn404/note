import {drawArrow} from '../common'


export const dist = (_:any)=>{
    _.setup = ()=>{
        _.createCanvas(_.windowWidth,_.windowHeight);
    }

    _.draw = ()=>{
        if (window && window["p5DrawLoop"] !== "dist") _.noLoop()

        _.background(250);
        let v0 = _.createVector(0,0);
        let v1 = _.createVector(_.mouseX,_.mouseY);
        let v2 = _.createVector(_.mouseY,_.mouseX);

        _.stroke('purple'); // Change the color
        _.strokeWeight(20);
        _.point(v0.x,v0.y);
        _.point(v1.x,v1.y);
        _.stroke('pink');
        _.point(v2.x,v2.y);
        _.stroke(0);
        _.strokeWeight(1);
        _.text('v1',v1.x+20,v1.y+20)
        _.text('v2',v2.x+20,v2.y+20)
        drawArrow(_,v0,v1,'red');
        drawArrow(_,v0,v2,'rgba(255,255,0,1)');
        _.text('v1距离原点:'+v0.dist(v1), 10, 50, 95, 50);
        _.text('v2距离原点:'+v0.dist(v2), 10, 70, 95, 50);
        _.text('v1距离v2:'+v1.dist(v2), 10, 90, 95, 50);

        
    }
}