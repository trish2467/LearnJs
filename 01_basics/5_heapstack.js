/*
Stack->stores copy of element
(primitive)

heaps->reference original mei change aaega
(non-primitive)
forex->
if stack
*/
let account="11";
accountId=account;
accountId="12";
console.log(account)
console.log(accountId) //copy was passes original will not get changed

//ex2
//---important-->see how to make a obeject and attributes/properties inside that inside that
let user={
    email:"abc@"
}

let user2=user;
user2.email="123@";

console.log(user.email);
console.log(user2.email); //both the values are changed as refernce get pass in objects.
