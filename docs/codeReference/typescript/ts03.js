function assertIsNonNullish(value, message) {
    if (value === null || value === undefined) {
        throw Error(message);
    }
}
var root = document.getElementById('app');
assertIsNonNullish(root, "找不到#app的dom元素");
root.addEventListener("click", function (e) {
    console.log(e);
});
