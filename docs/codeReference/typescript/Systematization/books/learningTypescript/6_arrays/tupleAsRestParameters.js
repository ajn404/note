var logPair = function (name, value) {
    console.log("".concat(name, " has ").concat(value));
};
logPair("name", 1);
var pairArray = ["name", 1];
logPair.apply(void 0, pairArray);
