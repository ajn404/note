interface Animal {
    live(): void;
}
interface Dog extends Animal {
    woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
//type Example1 = number
type Example2 = RegExp extends Animal ? number : string;
//type Example2 = string


//SomeType extends OtherType ? TrueType : FalseType;




interface IdLabel {
    id: number /* some fields */;
}
interface NameLabel {
    name: string /* other fields */;
}


type NameOrId<T extends number | string> = T extends number
    ? IdLabel
    : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
    throw "unimplemented";
}

let a = createLabel("typescript");

let b = createLabel(2.8);

let c = createLabel(Math.random() ? "hello" : 42);