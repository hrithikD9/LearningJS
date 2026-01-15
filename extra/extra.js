// function print(name) {
//   console.log(name);
// }

// print("Hrithik");

// function add(one, two) {
//   return (sum = one + two);
// }

// const x = add(7, 9);
// console.log(x);

// const sub = function (a, b) {
//   return a - b;
// };

// console.log(sub(3, 2));

// const sum = () => {

// }

// let arr = [1, true, 20, "Hrithik", 77, 79];

// arr.push(100);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift(99);
// console.log(arr);

// console.log(arr.slice(2, 4));

// let arr = [10, 20, 30];

// const ans = arr.map((number) => {
//   return number * number;
// });

// console.log(ans);

// class Human {
//   name = "Hrithik";
//   #age = 18; // # that means its a private property
//   height = 190;
//   weight = 63;

//   walking() {
//     console.log("I am walking");
//   }

//   running() {
//     console.log("I am running");
//   }
// }

// const obj = new Human();

// console.log(obj.name);

// obj.walking()

// let findClick = document.querySelector("#fanchor");

// findClick.addEventListener("click", function (event) {
//   event.preventDefault();
//   findClick.textContent = "Hehe";
// });

// function showTheValue(event) {
//   alert(event.target.textContent);
// }

// let allP = document.querySelectorAll("p");

// for (let i = 0; i < allP.length; i++) {
//   let c = allP[i];
//   c.addEventListener("click", showTheValue);
// }

console.log("Hrithik1");

let firstPromise = new Promise((resolve, reject) => {
  setTimeout(function sayMyName() {
    console.log("Hey i am Hrithik");
  }, 10000);
});

console.log("Hrithik2");
