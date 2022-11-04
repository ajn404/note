
import { HeadConfig } from "vuepress"

const head: HeadConfig []= [
    ['link', { rel: 'icon', href: '/note/images/logo.jpg' }],
    ['script',{src:'https://p5js.org/assets/js/p5.min.js?v=9299cb'}],
    ['script',{src:'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/addons/p5.sound.min.js',defer:true}]

]
//https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.min.js
//cdn的缺点是，没有网，很难受

export default head;