function intersperse(array, separator) {
    var newArray = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var element = array_1[_i];
        if (newArray.length !== 0) {
            newArray.push(separator);
        }
        newArray.push(element);
    }
    return newArray;
}
var values = ["A", "B", "C", "D"];
var valueWithSeparator = intersperse(values, "X");
console.log(values);
console.log(valueWithSeparator);
