// By a variable creating promise and consumed it
const firstPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 1");
    resolve();
  }, 1000);
});

firstPromise.then(function () {
  console.log("First Promise Consumed");
});

// Without a variable creating promise and consumed it
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Second Promise Consumed");
});

//By using parameter
const thirdPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 3");
    resolve({ username: "Nivriti", email: "nivriti@example.com" });
  }, 1000);
});

thirdPromise.then(function (user) {
  console.log("Third Promise is consumed");
  console.log(user);
});

// Now using resolve , reject and catch , finally

const fourthPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let err = true;
    if (!err) {
      resolve({ username: "Nivriti", email: "nivriti@example.com" });
    } else {
      reject("ERROR : SOMETHING WENT WRONG");
    }
  }, 1000);
});

fourthPromise
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally("The promise is either resolved or rejected");

// Using Async and try-catch(different approach)

const fifthPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let err = false;
    if (!err) {
      resolve({ username: "JS", password: "123" });
    } else {
      reject("ERROR : JS WENT WRONG");
    }
  }, 1000);
});

async function fifthPromiseConsumed() {
  try {
    const response = await fifthPromise;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

fifthPromiseConsumed();
