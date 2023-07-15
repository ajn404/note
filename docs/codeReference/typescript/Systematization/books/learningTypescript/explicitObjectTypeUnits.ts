type PoemWithPages = {
  name: string;
  pages: number;
};
type PoemWithRhymes = {
  name: string;
  rhymes: boolean;
};
type Poem = PoemWithPages | PoemWithRhymes;
const poemm: Poem =
  Math.random() > 0.5
    ? {
        name: "aj404",
        pages: 123,
      }
    : {
        name: "",
        rhymes: false,
      };
poemm.name;
// poemm.pages;
//narro
if ("pages" in poemm) {
  poemm.pages;
} else {
  poemm.rhymes;
}
