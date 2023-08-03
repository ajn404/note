const pairConst = [111, "name"] as const;
// pairConst[0] = 9999;
// 无法为“0”赋值，因为它是只读属性

function firstCharAndSizeAsConst(input: string) {
  return [input[0], input.length] as const;
}

const [first, size] = firstCharAndSizeAsConst("hello");
console.log(first, size);
// first = "g";
