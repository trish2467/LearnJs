//array
//collection of elements
//arrays in js are resizable and mox datatypes
//shallow copies->reference mei -->change in orginal

//-----------------ARRAY ------------------
const myArr=[0,1,2,3,4,5] //can be same datatype and diff also
const heros=["shinchain","ninja"]
const myArr2=new Array(1,2,3,4)

/*arrays methods
.push(4) //->Add 4
.pop()-->remove last value
.unshift(9)-->add 9 in front ->optimization nhi hai kyuki sabko ek ekshift krna padega
.shift( )-->removes first element

const  newArr=myArr.join() ->converts array to string
output---of newArr->0,1,2,3
output----of myArr->[0,1,2,3]

//slice and spice

console.log("A ",myArr); -->A [0,1,2,3]
cosnt myn1=myArr.slice(1,3)

console.log(myn1);-->[1,2]--->INDEXES 1 AND 2 AD EXCLUDE 3
console.log("B",myArr);  --> B [0,1,2,3]

const myn2=myArr.splice(1,3)-->[1,2,3]
console.log("C",myArr);---> C [0,4,5]

//splice remove that indexes from the original array
//also includes last one

*/