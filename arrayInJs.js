// Array Declaration

const myArr = [0,1,2,3,4,5]
console.log(myArr[2]);

const myHeroes = ["shaktiman","Superman"]

const myArr2 = new Array(1,2,3)

// Array methods

myArr.push(9)
myArr.pop()

myArr.unshift(9)
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArrr = myArr.join();

console.log(myArr);
console.log(typeof myArr);
console.log(newArrr);
console.log(typeof newArrr);


console.log("A",myArr); // A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3);
console.log(myn1); // [ 1, 2 ]
console.log("B",myArr); // B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3)
console.log(myn2); // [ 1, 2, 3 ]
console.log("C",myArr); // C [ 0, 4, 5 ]


