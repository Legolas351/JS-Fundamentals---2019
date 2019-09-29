function grami(band, album, song) {
  let time = (album.length * band.length * song.length) / 2;
  let rotations = Math.ceil(time / 2.5);
  console.log(`The plate was rotated ${rotations} times.`);
}
grami("Black Sabbath", "Paranoid", "War Pigs");
