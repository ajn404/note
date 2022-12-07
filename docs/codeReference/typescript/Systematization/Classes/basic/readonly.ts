class ReadonlyGreeter {
    readonly name: string = "world";

    constructor(otherName?: string) {
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }

    err() {
        //无法分配到 "name" ，因为它是只读属性。
        this.name = "not ok";
    }
}
const g = new ReadonlyGreeter();
  g.name = "also not ok";
//无法分配到 "name" ，因为它是只读属性。ts

const cg = new ReadonlyGreeter('cg');
console.log(cg.name);
//cg
