
// Promise.all example
// Promise.all takes an array of promises and returns a single promise
// Explanation of Promise.all:
// - **Fulfillment**: Promise.all returns a new promise that resolves only when all promises in the input array are resolved.
//   The resolved value of this promise is an array containing the results of the input promises, in the same order as the promises were passed.
// - **Rejection**: If any of the input promises reject, Promise.all immediately rejects with the reason from the first promise that rejects.
//   The other promises are not awaited if one fails.
// - **Usage**: Promise.all is useful when you need to wait for multiple asynchronous operations to complete before proceeding.
//   It ensures that you can work with the results of all promises together when they are all resolved, and handles the case where any of them fail.
// Benefits of Using Promise.all
// Synchronization: Ensures all asynchronous operations (e.g., API requests) are completed before proceeding with the results.
// Error Handling: Handles errors gracefully if any of the asynchronous operations fail.
// Efficient Processing: Allows processing of all results together once they are all available, improving efficiency and logic organization.


function resolved1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise 1 resolved"); 
    }, 2000);
  });
}


function resolved2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise 2 resolved"); 
    }, 2000);
  });
}


function resolved3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise 3 resolved"); 
    }, 2000);
  });
}
// Promise.all takes an array of promises and returns a single promise
Promise.all([resolved1(), resolved2(), resolved3()]) // array of multiple promises
  .then((result) => { // result is in array
    // This .then() block is executed if all promises in the array are resolved
    console.log(result); 
    result.forEach((element) => {
      console.log(element);
    });
  })
  .catch((err) => {
    // This .catch() block is executed if any of the promises in the array are rejected
    console.log(err); // Logs the error from the rejected promise
  });

// Another Promise.all example
// This example demonstrates the behavior when one of the promises is rejected

function resolve4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("In resolve4: resolved"); 
    }, 2000);
  });
}

function reject4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("In reject4: rejected"); 
    }, 2000);
  });
}

Promise.all([resolve4(), reject4()])
  .then((result) => {
    console.log(result); 
    result.forEach((element) => {
      console.log(element);
    });
  })
  .catch((err) => {
    // This .catch() block is executed because reject4() rejects
    console.log(err); // Logs the error message from the rejected promise (reject4)
  });
