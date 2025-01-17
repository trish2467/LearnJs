const name="trish"
const count=50;
//to bind together-->+ operator OR '${}
console.log('hello my name is ${name} and count is ${count}');

const gameName=new String('trishgn')

console.log(gameName[0]);// O/P->t
console.log(gameName.toUpperCase())//O/P->TRISHGN

console.log(gameName.charAt(2)); //o/p->i
console.log(gameName.indexOf('t'))//o/p->2

const newString=gameName.substring(0,4) //will always start from 0 to end.
const anotherString=gameName.slice(-7,4) // lastt to 4 as -7

const newName="      trish";
console.log(newName.trim());

//replace('replacing word',new word)
//includes('name here')

