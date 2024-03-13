let locations = ["Paris", "Tokyo", "New York", "Rome", "Sydney"];

console.log("Original Order:", locations);

console.log("Alphabetical Order:", [...locations].sort());

console.log("Original Order (unchanged):", locations);

console.log("Reverse Alphabetical Order:", [...locations].sort().reverse());

console.log("Original Order (unchanged):", locations);

locations.reverse();
console.log("Reversed Order:", locations);

locations.reverse();
console.log("Original Order (reversed again):", locations);

locations.sort();
console.log("Alphabetical Order:", locations);

locations.sort((a, b) => b.localeCompare(a));
console.log("Reverse Alphabetical Order:", locations);
