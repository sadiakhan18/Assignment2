function makegreat(magicians: string[]): string[] {
    return magicians.map((magician) => `${magician} the Great`);
}

function show_magician(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magicians = ["Pen&Keller", "Houdini", "David Blaine", "Derren Brown"];

const greatMagicians = makegreat(magicians);

show_magician(greatMagicians);
