
import { HeadConfig } from "vuepress"

const head: HeadConfig []= [
    ['link', { rel: 'icon', href: '/note/images/logo.webp' }],
    ['link',{rel: 'stylesheet', href:'/note/data/asciinema-player.css'}],
    ['script',{src:'/note/headerScript/p5.min.js'}],
    ['script',{src:'/note/data/asciinema-player.min.js'}],
    ['script',{src:'/note/headerScript/vtk.js',defer:true,async:true}],
]
export default head;