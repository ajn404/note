function swap(tuple) {
    var first = tuple[0], second = tuple[1];
    return [second, first];
}
var keyValuePair = [1, "one"];
var valueKeyPair = swap(keyValuePair);
console.log(keyValuePair);
console.log(valueKeyPair);
