import { NavbarConfig, NavbarGroup } from 'vuepress';
import { allMethods } from "../../scripts/p5Funcs/p5FantasticMethod";
import { kaboom } from "../../scripts/kaboomStartFunc/index"
const practiceBaseUrl: string = '/markdown/practice/'
const glslBaseUrl: string = '/markdown/example/'
const noteBaseUrl: string = '/markdown/notes/'
const fantasticUrl: string = '/markdown/fantastic/'
const vtkBasiceUrl = '/markdown/vtk/'

const p5SinglePageUrl: string = '/markdown/fantasticSinglePage/'
const p5SinglePageList: any[] = [];
allMethods.forEach(item => {
    if (item.children) {
        item.children.forEach(child => {
            if (!child.notSinglePage) {
                p5SinglePageList.push({
                    text: child.label,
                    value: child.value
                })
            }
        })
    }
})
const p5SingleNavPageList = [];
for (let i = 0; i < p5SinglePageList.length; i++) {
    p5SingleNavPageList.push({
        text: p5SinglePageList[i].text,
        link: `${p5SinglePageUrl}${p5SinglePageList[i].value}`
    })
}
const examples: NavbarGroup[] = [
    {
        text: 'glsl',
        children: [
            {
                text: 'shaderToy',
                children: [
                    {
                        text: 'chicken behind window',
                        link: `${glslBaseUrl}lightSaberDuel`
                    },
                    {
                        text: '❄️❄️❄️❄️❄️ snow flake',
                        link: `${glslBaseUrl}wavePrint`
                    },
                    {
                        text: 'fractal city(⚠️ gpu)',
                        link: `${glslBaseUrl}fractalCity`
                    },
                    {
                        text: 'primitives(⚠️ gpu)',
                        link: `${glslBaseUrl}primitives`
                    },
                    {
                        text: 'simpleTruchetPattern',
                        link: `${glslBaseUrl}simpleTruchetPattern`
                    },
                    {
                        text: 'ed209',
                        link: `${glslBaseUrl}ed209`
                    },
                    // {
                    //     text: 'indecial',
                    //     link: `${glslBaseUrl}indecial`
                    // },
                ]
            },
            {
                text: 'practice glsl',
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
                    },
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
                    },
                    {
                        text: 'neoB',
                        link: `${practiceBaseUrl}neoB`
                    }
                ]
            },

        ]
    },

]
const note: NavbarGroup[] = [
    {
        text: 'note',
        children: [
            {
                text: 'js',
                link: `${noteBaseUrl}js`
            },
            {
                text: 'ts',
                link: `${noteBaseUrl}ts`
            },
            {
                text: 'glsl',
                link: `${noteBaseUrl}glsl`
            },
            {
                text: 'shell',
                link: `${noteBaseUrl}shell`
            },
            {
                text: 'leetcode',
                link: `${noteBaseUrl}leetcode`
            },
            {
                text: 'rust',
                link: `${noteBaseUrl}rust`
            },
            {
                text: 'anime XYZ',
                link: `${noteBaseUrl}animeXYZ`
            },
            
            {
                text: 'extends',
                link: `${noteBaseUrl}extends`
            },

            {
                text: 'capture',
                link: `${noteBaseUrl}capture`
            },

            {
                text: 'yuyan',
                link: `${noteBaseUrl}yuyan`
            },
            

            {
                text: 'glsl demo',
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
const fantastic: NavbarGroup[] = [
    {
        text: 'fantastic',
        children: [
            {
                text: 'p5 api',
                link: `${noteBaseUrl}p5`
            },
            {
                text: 'p5 select',
                link: `${fantasticUrl}p5`
            },
            {
                text: 'p5 single',
                children: [
                    ...p5SingleNavPageList
                ]
            },
            kaboom
        ]
    }
]
const threeDemo: NavbarGroup[] = [
    {
        text: 'three&glsl',
        children: [
            {
                text: 'three',
                children: [
                    {
                        text: 'threeLoadModel',
                        link: `${fantasticUrl}threeLoadModel`
                    }
                ]
            },

            ...examples[0].children
        ]
    }
]

const vtkDemo :NavbarGroup[] = [
    {
        text: 'vtk',
        children: [
            {
                text: 'pdr reader',
                link: `${fantasticUrl}vtkDemo`
            },
            {
                text: 'vtk load obj model',
                link: `${fantasticUrl}vtkLoadModel`
            },
            {
                text: 'vtk viewer',
                link: `${vtkBasiceUrl}geometryViewer`
            },
            {
                text: 'vtk viewer diskout',
                link: `${vtkBasiceUrl}viewerUrl`
            }
        ]
    },
]

const navbar: NavbarConfig =
    [
        ...note,
        ...fantastic,
        ...threeDemo,
        ...vtkDemo,
        ...beforeBlog
    ]
export default navbar

