mySym = Symbol("Key1"); // key defining

const JsUser = {
  name: "Hrithik",
  fullName: "Hrithik Dev Nath",
  [mySym]: "myKey1",
  age: 24,
  location: "Sylhet",
  email: "hrithik@google.com",
  isloggedIn: false,
  lastLogginDays: ["Monday", "Saturday"],
};

console.log(JsUser.email); // hrithik@google.com
console.log(JsUser["email"]); // hrithik@google.com
console.log(JsUser["fullName"]); // Hrithik Dev Nath
console.log(JsUser[mySym]); // myKey1

JsUser.age = 29;
console.log(JsUser.age); // 29
// Object.freeze(JsUser); // freezing method , so that objects value can be protected
JsUser.age = 79;
console.log(JsUser.age); // 29

JsUser.greetings = function () {
  console.log("Hello JS user");
};

console.log(JsUser.greetings());
