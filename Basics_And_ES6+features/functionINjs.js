function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
  return number1 + number2;
}

const x = addTwoNumbers(2, 5);

console.log("Result : ", x);

function loginUserMessage(userName) {
  if (userName === undefined) {
    console.log(" Enter the name ");
    return;
  }
  return `${userName} just logged in`;
}

console.log(loginUserMessage("Hrithik"));

function calculateCartPrice(...num1) {
  // (...) these are rest operator // it will take all the values passed in the function and convert them into an array
  return num1;
}

console.log(calculateCartPrice(100, 200, 300));

const user = {
  name: "abcd",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `The userName is ${anyobject.name} , and the price is ${anyobject.price}`
  );
}

handleObject(user);

handleObject({
  // another method of passing values  in obejct
  name: "hhhh",
  price: 99,
});

const myNewArray = [200, 300, 400];

function returnSecondValue(getArray) {
  // method of passing values  in Array
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
