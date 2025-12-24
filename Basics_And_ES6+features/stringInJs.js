const name = "Hrithik";
const repo = 49;

console.log(name + repo + " Value"); // old version // not recommend to use

console.log(`Hello my name is ${name} and my repo count is ${repo}`); // modern and use in backend
// its also called as string interPolation

const gName = new String("hrith-dn-79");
// some of string methods
console.log(gName.__proto__); // {}
console.log(gName.length); // 11
console.log(gName.toUpperCase()); // HRITH-DN-79
console.log(gName.charAt(2)); // i
console.log(gName.indexOf("i")); // 2

const str = "  fooo  ";
console.log(str); //    fooo
console.log(str.trim()); //fooo

const url = "https://hrithik.com/hrithik%79devnath";

console.log(url); //https://hrithik.com/hrithik%79devnath
console.log(url.replace("%79", "$")); // https://hrithik.com/hrithik$devnath

console.log(url.includes("hrithik")); // true

console.log(gName.split("-")); // [ 'hrith', 'dn', '79' ]
