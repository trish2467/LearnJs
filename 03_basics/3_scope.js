// {}-->function ya if else ke sath aatha hai toh scope
// Global scope outside loop

let a=300
var b=300
if(true)
{
    let a=10
    var b=20
    console.log("INNER :",a)//->a=20
}

console.log(a) //o/p->300
console.log(b) //o/p->20

//block scope remains only in block
//-----------imp----------

addOne(5)// this will not cause error as intialize kiiya then call
function addOne(num)
{
    return num+1
}

addTwo(5) //this is will cause error we called function and stored
const addTwo=function(num)
{
    return num+2
}