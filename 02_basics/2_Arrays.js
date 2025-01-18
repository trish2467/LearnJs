 const team1=[1,2,3]
 const team2=[4,5,6]

 team1.push(team2);

 console.log(team1);// this will add array as an element in last element
 console.log(team1[3][1]);//3element mei push wala array aaya usska 1index that will be 2nd no

 //concat-->add both arrays into new array
 //[...team1,...team]==>same as concat

 const another=[1,2,3[4,5,6],7,[8,9,[10,11]]]
const real=another.flat(Infinity)//=>will make all in one array no subgroups
console.log(real)

console.log(Array.from("trish")); //will convery trish into an array as["t","r"...]
let s1=100;
let s2=200

console.log(Array.of(s1,s2))//=>[100,200]