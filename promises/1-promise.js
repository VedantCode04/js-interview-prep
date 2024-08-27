// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// It can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully, and the promise has a resolved value.
// 3. Rejected: The operation failed, and the promise has a reason (an error message or object).

const promise1 = new Promise((resolve, reject) => {

  const rand = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  console.log(rand);

  // The resolve function is called when the asynchronous operation completes successfully.
  // The promise transitions from "pending" to "fulfilled" state, with the random number as the resolved value.
  if (rand < 5) {
    resolve(rand); // Fulfilled state with the random number as the resolved value
  }

  // The reject function is called when the operation fails.
  // The promise transitions from "pending" to "rejected" state, with an Error object as the reason.
  reject(new Error("Reject error: Data is larger than 5")); // Rejected state with an error message or any object can be passed
});

// start point of program
console.log(promise1); // At this point, the promise is in a pending state

// then, catch, and finally are methods that interact with the promise once it has settled (fulfilled or rejected).
promise1
  .then((data) => {
    // The then() method is called when the promise is fulfilled.
    // It takes a callback function that receives the resolved value (here, the random number).
    console.log(promise1); // Logs the resolved promise object // Promise {data}
    console.log("Promise resolved: data < 5 =", data);
  })
  .catch((error) => {
    // The catch() method is called when the promise is rejected.
    // It takes a callback function that receives the rejection reason (here, the Error object).
    console.log(promise1); // Logs the rejected promise object
    console.log(error);
  })
  .finally(() => {
    // The finally() method is called after the promise is settled, regardless of its outcome (fulfilled or rejected).
    // It is typically used for cleanup activities. eg, cleaning the intervals and timeouts in the code
    console.log("Finally method for cleanup activities...");
  });

// Another example showing the optional error callback in the .then() method
const promise2 = new Promise((resolve, reject) => {
  const rand = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  console.log(rand);

  if (rand < 5) {
    resolve(rand); // Fulfilled state with the random number as the resolved value
  }

  reject(new Error("Reject error: Data is larger than 5")); // Rejected state with an error message
});

promise2
  .then(
    (data) => {
      // The first callback in then() is executed when the promise is fulfilled.
      // It receives the resolved value of the promise.
      console.log("promise 2");
      console.log(promise2); // Logs the resolved promise object
      console.log("Promise resolved: data < 5 =", data);
    },
    (error) => {
      // The second, optional callback in then() is executed when the promise is rejected.
      // It receives the rejection reason (error object).
      // Note: It's more common to handle errors using catch(), but this pattern is also valid.
      console.log("promise 2");
      console.log(error);
    }
  )
  .finally(() => {
    // The finally() method is executed after the promise is settled, whether fulfilled or rejected.
    console.log("Finally method for cleanup activities...");
  });
