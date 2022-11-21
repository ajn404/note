export const sinCos3D = (_p5: any) => {
    let _ = _p5;
    _.setup = () => {
      _.createCanvas(710, 400, _.WEBGL);
    };
  
    // let teapot ;
    // _.preload=()=>{
    //         teapot = _.loadModel('/model/teapot.obj', true);
    // }
  
    _.draw = () => {
      if (window && window["p5DrawLoop"] !== "sinCos3D") {
        _.noLoop();
      }
  
      _.background(255);
      _.rotateY(_.frameCount * 0.01);
  
      for (let j = 0; j < 5; j++) {
        _.push();
        for (let i = 0; i < 100; i++) {
          _.translate(
            _.sin(_.frameCount * 0.001 + j) * 100,
            _.sin(_.frameCount * 0.001 + j) * 100,
            i * 0.1
          );
          _.rotateZ(_.frameCount * 0.002);
  
          _.push();
          _.sphere(8, 6, 4);
          // _.model(teapot)
          _.pop();
        }
  
        _.pop();
      }
    };
  };