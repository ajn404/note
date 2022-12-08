// interface Error {
//     name: string;
//     message: string;
//     stack?: string;
// }

class NewError extends Error {
    constructor(name: string) {
        super(name)
        Object.setPrototypeOf(this,NewError.prototype);
        //this.__proto__ = NewError.prototype
    }
    sayHello() {
        return "hello" + this.message
    }
}
let x = new NewError("name");

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
