function make_shirt(size: string = "Large", message: string = "This is my MEssage"): void {
    console.log(`Shirt size: ${size}`);
    console.log(`Message on the shirt: "${message}"`);
}

make_shirt();
make_shirt();
make_shirt();
make_shirt("XXL");
make_shirt("Medium");
make_shirt("Small", "Updated");
