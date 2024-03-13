let currentUsers = ["username1", "username2", "username3", "username4", "username5"];

let newUsers = ["username1", "username2", "username3", "Sadia", "Aslam"];

for (let user in currentUsers)
{
    currentUsers[user] = currentUsers[user].toLocaleLowerCase();
}

for (let user in newUsers)
{
    newUsers[user] = newUsers[user].toLocaleLowerCase();
}

for (let newUser of newUsers) {
    if (currentUsers.indexOf(newUser) !== -1) {
        console.log(`The username '${newUser}' is not available. Please choose a different one.`);
    } else {
        console.log(`The username '${newUser}' is available.`);
    }
}
