
import { HeadConfig } from "vuepress"

const head: HeadConfig []= [
    ['link', { rel: 'icon', href: '/note/images/logo.jpg' }],
    // ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@animxyz/core' }],
    ['link',{rel: 'stylesheet', href:'/note/data/asciinema-player.css'}],
    // ['script',{src:'https://p5js.org/assets/js/p5.min.js?v=9299cb',defer:true}],
    // ['script',{src:'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.min.js',defer:true}],
    ['script',{src:'/note/p5.min.js'}],
    ['script',{src:'/note/data/asciinema-player.min.js'}],
]
export default head;