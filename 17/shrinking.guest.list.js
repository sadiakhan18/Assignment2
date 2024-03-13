var dinnergs = ["Saif", "Drake", "Ahmed", "Name1", "Name2", "Name3", "Imran"];
console.log("Guests before:");
for (var _i = 0, dinnergs_1 = dinnergs; _i < dinnergs_1.length; _i++) {
    var g = dinnergs_1[_i];
    console.log("".concat(g));
}
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people.");
while (dinnergs.length > 2) {
    var removedGuest = dinnergs.pop();
    console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner."));
}
console.log("Dear ".concat(dinnergs[0], " and ").concat(dinnergs[1], ", you are still invited to the dinner."));
dinnergs.pop();
dinnergs.pop();
console.log("Updated Guest List:", dinnergs);
