/**
 * A derived class can also override a base class field or property. You can use the super. syntax to access base class methods. Note that because JavaScript classes are a simple lookup object, there is no notion of a “super field”.
 */

class Base {
    greet() {
        console.log("Hello, world!");
    }
}

class overDerived extends Base {
    greet(name?: string) {
        // if (name === undefined) {
        //     super.greet();
        // } else {
        //'name' is possibly 'undefined'
        console.log(`Hello, ${name.toUpperCase()}`);
        // }
    }
}
const d3 = new overDerived();
d3.greet();
d3.greet("reader");

// Alias the derived instance through a base class reference
const b3: Base = d3;
// Crashes because "name" will be undefined
b3.greet();