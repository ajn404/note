var pairConst = [111, "name"];
// pairConst[0] = 9999;
// 无法为“0”赋值，因为它是只读属性
function firstCharAndSizeAsConst(input) {
    return [input[0], input.length];
}
var _a = firstCharAndSizeAsConst("hello"), first = _a[0], size = _a[1];
console.log(first, size);
first = "g";
