
import { HeadConfig } from "vuepress"

const head: HeadConfig []= [
    ['link', { rel: 'icon', href: '/note/images/logo.jpg' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@animxyz/core' }],
    ['script',{src:'https://p5js.org/assets/js/p5.min.js?v=9299cb',defer:true}],
    ['script',{src:'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.min.js',defer:true}],
    // ['script',{src:'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/addons/p5.sound.min.js',defer:true}]

]
export default head;