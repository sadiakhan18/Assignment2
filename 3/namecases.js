var somename = "Zul Qarnain";
console.log("Lowercase: ".concat(somename.toLowerCase()));
console.log("Uppercase: ".concat(somename.toUpperCase()));
var titleCaseName = somename.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
console.log("Titlecase: ".concat(titleCaseName));
