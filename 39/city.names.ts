function citywcountry(city: string, country: string): string {
    return `${city}, ${country}`;
}

const city1 = citywcountry("Karachi", "Pakistan");
const city2 = citywcountry("Islamabad", "Pakistan");
const city3 = citywcountry("Ziarat", "Pakistan");

console.log(city1);
console.log(city2);
console.log(city3);
