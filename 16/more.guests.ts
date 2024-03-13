const dinnergs = ["Sobia", "Aslam", "Sadia"];

console.log("OrigianlList:");
for (const g of dinnergs) {
  console.log(`${g}`);
}

console.log("I wish to inform that we now have a bigger table!");

const newg1 = "Aslam";
const newg2 = "Sadia";
const newg3 = "Uzma";

dinnergs.unshift(newg1);
dinnergs.splice(Math.floor(dinnergs.length / 2), 0, newg2);

dinnergs.push(newg3);

console.log("Updated Invitation Messages:");
for (const g of dinnergs) {
    console.log(`${g}`);
}
