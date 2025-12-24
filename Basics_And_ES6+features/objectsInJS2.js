// const tinderUser = new Object();  // singleton
const tinderUser = {}; // not a singleton

tinderUser.id = "123abc";
tinderUser.name = "hhh";
tinderUser.loggedIN = false;

console.log(tinderUser); // { id: '123abc', name: 'hhh', loggedIN: false }

const regularUser = {
  email: "someUser@gmail.com",
  fullname: {
    userfullName: {
      firstName: "Hrithik",
      lastName: "Dev Nath",
    },
  },
};

console.log(regularUser.fullname.userfullName.firstName); // Hrithik

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = {obj1,obj2} // not merging, this will create an object with obj1 and obj2 as properties
// const obj3 = Object.assign({},obj1,obj2) // object.assign(target, source); all source objects are merged into the target object
const obj3 = { ...obj1, ...obj2 }; // (...)spread operator, this will merge obj1 and obj2 into a new object , ITS GOING TO USE 99% of time in code

console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'loggedIN' ]
console.log(Object.values(tinderUser)); // [ '123abc', 'hhh', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'hhh' ], [ 'loggedIN', false ] ]

console.log(tinderUser.hasOwnProperty("isloggedIN")); // false

// ------------------------------// object de-structure //------------------------------------------------------------------------------

const course = {
  courseName: "Js",
  price: "499",
  courseInstructor: "Hrithik",
};

// syntax of object de-structure
// const {propertyName : variableName} = objectName
const { courseInstructor: instructor } = course;
console.log(instructor);
