const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// variable.filter(callback_Function->(variable to store) => condition)
const newNums = myNums.filter((num) => num > 4);

/* these format also can be written ->   
(but pay attention to the scope , otherwise it will not return anything)

    const newNums = myNums.filter((num) => {
        return num > 4}) 
        */

console.log(newNums);

const newArr = [];

// same method using forEach loop
myNums.forEach((num) => {
  if (num > 4) {
    newArr.push(num);
  }
});

console.log(newArr);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const userBooks = books.filter((bk) => bk.genre === "History");
const userInterest = books.filter((i) => i.publish > 1995 && i.edition > 2001);

console.log(userBooks);
console.log(userInterest);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const x = Nums.map((n) => n + 10);
console.log(x);

// chaining
const newNum = Nums.map((x) => x * 10)
  .map((y) => y + 1)
  .filter((z) => z > 50);

console.log(newNum);

// ++++++++++++++++++++++++++ REDUCE ++++++++++++++++++++++++++++++++++++++++++

const ar = [1, 2, 3, 4, 5];

const total = ar.reduce(function (acc, cv) {
  console.log(`acc ${acc} - cv ${cv}`);
  return acc + cv;
}, 0);

console.log(total); // 15

const myTotal = ar.reduce((acc, cv) => acc + cv, 0);
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice); // 22996
