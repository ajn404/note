import {defineStore} from 'pinia';
export const useGlobal = defineStore('codeStore',{
    state:()=>({
        globalCode:'',
        showIframe:false,   
        userSelect:true,
    }),
    getters:{
        filteredCode:(state:any)=> {
            return state.globalCode?.replace(/console\.log/g, 'console\.reWriteLog')
        },
        getShowIframe:(state:any)=>{
            return state.showIframe
        }
    },
    actions:{
        changeIfram(status:Boolean){
            this.showIfram = status
        }
    }
})