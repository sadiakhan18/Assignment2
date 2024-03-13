const listForsers=[];

for (let i = 0; i < listForsers.length; i++)
{
    if (listForsers.length === 0)
    {
        console.log("The list is empty!");
        break;
    }
    else if (listForsers[i] === "admin")
    {
        console.log("Hello admin, would you like to see a status report?");
    }
    else
    {
        console.log(`Hi! ${listForsers[i]}, thank you for logging in again.`);
    }
}