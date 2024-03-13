function make_album(artist, title, numberoftracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (numberoftracks !== undefined) {
        album.numberoftracks = numberoftracks;
    }
    return album;
}
var album1 = make_album("SomeArtist1", "Album1");
var album2 = make_album("SomeArtist2", "Album2", 8);
var album3 = make_album("SomeArtist3", "Album3");
console.log(album1);
console.log(album2);
console.log(album3);
