interface Album {
    artist: string;
    title: string;
    numberoftracks?: number;
}

function make_album(artist: string, title: string, numberoftracks?: number): Album {
    const album: Album = {
        artist: artist,
        title: title
    };

    if (numberoftracks !== undefined) {
        album.numberoftracks = numberoftracks;
    }

    return album;
}

const album1 = make_album("SomeArtist1", "Album1");
const album2 = make_album("SomeArtist2", "Album2", 8); 
const album3 = make_album("SomeArtist3", "Album3");

console.log(album1);
console.log(album2);
console.log(album3);
