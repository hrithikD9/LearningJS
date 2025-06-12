if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Hrithik";

  function two() {
    const website = "instagram";
    console.log(username);
  }
  // console.log(website);

  two();
}
// one()

function addOne(num) {
  return num + 1;
}
console.log(addOne(7));

const addTwo = function (num) {
  // another method of declaration function
  return num + 2;
};
console.log(addTwo(7));
