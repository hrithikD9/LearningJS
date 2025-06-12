// JavaScript is a dynamically typed language.
// Because data type will automatically assigned at the time of compilation or code execution.

// primitives - 7 types [string , number , Boolean , null , undefined , symbol , BigInt]

const score = 100;
const scoreValue = 100.4;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id == anotherId);

const bigNumber = 973728348823488383n;

// Reference (Non Primitive) - [Array , Objects , Functions]

const heroes = ["Hrithik", "Shahrukh", "Salman"]; // Array

let myObject = {
  // Object
  name: "Hrithik",
  age: 24,
};

const myFunction = function () {
  // function
  console.log("Hello from function");
};
