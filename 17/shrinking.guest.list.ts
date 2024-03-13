const dinnergs = ["Saif", "Drake", "Ahmed", "Name1", "Name2", "Name3", "Imran"];

console.log("Guests before:");
for (const g of dinnergs) {
    console.log(`${g}`);
}

console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people.");

while (dinnergs.length > 2) {
    const removedGuest = dinnergs.pop();
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

console.log(`Dear ${dinnergs[0]} and ${dinnergs[1]}, you are still invited to the dinner.`);

dinnergs.pop();
dinnergs.pop();

console.log("Updated Guest List:", dinnergs);
