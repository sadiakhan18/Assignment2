function makeSandwich() {
    var toppings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        toppings[_i] = arguments[_i];
    }
    if (toppings.length === 0) {
        console.log("Please add some toppings!");
    }
    else {
        for (var topping in toppings) {
            console.log("".concat(toppings[topping], "\n"));
        }
    }
}
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss");
makeSandwich();
//The three dots behind toppings, as have been used in previous exercises represent the spreader operator.
//The spreader operator starts treating each element of the list as a singular entity.
