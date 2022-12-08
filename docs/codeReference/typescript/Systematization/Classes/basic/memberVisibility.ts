//protected
class MVGreeter {
    public greet() {
        console.log("Hello, " + this.getName());
    }
    protected getName() {
        return "hi";
    }
}

class SpecialMVGreeter extends MVGreeter {
    public howdy() {
        // OK to access protected member here
        console.log("Howdy, " + this.getName());
    }
}
const g = new SpecialMVGreeter();
g.greet(); // OK

/**Property 'getName' is protected and only accessible within class 'MVGreeter' and its subclasses.ts(2445) */
g.getName();