//#region  function types parentheses

let returnStringOrUndefined: () => string | undefined;
let mayReturnsStrings: (() => string) | undefined;
//#end region

const neverReturn = () => {
  throw new Error("never never");
};

const voidReturn = () => {
  //   while (false) {
  //     return "hiihii";
  //   }
  return;
};
