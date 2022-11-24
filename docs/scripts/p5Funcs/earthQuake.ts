export const earthQuake = (_: any) => {
    let table: any;
    let r = 200;
    let earth: any;
    const PI = _.PI;
  
    _.preload = () => {
      earth = _.loadImage("/note/images/earth.jpg");
      table = _.loadTable(
        "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.csv",
        "header"
      );
    };
  
    _.setup = () => {
      _.createCanvas(600, 600, _.WEBGL);
      _.normalMaterial();
    };
    _.draw = () => {
      if (window && window["p5DrawLoop"] !== "earthQuake") {
        _.noLoop();
      }
      _.orbitControl();
  
      _.background(0);
  
      // Sets the default ambient and directional light.
      // The defaults are ambientLight(128, 128, 128) and
      // directionalLight(128, 128, 128, 0, 0, -1)
      _.lights();
  
      // _.rotateY(angle)
      // angle+=0.01;
      _.fill(200);
      _.noStroke();
      _.texture(earth);
      _.sphere(r);
  
      for (let row of table.rows) {
        let lat = row.getNum("latitude");
        let lon = row.getNum("longitude");
        let mag = row.getNum("mag");
  
        let theta = _.radians(lat);
  
        let phi = _.radians(lon) + PI;
  
        let x = r * _.cos(theta) * _.cos(phi);
        let y = -r * _.sin(theta);
        let z = -r * _.cos(theta) * _.sin(phi);
  
        let pos = _.createVector(x, y, z);
  
        let h = _.pow(10, mag);
        let maxh = _.pow(10, 7);
        h = _.map(h, 0, maxh, 10, 100);
        let xaxis = _.createVector(1, 0, 0);
        let angleb = _.abs(xaxis.angleBetween(pos));
  
        let raxis = xaxis.cross(pos);
  
        _.push();
  
        _.translate(x, y, z);
        // In p5.js, the rotation axis is a vector object instead of x,y,z
        _.rotate(angleb, raxis);
        _.fill(_.map(h, 0, maxh, 0, 255), 255, 255);
        _.box(_.frameCount % (h * 10), 5, 5);
        _.pop();
      }
    };
  };