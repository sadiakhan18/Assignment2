function make_great(magicians: string[]): string[] {
    return magicians.map((magician) => `${magician} the Great`);
}

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const arrayBeforeRemoval = ["Pen&Keller", "Houdini", "David Blaine", "Derren Brown"];

const copy = [...arrayBeforeRemoval];

const arrayContainingGreatMagicians = make_great(copy);

console.log("Magicians before they were great:\n");
show_magicians(arrayBeforeRemoval);

console.log("Magicians after they became great:\n");
show_magicians(arrayContainingGreatMagicians);
