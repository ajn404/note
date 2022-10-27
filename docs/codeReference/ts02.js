function assertIsNumber(value, name) {
    if (typeof value !== "number") {
        throw Error("Expect \"".concat(name, "\" to be a number"));
    }
}
function range(from, to) {
    assertIsNumber(to, 'to');
    assertIsNumber(from, 'from');
    var values = [];
    for (var i = from; i < to; i++) {
        values.push(i);
    }
    return values;
}
console.log(range("A", "F"));
