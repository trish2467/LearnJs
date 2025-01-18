//date-->its an **object**

let myDate=new Date()
/*
console.log(myDate); //output not readable
console.log(myDate.toString()); //readable
console.log(myDate.toDateString()) // whole date with day wihtout timr
console.log(myDate.toLocaleString()) //--> 1/1/25,time
console.log(myDate.toJSON())
/*
let myCreate=new Date(2023,0,23)//-->year,month(start with 0),date
let mycreate=new Date("2023-01-14") //when passing whole start from one only
//or "01-14-2023"
let myNew=new Date(2023,0,23,5,3) //3 colums cover date and next 2 rime : 5:03am
*/

let mycreate=new Date("01-14-2023")
let myTimeStamp=Date.now()

//myTimeStamp -->in milli second
//mycreate.getTime()
//Math.floor(Date.now()/1000)--> mili seconds-->seonds

// .getMonth()+1-->as start from 0,.getDay()

//tochange prop
let newDate=new Date();
newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(newDate.getDay()); //0-sunday