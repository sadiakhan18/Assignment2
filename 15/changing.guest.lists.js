var guestsfordinner = ["Sobia", "Aslam", "Sadia"];
console.log("OrigianlList:");
for (var _i = 0, guestsfordinner_1 = guestsfordinner; _i < guestsfordinner_1.length; _i++) {
    var g = guestsfordinner_1[_i];
    console.log("".concat(g));
}
console.log("Sadia is unable to make it to dinner.");
guestsfordinner.pop();
var newGuest = "Uzma";
guestsfordinner.push(newGuest);
console.log("New List:");
for (var _a = 0, guestsfordinner_2 = guestsfordinner; _a < guestsfordinner_2.length; _a++) {
    var g = guestsfordinner_2[_a];
    console.log("".concat(g));
}
for (var _b = 0, guestsfordinner_3 = guestsfordinner; _b < guestsfordinner_3.length; _b++) {
    var g = guestsfordinner_3[_b];
    console.log("Dear ".concat(g, ", You are invited to the dinner party."));
}
