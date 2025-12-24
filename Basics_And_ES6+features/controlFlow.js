if (2 === "2") {
  console.log("executed");
}

const userLoggedIN = true;
const debitCard = true;
const loggedINFromGoogle = false;
const loggedINFromEmail = true;

if (userLoggedIN && debitCard) {
  console.log("Allow to buy course");
}

if (loggedINFromEmail || loggedINFromGoogle) {
  console.log("User logged in");
}

// -------------------(TRUTHY)---------------------------------------------------------------

const userEmail = "hhhhh@gmail.com";

if (userEmail) {
  console.log(`Got user Email ${userEmail}`);
} else {
  console.log("No user Email has been found");
}

// falsy values : false , 0 , BigInt(0n) ,"" , undefined , NaN

// truthy values : "0" , 'false', " " , [] , {} , function(){}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// ------------------------- Nullish Coalescing OPerator (??): null , undefined

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10;

let val2;
val2 = undefined ?? 17;

console.log(val1); // 10
console.log(val2); // 17

// -----------------============= Terniary Operator ==========------------------

// condition ? true : false

const price = 100;
price < 90 ? console.log("Less than 90 ") : console.log("More than 90");
