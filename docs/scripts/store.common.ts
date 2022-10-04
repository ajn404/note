import {defineStore} from 'pinia';
export const useGlobalCode = defineStore('codeStore',{
    state:()=>({
        globalCode:''
    }),
    getters:{
        filteredCode:(state:any)=> state.globalCode.replaceAll('console\.log', 'console\.reWriteLog')
    }
})