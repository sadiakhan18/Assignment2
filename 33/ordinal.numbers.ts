let ordinalNumbers=[1,2,3,4,5,6,7,8,9];

for (let i = 0; i < ordinalNumbers.length; i++)
{
    if (ordinalNumbers[i] === 1)
    {
        console.log("1st");
        continue
    }
    if (ordinalNumbers[i] === 2)
    {
        console.log("2nd");
        continue
    }
    if (ordinalNumbers[i] === 3)
    {
        console.log("3rd");
        continue
    }
    else
    {
        console.log(`${ordinalNumbers[i]}th`);
    }
}