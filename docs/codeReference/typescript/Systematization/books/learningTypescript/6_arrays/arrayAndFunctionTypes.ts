let stringCreators: (() => string)[];
let createStrings: () => string[];

stringCreators = [() => "Hello", () => "World", () => "TypeScript"];
createStrings = () => {
  let strings: string[] = [];
  for (let creator of stringCreators) {
    strings.push(creator());
  }
  return strings;
};
console.log(createStrings()); // ["Hello", "World", "TypeScript"]
