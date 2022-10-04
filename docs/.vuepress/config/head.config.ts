
import { HeadConfig } from "vuepress"

const head: HeadConfig []= [
    ['link', { rel: 'icon', href: '/note/images/logo.jpg' }],
    ['script',{src:'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.min.js',defer:true}]
]

export default head;