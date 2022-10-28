class Counter {
    private _value = 0;
    increment(){
        this._value+=1;
    }

    get count(){
        return this._value
    }
}

const couter = new Counter();
couter.increment();
couter.increment();
couter.increment();

console.log(couter.count);