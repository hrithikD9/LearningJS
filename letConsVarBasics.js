const accountId = 93109
let accountEmail = "hrithikdevnath0924@gmail.com"
var accountPassword = "12345"
accountCity = "Sylhet" // not a good practice
let accountState;

// accountId = 9 -//not allowed

console.log(accountId);
console.log(accountCity);

/*
prefer not to use var ,
because of issue in block scope and functional scope
*/

accountEmail = "nimiPriya3112"
accountPassword = "5678"
accountCity = "Dhaka"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


