function assertIsNonNullish<T>(
    value:T,
    message:string
):asserts value is NonNullable<T>{
    if(value===null||value===undefined){
        throw Error(message);
    }
}

const root = document.getElementById('app');
assertIsNonNullish(root,"找不到#app的dom元素");

root.addEventListener("click",e=>{
    console.log(e);
})