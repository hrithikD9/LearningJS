let heroes = ["thor", "Spiderman"];

const heroesPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy Power is ${this.spiderman}`);
  },
};

Object.prototype.hrithik = function () {
  console.log("Hrithik is present in all objects");
};

// here putting power into objects means all objects are in the same powers consuming
heroes.hrithik();
heroesPower.hrithik();

Array.prototype.heyHrithik = function () {
  console.log("Is it ?");
};

// heroesPower.heyHrithik(); // this wont work because from lower to upper doesnt share the powers

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);


let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"hrithik".trueLength();
"iceTea".trueLength();
