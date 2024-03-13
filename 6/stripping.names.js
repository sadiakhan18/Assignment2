var personNameWithWhitespace = "\t\t\t\t dfdsgfdsfsfdsfdsfds\n";
console.log("\"".concat(personNameWithWhitespace, "\""));
var strippedName = personNameWithWhitespace.trim();
console.log("\"".concat(strippedName, "\""));
