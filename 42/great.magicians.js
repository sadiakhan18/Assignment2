function makegreat(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
function show_magician(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicians = ["Pen&Keller", "Houdini", "David Blaine", "Derren Brown"];
var greatMagicians = makegreat(magicians);
show_magician(greatMagicians);
