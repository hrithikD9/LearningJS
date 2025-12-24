// Array Declaration

const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr[2]); // 2

const myHeroes = ["shaktiman", "Superman"];

const myArr2 = new Array(1, 2, 3);

// Array methods

myArr.push(9);
myArr.pop();

myArr.unshift(9);
myArr.shift();
console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]

console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(9)); // -1

const newArrr = myArr.join();

console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
console.log(typeof myArr); // object
console.log(newArrr); // 0,1,2,3,4,5
console.log(typeof newArrr); // string

console.log("A", myArr); // A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3);
console.log(myn1); // [ 1, 2 ]
console.log("B", myArr); // B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3);
console.log(myn2); // [ 1, 2, 3 ]
console.log("C", myArr); // C [ 0, 4, 5 ]
