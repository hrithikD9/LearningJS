//  -> These are all predicted outputs
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);  // Not predictable
console.log("02" > 1);  // This too

console.log(null > 0); // false
console.log(null == 0); // false // (==) this operators works differently from comparison operators
console.log(null >= 0); // true
// all of these results are caused for , when we use comparison operators it treats null as 0.

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// strict check (===)
console.log("9" === 9);