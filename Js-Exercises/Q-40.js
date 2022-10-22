function make_album(artistName, titleName, numOfTracks) {
  const Album = {
    Artist: artistName,
    Title: titleName,
  };
  if (numOfTracks) {
    Album.Track = numOfTracks;
  }

  return Album;
}

console.log(
  make_album("Nusrat Fateh Ali Khan", "Hai Kahan Ka Irada Tumhara Sanam")
);
console.log(make_album("Nusrat Fateh Ali Khan", "Nami Danam Kuja Raftam "));
console.log(make_album("Nusrat Fateh Ali Khan", "Hai Kahan Ka Irada", 3));
