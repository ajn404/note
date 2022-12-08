// interface Error {
//     name: string;
//     message: string;
//     stack?: string;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NewError = /** @class */ (function (_super) {
    __extends(NewError, _super);
    function NewError(name) {
        return _super.call(this, name) || this;
        // Object.setPrototypeOf(this,NewError.prototype);
    }
    NewError.prototype.sayHello = function () {
        return "hello" + this.message;
    };
    return NewError;
}(Error));
var x = new NewError("name");
console.log(new NewError("") instanceof NewError);
console.log(x instanceof NewError);
//false
console.log(x.sayHello());
//: x.sayHello is not a function
/**
 * you may find that:

methods may be undefined on objects returned by constructing these subclasses, so calling sayHello will result in an error.
instanceof will be broken between instances of the subclass and their instances, so (new MsgError()) instanceof MsgError will return false.
 */
