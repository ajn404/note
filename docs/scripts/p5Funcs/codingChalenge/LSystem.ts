export const LSystem = (_p5: any) => {
    interface rule {
      a: any;
      b: any;
    }
  
    let p5 = _p5;
    let angle = p5.radians(20);
    let axiom = "F";
    let sentence = axiom;
    let len = 100;
    let rules: rule[] = [];
    let num = 0;
    rules[0] = {
      a: "F",
      b: "FF+[+F-F-F]-[-F+F+F]",
    };
    // "F" p5.line(0, 0, 0, -len); p5.translate(0, -len);
    // "+" p5.rotate(angle);
    // "-" p5.rotate(-angle);
    // "[" p5.push();
    // "]" p5.pop();
  
    function generate(canGene: any) {
      if (num < 4 || canGene) {
        num++;
        len *= 0.5;
        let nextSentence = "";
        for (let i = 0; i < sentence.length; i++) {
          let current = sentence.charAt(i);
          let found = false;
          for (let j = 0; j < rules.length; j++) {
            if (current == rules[j].a) {
              found = true;
              nextSentence += rules[j].b;
              break;
            }
          }
          if (!found) {
            nextSentence += current;
          }
        }
        sentence = nextSentence;
        turtle();
      } else {
        console.log("哒咩哒咩");
        if (num === 4) {
          let button = addButton("继续生成");
          button.mousePressed(generate(true));
        }
      }
    }
  
    function turtle() {
      p5.background(255);
      p5.resetMatrix();
      p5.translate(200, 400);
      for (let i = 0; i < sentence.length; i++) {
        let current = sentence.charAt(i);
        p5.stroke(
          Math.floor(255 * Math.random()),
          Math.floor(255 * Math.random()),
          Math.floor(255 * Math.random())
        );
        if (current == "F") {
          p5.line(0, 0, 0, -len);
          p5.translate(0, -len);
        } else if (current == "+") {
          p5.rotate(angle);
        } else if (current == "-") {
          p5.rotate(-angle);
        } else if (current == "[") {
          p5.push();
        } else if (current == "]") {
          p5.pop();
        }
      }
    }
  
    function addButton(label: any) {
      let button = p5.createButton(label);
      let buttonStyle = button.elt.style;
  
      buttonStyle.border = "none";
      buttonStyle.marginTop = "20px";
      buttonStyle.padding = "10px";
      buttonStyle.width = "100%";
      buttonStyle.boxShadow = "1px 1px 0 0 #e0e0e0";
      buttonStyle.background = "var(--el-color-primary)";
      buttonStyle.color = "#fff";
  
      button.elt.addEventListener("mouseenter", function () {
        buttonStyle.opacity = "0.6";
      });
      button.elt.addEventListener("mouseleave", function () {
        buttonStyle.opacity = "1";
      });
  
      return button;
    }
  
    p5.setup = () => {
      p5.createCanvas(400, 400);
      p5.background("#fff");
      turtle();
      let button = addButton("click me 持续生成");
      button.mousePressed(generate);
    };
  };