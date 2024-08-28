// Using Promise.any to handle multiple promises.
// Promise.any() returns a promise that resolves as soon as any one of the input promises resolves.
// If all input promises are rejected, Promise.any() returns a rejected promise with an AggregateError.

Promise.any([resolved1(), resolved2(), resolved3(), reject4()])
  .then((result) => {
    // run as soon as any of the promise resolves
    console.log(result); 
  })
  .catch((err) => {
    // This block runs only if all the promises in the array are rejected.
    console.log("error = ");
    console.log(err);
  });

  //returns an array of reasons of rejection in promises. 
  // return aggregaterror - which is an array of all the rejection reasons.
Promise.any([reject4(), reject4(), reject4()])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("error = ");
    console.log(err);
  });

/**
 * Explanation:
 * - Promise.any() is similar to Promise.race(), but it only cares about the first resolved promise.
 * - If any of the promises resolve, Promise.any() will resolve with that value.
 * - If all the promises reject, Promise.any() will reject with an AggregateError,
 *   which is an array of all the rejection reasons.
 *
 * - In this case, resolved1, resolved2, and resolved3 all resolve after 2 seconds,
 *   so one of them will be the winner of the race and resolve the Promise.any().
 * - reject4 rejects after 1 second, but it doesn’t matter because Promise.any() will resolve
 *   with the first fulfilled promise it encounters.
 * - Even though reject4 rejects first, Promise.any() continues to wait for the first resolved promise.
 */


function resolved1(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("in resolve1 promise...");
      resolve("promise 1 resolved");
    }, 2000);
  });
}

function resolved2(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("in resolve2 promise...");
      resolve("promise 2 resolved");
    }, 2000);
  });
}

function resolved3(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("in resolve3 promise...");
      resolve("promise 3 resolved");
    }, 2000);
  });
}

function reject4() {
  return new Promise((resolve, reject) => {
    console.log("in reject promise...");
    setTimeout(() => {
      reject("In reject4: rejected");
    }, 1000);
  });
}

/**
 * Example Use Case:
 * - Suppose you have multiple sources (APIs, databases, etc.) where you can fetch data from.
 *   You don't care which one resolves first, as long as you get data from one of them.
 *
 * - With Promise.any(), you can proceed with the first successful data fetch,
 *   ignoring the others if they fail or take longer.
 *
 * - If all data sources fail, you will know because Promise.any() will reject with an AggregateError,
 *   which you can then handle to show an error message or try again.
 */


