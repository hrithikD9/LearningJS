let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.getTime());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());

let myCreateDate = new Date(2025,1,9);
console.log(myCreateDate.toString());

let myCreateDateAgain = new Date(2025,1,9,4,9);
console.log(myCreateDateAgain.toString());

let myCreateDateY = new Date("2025-02-21")
console.log(myCreateDateY.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDateY.getTime());
