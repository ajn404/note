import {defineStore} from 'pinia';
export const useGlobalCode = defineStore('codeStore',{
    state:()=>({
        globalCode:''
    }),
    getters:{
        filteredCode:(state:any)=> {
            return state.globalCode?.replace(/console\.log/g, 'console\.reWriteLog')
        }
    }
})