//#region part1
let singer: (song: string) => string;
singer = function (song) {
  return `Singing ${song.toUpperCase()}`;
};
//#endregion

{
  // Functions passed as arguments to parameters with function parameter types will have their parameter types inferred as well.
  let songs = ["1", "2", "3"];
  songs.forEach((song, index) => {
    console.log(`${song} at index:${index}`);
  });
}
