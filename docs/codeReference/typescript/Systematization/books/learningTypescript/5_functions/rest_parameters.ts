function singAllTheSongs(singer: string, ...songs: string[]) {
  for (const song of songs) {
    console.log(`《${song}》 by ${singer}`);
  }
}

singAllTheSongs("ajn404");
singAllTheSongs("ajn403", "我", "我记得");
