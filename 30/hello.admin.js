var listForUsers = ["Shahid", "Zayan", " Masharib", "Sadia", "admin"];
for (var i = 0; i < listForUsers.length; i++) {
    if (listForUsers[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Welcome! ".concat(listForUsers[i], ", thank you for logging in again."));
    }
}
