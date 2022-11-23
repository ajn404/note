export const allMethods = [
  {
    label: "基础", children: [
      {label: '默认', value:"defaultFunc"},
      {label: '坐标', value:"coordinate"},
      {label: '茶壶', value:'renderSteps'},
      {label: '迪奥娜', value:'diaona'},
      {label: '圆环', value:'pointHandle'},
      {label: 'texture', value:'textureDemo'},
      {label: 'ambientLight', value:'ambientLight'},
      {label: 'directionalLight', value:'directionalLight',},
      {label: 'pointLight', value:'pointLight'},
      {label: 'spotLight', value:'spotLight'}
    ]
  },
  {
    label: "processing",
    children: [
      {value: "main", label: "两根分裂的线段",},
      {value: "LSystem", label: "LSystem",},
      {value: "angularMotion", label: "angularMotion",},
      {value: "polarCoordinates", label: "polarCoordinates",},
      {value: "stepFeetIIIusion", label: "视错觉",},
      {value: "rose", label: "旋转玫瑰"},
      {value: "rayCast", label: "射线投影[fullscreen]"
      }
    ],
  },
  {
    label: "game like",
    children: [
      { label: "移动拼图", value: "slidePuzzle", },
      { label: "ikun [true man's game]", value: "minesweeper" },
      { label: '弹簧', value: 'spring' },
      { label: '波函数坍塌生成随机地图', value: 'waveFunctionCollapse' },
    ],
  },
  {
    label: "webgl",
    children: [
      {label: "geometries[basic]", value:"geometries",},
      {label: "3D基本图形添加材质", value:"textureGeometries",},
      {label: "3D sin cos应用", value:"sinCos3D",},
      { label: "实时震级可视化", value: "earthQuake" },
      {label: '劳伦兹混沌[fullscreen]', value: 'lorenzSystem'},
      {label: '陈氏混沌[fullscreen]', value: 'chenShiSystem'},
      {label: 'hypercube4D', value: 'hypercube4D'},
    ],
  },
  {
    label: "熟悉api",
    children: [
      {label: "3d box", value:"boxRef",notSinglePage: true,},
      {label: "3d box 旋转", value:"boxRef1",notSinglePage: true,},
      {value: "gridOutput", label: "输出为grid",},
      {value: 'easing', label: 'easing'},
      {value: 'delaySound', label: 'p5 sound delay',sound: true,}
    ],
  },
  {
    label: "算法可视",
    children: [
      {label: "冒泡排序[fullscreen]", value:"bubbleSort",},
      {label: "快速排序[fullscreen]", value:"quickSort",},
    ],
  },
];