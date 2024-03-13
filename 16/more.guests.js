var dinnergs = ["Sobia", "Aslam", "Sadia"];
console.log("OrigianlList:");
for (var _i = 0, dinnergs_1 = dinnergs; _i < dinnergs_1.length; _i++) {
    var g = dinnergs_1[_i];
    console.log("".concat(g));
}
console.log("I wish to inform that we now have a bigger table!");
var newg1 = "Aslam";
var newg2 = "Sadia";
var newg3 = "Uzma";
dinnergs.unshift(newg1);
dinnergs.splice(Math.floor(dinnergs.length / 2), 0, newg2);
dinnergs.push(newg3);
console.log("Updated Invitation Messages:");
for (var _a = 0, dinnergs_2 = dinnergs; _a < dinnergs_2.length; _a++) {
    var g = dinnergs_2[_a];
    console.log("".concat(g));
}
