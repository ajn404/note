export const textureGeometries = (_p5: any) => {
    let _ = _p5;
    _.setup = () => {
      _.createCanvas(_.windowWidth, _.windowHeight, _.WEBGL);
    };

    let img: any;
    _.preload = () => {
      img = _.loadImage('/note/images/hutao/hutao1.png')
    }
  
    _.draw = () => {
      if (window && window["p5DrawLoop"] !== "textureGeometries") {
        _.noLoop();
      }
      _.background(255);
      _.translate(-200, -100, 0);
    //   _.normalMaterial();
      _.texture(img)

  
      _.push();
  
      _.rotateZ(_.frameCount * 0.01);
      _.rotateX(_.frameCount * 0.01);
      _.rotateY(_.frameCount * 0.01);
  
      _.plane(70);
      _.pop();
  
      _.translate(200, 0, 0);
      _.push();
      _.rotateZ(_.frameCount * 0.01);
      _.rotateX(_.frameCount * 0.01);
      _.rotateY(_.frameCount * 0.01);
  
      _.box(70, 70, 70);
      _.pop();
  
      _.translate(200, 0, 0);
      _.push();
      _.rotateZ(_.frameCount * 0.01);
      _.rotateX(_.frameCount * 0.01);
      _.rotateY(_.frameCount * 0.01);
      _.cylinder(30, 10);
      _.pop();
  
      _.translate(-400, 200, 0);
      _.push();
      _.rotateZ(_.frameCount * 0.01);
      _.rotateX(_.frameCount * 0.01);
      _.rotateY(_.frameCount * 0.01);
      // 底r和高
      _.cone(30, 100);
      _.pop();
  
      _.translate(200, 0, 0);
      _.push();
      _.rotateZ(_.frameCount * 0.02);
      _.rotateX(_.frameCount * 0.01);
      _.rotateY(_.frameCount * 0.01);
      // 圆环 半径和高
      _.torus(60, 30);
      _.pop();
  
      _.translate(200, 0, 0);
      _.push();
      _.rotateZ(_.frameCount * 0.01);
      _.rotateX(_.frameCount * 0.01);
      _.rotateY(_.frameCount * 0.01);
      _.sphere(70);
      _.pop();
    };
  };