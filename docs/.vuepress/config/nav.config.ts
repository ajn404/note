import { NavbarConfig, NavbarGroup } from 'vuepress';


const practiceBaseUrl: string = '/markdown/practice/'
const practice: NavbarGroup[] = [
    {
        text: 'practice',
        children: [
            {
                text: '刚开始',
                children: [
                    {
                        text: '第一个Shader练习',
                        link: `${practiceBaseUrl}firstShader`
                    },
                    {
                        text: '鼠标绘制平面颜色',
                        link: `${practiceBaseUrl}changeColorMouse`
                    },
                    {
                        text: '时间绘制平面颜色',
                        link: `${practiceBaseUrl}changeColorTime`
                    },
                    {
                        text: 'uniforms混合颜色(渐变色)',
                        link: `${practiceBaseUrl}blendingColorUniforms`
                    },
                    {
                        text: 'varyings混合颜色(渐变色)',
                        link: `${practiceBaseUrl}blendingColorVaryings`
                    },
                    {
                        text: '旋转和缩放',
                        link: `${practiceBaseUrl}shapingFunction`
                    },
                    {
                        text: '中心旋转',
                        link: `${practiceBaseUrl}rotatingTheShape`
                    }
                ]
            },
            {
                text: 'glsl functions',
                children: [
                    {
                        text: 'clamp',
                        link: `${practiceBaseUrl}usingClamp`
                    },
                    {
                        text: 'step circle',
                        link: `${practiceBaseUrl}usingStep`,
                    },
                    {
                        text: 'step square',
                        link: `${practiceBaseUrl}stepDrawSquare`
                    },
                    {
                        text: 'step square moving',
                        link: `${practiceBaseUrl}movingSquare`
                    },
                    {
                        text: 'tiling',
                        link: `${practiceBaseUrl}usingTiling`
                    }
                ]
            }
        ]
    }
]

const exampleBaseUrl: string = '/markdown/example/'
const examples: NavbarGroup[] = [
    {
        text: 'example',
        children: [
            {
                text: 'shaderToy',
                children: [
                    {
                        text: 'chicken behind window',
                        link: `${exampleBaseUrl}lightSaberDuel`
                    },
                    {
                        text: '❄️❄️❄️❄️❄️ snow flake',
                        link: `${exampleBaseUrl}wavePrint`
                    },
                    {
                        text: 'fractal city(⚠️ gpu)',
                        link: `${exampleBaseUrl}fractalCity`
                    },
                    {
                        text: 'primitives(⚠️ gpu)',
                        link: `${exampleBaseUrl}primitives`
                    },
                    {
                        text: 'simpleTruchetPattern',
                        link: `${exampleBaseUrl}simpleTruchetPattern`
                    },
                    {
                        text: 'ed209',
                        link: `${exampleBaseUrl}ed209`
                    }
                ]
            }
        ]
    }
]

const noteBaseUrl: string = '/markdown/notes/'
const note: NavbarGroup[] = [
    {
        text: 'note',
        children: [
            {
                text: 'glsl基础注解',
                link: `${noteBaseUrl}basic`
            }, {
                text: 'js基础（ecma）',
                link: `${noteBaseUrl}js`
            }, {
                text: '命令行注释',
                link: `${noteBaseUrl}shell`
            },
            {
                text: 'example analyze',
                children: [
                    {
                        text: 'example',
                        link: `${noteBaseUrl}exampleGlslCollect`
                    },
                    {
                        text: 'practice',
                        link: `${noteBaseUrl}practiceGlslCollect`
                    }
                ]
            }
        ]
    }
]

const beforeBlog: NavbarGroup[] = [
    {
        text: 'gitpage history',
        children: [
            {
                text: 'vuepress',
                children: [
                    {
                        text: 'rengm(p5,threejs,echarts等)',
                        link: 'https://ajn404.github.io/rengm/'
                    },
                    {
                        text: '国内版rengm',
                        link: 'https://ajn404.gitee.io/rengm/'
                    },
                    {
                        text: 'ngm(前端笔记)',
                        link: 'https://ajn404.github.io/ngm.github.io/'
                    },
                    {
                        text: '国内版ngm',
                        link: 'http://ajn404.gitee.io/ngm.github.io/'
                    },
                ]
            },
            {
                text: 'hexo',
                children: [
                    {
                        text: 'md博客(学生时代)',
                        link: 'https://ajn404.github.io/log.github.io/'
                    }
                ]
            },
            {
                text: 'github home',
                link: 'https://github.com/ajn404'
            }
        ]
    }
]


const fantasticUrl: string = '/markdown/fantastic/'
const fantastic: NavbarGroup[] = [
    {
        text: 'fantastic',
        children: [
            {
                text: 'p5',
                link:`${fantasticUrl}p5`
            },
        
        ]
    }
]

const navbar: NavbarConfig =
    [
        ...practice,
        ...examples,
        ...note,
        ...fantastic
    ]

export default navbar

