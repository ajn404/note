/**
 * 
 * A derived class has all the properties and methods of its base class, and also define additional members.
 */

class ExtendAnimal {
    move() {
      console.log("Moving along!");
    }
  }
   
  class EDog extends ExtendAnimal {
    woof(times: number) {
      for (let i = 0; i < times; i++) {
        console.log("woof!");
      }
    }
  }
   
  const d = new EDog();
  // Base class method
  d.move();
  // Derived class method
  d.woof(3);