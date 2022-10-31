function createCounter(){
    let value= 0 ;
    return {
        increment(){
            value++;
        },
        get coute(){
            return value
        }
    }
}

const couters = createCounter();

couters.increment();
couters.increment();
couters.increment();
couters.increment();

console.log(couters.coute);