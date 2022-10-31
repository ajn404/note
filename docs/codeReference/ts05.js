function createCounter() {
    var value = 0;
    return {
        increment: function () {
            value++;
        },
        get coute() {
            return value;
        }
    };
}
var couters = createCounter();
couters.increment();
couters.increment();
couters.increment();
couters.increment();
console.log(couters.coute);
//4
