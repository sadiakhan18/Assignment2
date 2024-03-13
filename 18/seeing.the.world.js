var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var locations = ["Paris", "Tokyo", "New York", "Rome", "Sydney"];
console.log("Original Order:", locations);
console.log("Alphabetical Order:", __spreadArray([], locations, true).sort());
console.log("Original Order (unchanged):", locations);
console.log("Reverse Alphabetical Order:", __spreadArray([], locations, true).sort().reverse());
console.log("Original Order (unchanged):", locations);
locations.reverse();
console.log("Reversed Order:", locations);
locations.reverse();
console.log("Original Order (reversed again):", locations);
locations.sort();
console.log("Alphabetical Order:", locations);
locations.sort(function (a, b) { return b.localeCompare(a); });
console.log("Reverse Alphabetical Order:", locations);
