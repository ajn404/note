type ArtWork = {
  genre: string;
  name: string;
};

type Writing = {
  page: number;
  name: string;
};

type WrittenArt = ArtWork & Writing;
const writeart: WrittenArt = {
  name: "123",
  page: 12,
  genre: "hai",
};

let art_work: ArtWork = {
  name: "hi",
  genre: "niu",
};

art_work = writeart;
console.log(art_work);

art_work.genre = "niuniuniu";
console.log(art_work);
console.log(writeart);
// art_work = structuredClone(writeart);
// art_work.genre = "gogogo";

// console.log(art_work);
// console.log(writeart);
