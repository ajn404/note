const logPair = (name: string, value: number) => {
  console.log(`${name} has ${value}`);
};
logPair("name", 1);
const pairArray = ["name", 1];
logPair(...pairArray);
// error
// A spread argument must either have a tuple type or be passed to a rest parameter.
