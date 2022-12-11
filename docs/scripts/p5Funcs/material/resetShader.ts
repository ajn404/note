//@ts-nocheck
import fs from '@shaders/shaderInP5/resetShader/fr.glsl'
import vs from '@shaders/shaderInP5/resetShader/vs.glsl'


export const resetShader = (_: any) => {

    let shaderProgram;

    _.setup = () => {
        _.createCanvas(_.windowWidth, _.windowHeight, _.WEBGL);
        shaderProgram = _.createShader(vs, fs);
    }

    _.draw = () => {
        if (window && window["p5DrawLoop"] !== "resetShader") _.noLoop()
        _.background(200)

        _.shader(shaderProgram);
        _.push();
        _.translate(-_.width / 4, -_.height/4, 0);
        _.rotateX(_.millis() * 0.00025);
        _.rotateY(_.millis() * 0.0005);
        _.box(_.width / 7);
        _.pop();

        _.resetShader()
        _.fill('red')
        _.push();
        _.translate(-_.width / 4, _.height/4, 0);
        _.rotateX(_.millis() * 0.0005);
        _.rotateY(_.millis() * 0.0005);
        _.box(_.width / 7);
        _.pop();

        _.shader(shaderProgram)
        _.push();
        _.translate(_.width / 5, -_.height/4, 0);
        _.rotateX(_.millis() * 0.00075);
        _.rotateY(_.millis() * 0.0005);
        _.box(_.width / 7);
        _.pop();


        _.resetShader()
        _.fill('rgba(65,54,33,.6)')
        _.push();
        _.translate(_.width / 5, _.height/4, 0);
        _.rotateX(_.millis() * 0.001);
        _.rotateY(_.millis() * 0.0005);
        _.box(_.width / 7);
        _.pop();


    }
}