function singSongsRecursive(song: string[], count: number = 0): number {
  return song.length ? singSongsRecursive(song.slice(1), count + 1) : count;
}
