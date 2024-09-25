const accountId = 144553
let accountEmail = "mohammadfaizan98x@gmail.com"
var accountPassword = "12345" //not recommended 
// var is not used now because of scope as it changes all the values 
/*
    Prefer not to use var 
    bacause of issue in block scope and functional scope
*/
accountCity = "Islamabad"

let accountState; // if we declare value but not assign value than it's value will be undefined

//accountId = 2 const value cannot be changed 

accountEmail = "hc@gmail.com"
accountPassword = "212121"
accountCity = "Mirpur"


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
