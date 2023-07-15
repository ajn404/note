// discriminated union
type DPoemWithPages = {
  name: string;
  pages: number;
  type: "pages";
};
type DPoemWithRhymes = {
  name: string;
  rhymes: boolean;
  type: "rhymes";
};
type DPoem = DPoemWithPages | DPoemWithRhymes;
const dpoemm: DPoem =
  Math.random() > 0.5
    ? {
        name: "aj404",
        pages: 123,
        type: "pages",
      }
    : {
        name: "",
        rhymes: false,
        type: "rhymes",
      };
dpoemm.name;
// Dpoemm.pages;
//narro
// if ("pages" in dpoemm) {
//   dpoemm.pages;
// } else {
//   dpoemm.rhymes;
// }

if (dpoemm.type === "pages") {
  dpoemm.pages;
} else {
  dpoemm.rhymes;
}
