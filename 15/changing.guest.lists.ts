const guestsfordinner = ["Sobia", "Aslam", "Sadia"];

console.log("OrigianlList:");
for (const g of guestsfordinner) {
  console.log(`${g}`);
}

console.log(`Sadia is unable to make it to dinner.`);
guestsfordinner.pop()

const newGuest = "Uzma";
guestsfordinner.push(newGuest);

console.log("New List:");
for (const g of guestsfordinner) {
  console.log(`${g}`);
}

for (const g of guestsfordinner) {
  console.log(`Dear ${g}, You are invited to the dinner party.`);
}
