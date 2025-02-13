// Stack - (Primitive)

let myYoutubeName = "CodeCraft";
let anotherOne = myYoutubeName;
anotherOne = "abcd";

console.log(myYoutubeName);
console.log(anotherOne);
// doesnt affect to original value because of its just a copy 


// Heap - (Non - Primitive)
let userOne = {
    email : "hrithik@google.com",
    userID : 79
}

let userTwo = userOne
userTwo.email = "abcd@yahoo.com";

console.log(userOne);
console.log(userTwo);
// affect on original value




