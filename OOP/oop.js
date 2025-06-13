function user(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Hello ${this.username} , Welcome to the board`);
  };
}

const userOne = new user("Hrithik", 79, true);
const userTwo = new user("Orpon", 19, false);

console.log(userOne);
console.log(userTwo);
