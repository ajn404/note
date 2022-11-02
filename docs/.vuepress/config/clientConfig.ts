import "@/public/styles/index.scss"
import "@styles/index.scss"
import "element-plus/dist/index.css"
import "../public/js/p5.min.js"
import "../public/js/p5.sound.min.js"




import ElementPlus,{ElMessage} from 'element-plus'
import { defineClientConfig } from '@vuepress/client'
// console.log('%cshader!\n%ci love you','color:yellow;font-size:3em;','color:red;font-size:1.5em')

import {createPinia} from 'pinia';
export default defineClientConfig({
    enhance({ app, router, siteData }){
        app.use(createPinia());
        app.use(ElementPlus);
        // router.beforeEach(()=>{
        // })
    },
    setup(){
        return {
            ElMessage
        }
    },
    rootComponents: [
        
    ],
  })