function makeSandwich(...toppings: string[]): void {
    if (toppings.length === 0) {
        console.log("Please add some toppings!");
    } else {
        for (let topping in toppings)
        {
            console.log(`${toppings[topping]}\n`)
        }
    }
}

makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss");
makeSandwich();

//The three dots behind toppings, as have been used in previous exercises represent the spreader operator.
//The spreader operator starts treating each element of the list as a singular entity.