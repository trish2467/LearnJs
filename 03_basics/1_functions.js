function sayMyName()
{
console.log("t");
console.log("t");
console.log("t");
}

//sayMyName-->this is reference
sayMyName() //->execute hooega

function addT(n1,n2) //parameters
{
    console.log(n1+n2)
}
addT(3,4)//arguments are passed when called

const result=addT(3,4);
console.log("result:",result) //o/p->result: undefined as function has not returned anything
/*
if we returned something then only it will return ..
*/

function login(username)
{
    return `${username} just logged in`
}

console.log(login("trish"))
// when trish is not passed-->undefined aaega