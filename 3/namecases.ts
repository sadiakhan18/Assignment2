let somename = "Zul Qarnain";

console.log(`Lowercase: ${somename.toLowerCase()}`);

console.log(`Uppercase: ${somename.toUpperCase()}`);

const titleCaseName = somename.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
console.log(`Titlecase: ${titleCaseName}`);
