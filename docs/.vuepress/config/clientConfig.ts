import "@styles/index.scss"
import "element-plus/dist/index.css"

import ElementPlus,{ElMessage} from 'element-plus'
import { defineClientConfig } from '@vuepress/client'
// console.log('%cshader!\n%ci love you','color:yellow;font-size:3em;','color:red;font-size:1.5em')

import VueAnimXYZ from '@animxyz/vue3'
import '@animxyz/core' // Import css here if you haven't elsewhere


import {createPinia} from 'pinia';
export default defineClientConfig({
    enhance({ app, router, siteData }){
        app.use(createPinia());
        app.use(ElementPlus);
        app.use(VueAnimXYZ);

        // console.log(app,app.config.globalProperties);
        
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