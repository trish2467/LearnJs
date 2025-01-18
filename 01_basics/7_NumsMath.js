const score=400
console.log(score); //--->o/p=400

const balance=new Number(100) //we specified it should be a number
console.log(balance); //o/p->[Number:100] //datatype is also returned

console.log(balance.toString().length) //3
console.log(balance.toFixed(1)); //100.0

//.toLocalString()-->no comes with comma but acc to american number sytem
//.toLocalString('en-IN') =>INDIAN NUMBER SYSTEM

//--------------------MATHS--------------------
console.log(Math); //->o/p Object [Math] {}
console.log(Math.abs(-4)) //4
console.log(Math.round(4.6)) //5
console.log(Math.ceil(4.2)) //5 ->greater no
console.log(Math.floor(4.9)) //4->leaser no
//min &max
//Math.randon()-->gives a no btw 0 and 1 -->any random 

