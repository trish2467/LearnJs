const accountId=14453 //cant be change
let accountEmail="trish@gmail.com"
var accountPass="1234"
accountCity="Jaipur"
accountState //output->undefined

//accountId=2->error
accountEmail="abc@123"
accountPass="212"
accountCity="bengal"
console.log(accountId)

//for all together
console.table([accountId,accountEmail,accountPass,accountCity])
/*
to decl variable we use var and let.
use mostly let
var is not use due to its issue in bloack scope
*/