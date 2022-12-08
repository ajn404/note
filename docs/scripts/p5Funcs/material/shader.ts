

export const shader = (_: any) => {
    let redGreen: any;
    let orangeBlue: any;
    let showRedGreen: Boolean = false;
    _.preload = () => {
        redGreen = _.loadShader('/note/shader/shader.vert', '/note/shader/shader-gradient.frag');
        orangeBlue = _.loadShader('/note/shader/shader.vert', '/note/shader/shader-gradient.frag');
    }

    _.setup = () => {
        _.createCanvas(_.windowWidth, _.windowHeight, _.WEBGL);

        _.shader(redGreen);
        redGreen.setUniform('colorCenter', [1.0, 0.0, 0.0]);
        redGreen.setUniform('colorBackground', [0.0, 1.0, 0.0]);

        _.shader(orangeBlue);
        orangeBlue.setUniform('colorCenter', [1.0, 0.5, 0.0]);
        orangeBlue.setUniform('colorBackground', [0.226, 0.0, 0.615]);
        _.noStroke();
    }

    _.draw = () => {
        if (window && window["p5DrawLoop"] !== "shader") _.noLoop()
        _.background(250);

        orangeBlue.setUniform('offset', [0, _.sin(_.millis() / 2000) + 1]);
        redGreen.setUniform('offset', [_.sin(_.millis() / 2000), 1]);

        if (showRedGreen === true) {
            _.shader(redGreen);
        } else {
            _.shader(orangeBlue);
        }
        _.quad(-1, -1, 1, -1, 1, 1, -1, 1);
    }

    _.mouseClicked = () => {
        showRedGreen = !showRedGreen
    }
}