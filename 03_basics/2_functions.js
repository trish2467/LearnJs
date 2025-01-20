//shopingCard
function calculateCartPrice(num1)
{
    return num1
}
console.log(calculateCartPrice(200,400,500)) //this will return 200
/*
to return all values as an Array 
use -->(...num1) =>3 dots->Rest operator(passes multiple values)
*/ 
const user={
    username:"trish",
    price:199
}
//to pass oobject in a function-->koi bhi naam infunction
function handleObject(anyObject)
{
console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)