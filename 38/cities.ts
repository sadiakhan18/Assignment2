function citywc(city: string, country: string = "anything country"): void {
    console.log(`${city} is in ${country}`);
}

citywc("Karachi", "Pakistan");
citywc("Islamabad", "Pakistan");
citywc("Ziarat");
