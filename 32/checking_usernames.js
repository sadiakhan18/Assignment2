var currentUsers = ["username1", "username2", "username3", "username4", "username5"];
var newUsers = ["username1", "username2", "username3", "Sadia", "Aslam"];
for (var user in currentUsers) {
    currentUsers[user] = currentUsers[user].toLocaleLowerCase();
}
for (var user in newUsers) {
    newUsers[user] = newUsers[user].toLocaleLowerCase();
}
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    if (currentUsers.indexOf(newUser) !== -1) {
        console.log("The username '".concat(newUser, "' is not available. Please choose a different one."));
    }
    else {
        console.log("The username '".concat(newUser, "' is available."));
    }
}
