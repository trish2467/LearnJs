const user={
    username:"trish",
    price:99,
    welcomeMessage:function()
    {
        console.log(`${this.username} ,welcome here`)
    }
}
//above this will print username

console.log(this) //->{}EMPTY

//THIS CANT BE USED INSIDE FUNCTIONS 
/*---------------------------ARROW-------------------
syntax
 const addTwo=()=>{
    return 
 } 
    */
 const addTwo=(num1,num2)=>{
    return num1+num2
 } 

 //implict return->return karna hau pr likhne ki need nahi
 //return tabhhi likhogie jab {}lagaoge
 const addTw=(num1,num2)=>(num1+num2)