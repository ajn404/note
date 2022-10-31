function serializeJSON(value, options) {
    var _a, _b;
    var indent = (_b = (_a = options === null || options === void 0 ? void 0 : options.formatting) === null || _a === void 0 ? void 0 : _a.indent) !== null && _b !== void 0 ? _b : 2;
    return JSON.stringify(value, null, indent);
}
var user = {
    name: "ajn404 n-gray-moon",
    bilibili: '狗粮长'
};
var json = serializeJSON(user, {
    formatting: {
        indent: 0
    }
});
console.log(json);
