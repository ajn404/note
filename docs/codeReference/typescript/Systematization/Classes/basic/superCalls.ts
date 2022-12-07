//if you have a base class, you’ll need to call super();

class SuperBase {
    k = 4;
  }
   
  class Derived extends SuperBase {
    constructor() {
      // Prints a wrong value in ES5; throws exception in ES6
      //访问派生类的构造函数中的 "this" 前，必须调用 "super"
      console.log(this.k);
      super();
    }
  }