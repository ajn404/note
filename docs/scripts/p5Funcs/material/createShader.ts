//@ts-nocheck
import fs from '@shaders/shaderInP5/createShader/fr.glsl'
import vs from '@shaders/shaderInP5/createShader/vs.glsl'

export const createShader = (_: any) => {
    let mandel;
    _.setup = () => {
        _.createCanvas(_.windowWidth, _.windowHeight, _.WEBGL);

        mandel = _.createShader(vs, fs);
        _.shader(mandel);
        _.noStroke();

        mandel.setUniform('p', [-0.74364388703, 0.13182590421]);
    }

    _.draw = () => {
        if (window && window["p5DrawLoop"] !== "createShader") _.noLoop()

        mandel.setUniform('r', 1.5 * _.exp(-6.5 * (1 + _.sin(_.millis() / 2000))));
        _.quad(-1, -1, 1, -1, 1, 1, -1, 1);
    }
}