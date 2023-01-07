export const brightnessMirror = (_p5: any) => {
  let _ = _p5;
  let video:any;

  let width = _.windowWidth / 2 - 100;
  let height = _.windowHeight / 2 - 100;
  _.setup = () => {
    _.createCanvas(width, height);
    // video = _.createCapture(_.VIDEO);
    // video.size(width, height);
    // _.pixelDensity(1);
  };

  _.preload=()=> {
    video = _.createCapture(_.VIDEO, () => {
      video.size(width,height);
      video.hide();
    });
  }

  _.draw = () => {
    _.background(51);
    // _.loadPixels();
    // for (let y = 0; y < height; y++) {
    //   for (let x = 0; x < width; x++) {
    //     let index = (x + (y * _.width)) * 4;
    //     _.pixels[index + 0] = video.pixels[index + 0];
    //     _.pixels[index + 1] = video.pixels[index + 1];
    //     _.pixels[index + 2] = video.pixels[index + 2];
    //     _.pixels[index + 3] = 255;
    //   }
    // }
    // _.updatePixels();
    _.image(video,0,0, width, height, 0, 0, video.width, video.height, _.CONTAIN)
    if (window && window["p5DrawLoop"] !== "brightnessMirror") {
      _.noLoop();
    }

  };
};