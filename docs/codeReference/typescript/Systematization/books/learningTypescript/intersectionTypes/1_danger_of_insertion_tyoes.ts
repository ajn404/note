//Intersection types are a useful concept, but it’s easy to use them in ways that confuse either yourself or the TypeScript compiler.

//#region long assignability errors
type ShortPoemMBase = {
  author: string;
};

type Haiku = ShortPoemMBase & {
  kigo: string;
  type: "haiku";
};

type Villanelle = ShortPoemMBase & {
  type: "villanelle";
  meter: string;
};

type ShortPoemM = Haiku | Villanelle;

const oneArt: ShortPoemM = {
  author: "ajn404",
  type: "villanelle",
  //   meter:'hihi'
};

//#endregion

//#region never
type NotPossible = number & string;
//type NotPossible = never
//#endregion
