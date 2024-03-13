let listForUsers=["Shahid","Zayan"," Masharib","Sadia","admin"];

for (let i = 0; i < listForUsers.length; i++)
{
    if (listForUsers[i] === "admin")
    {
        console.log("Hello admin, would you like to see a status report?");
    }
    else
    {
        console.log(`Welcome! ${listForUsers[i]}, thank you for logging in again.`);
    }
}