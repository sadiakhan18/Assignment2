function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "This is my MEssage"; }
    console.log("Shirt size: ".concat(size));
    console.log("Message on the shirt: \"".concat(message, "\""));
}
make_shirt();
make_shirt();
make_shirt();
make_shirt("XXL");
make_shirt("Medium");
make_shirt("Small", "Updated");
