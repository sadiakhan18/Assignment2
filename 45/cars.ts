interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; //This format means that this property will be added in a dictionary format, a key followed by
                        //a value of any type such as color: "red" where color is the key of type string and red the value.
                        //Putting it in square brackets indicates that this is optional and can be more than one.
}

function createCarObject(manufacturer: string, model: string, ...properties: { [key: string]: any }[]): Car {
    const car: Car = { manufacturer, model };

    for (const extra of properties) {
        Object.assign(car, extra);
    }

    return car;
}

const myCar = createCarObject("Suzuki", "FX", { color: "Orange", year: 1995});

console.log(myCar);
