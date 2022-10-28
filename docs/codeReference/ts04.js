var Counter = /** @class */ (function () {
    function Counter() {
        this._value = 0;
    }
    Counter.prototype.increment = function () {
        this._value += 1;
    };
    Object.defineProperty(Counter.prototype, "count", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return Counter;
}());
var couter = new Counter();
couter.increment();
couter.increment();
couter.increment();
console.log(couter.count);
