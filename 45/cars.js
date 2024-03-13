function createCarObject(manufacturer, model) {
    var properties = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        properties[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    for (var _a = 0, properties_1 = properties; _a < properties_1.length; _a++) {
        var extra = properties_1[_a];
        Object.assign(car, extra);
    }
    return car;
}
var myCar = createCarObject("Suzuki", "FX", { color: "Orange", year: 1995 });
console.log(myCar);
