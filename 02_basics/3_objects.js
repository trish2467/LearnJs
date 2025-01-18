//constructors se jabbhi banaega singleton
Object.crete  //made through constructor->singleton

//object literals

const mySym=Symbol("key1")

const JsUser={
    name:"Trish",
    "full name":"trish palia",
    [mySym]:"mykey1", //todeclare sym
    age:21,
    location:"karnal",
    email:"trish@123",
    isLoggedIn:false
}

//to get values->2ways
console.log(JsUser.email)
console.log(JsUser["email"]) //as a string because it has store string
//cant declare "full name" with .syntax
console.log(JsUser[mySym])
//type will still be string but we will print the objectg ,it will apper as a symbol

//to freeze so that no one can change info
//Object.freeze(JsUser);
console.log(JsUser)

JsUser.greeting=function()
{
    console.log("Hello Js")
}

console.log(JsUser.greeting); //will return fucntion(anonymous)
console.log(JsUser.greeting()) //will go to function