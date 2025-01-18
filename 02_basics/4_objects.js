//to declare
const tinderUser= new Object()

tinderUser.id="123des"
tinderUser.name="riya"
tinderUser.isLoggedIn=false
//console.log(tinderUser)

const regualr={
    email:"some@123",
    fullName:{
        userfullName:{
        firstName:"trish",
        lastName:"Palia"
        }
    }
}
console.log(regualr.fullName.userfullName.firstName) //o/p->trish

const ob1={1:"a",2:"b"}
const ob2={3:"c",4:"d"}
/*
const ob3=Object.assign({},ob1,ob2)
or
const ob3={..ob1,..ob2}
*/
//------keysandvalues---

cosnole.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser))
//.entries-->har key aur uski value ko ek array mei baandeya

//.hasOwnProperty('isLoggedIn')--->check it has property or not

