
function resolved1(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise 1 resolved");
    }, 2000);
  });
}

function resolved2(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise 2 resolved");
    }, 2000);
  });
}

function resolved3(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise 3 resolved");
    }, 2000);
  });
}

function reject4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("In reject4: rejected");
    }, 2001);
  });
}

// Using Promise.race to handle multiple promises.
// Promise.race() returns a promise that resolves or rejects as soon as one of the input promises settles 
// (either resolves or rejects).
Promise.race([resolved1(), resolved2(), resolved3(), reject4()])
  .then((result) => {
    // runs as soon as any of the promise resolved with the data sent by that promise
    console.log(result);
  })
  .catch((err) => {
    // This block runs only if the first settled promise is a rejection.
    console.log("error = ");
    console.log(err);
  });

/**
 * Explanation:
 * - Promise.race() starts all the promises concurrently and returns a new promise that settles as soon as
 *   one of the input promises settles (resolves or rejects).
 * 
 * - In this case, resolved1, resolved2, and resolved3 all resolve after 2 seconds.
 *   The promise that resolves first will make Promise.race() resolve with its value.
 * 
 * - reject4 is designed to reject after 2.001 seconds, slightly after the others resolve.
 *   Since Promise.race() settles with the first resolved or rejected promise, the race is won by one of the
 *   resolved promises, not by the rejection.
 * 
 * - The remaining promises (including reject4) will continue to execute, but their results do not affect
 *   the outcome of Promise.race().
 * 
 * Example Use Case:
 * - Consider a scenario where you are trying to fetch data from multiple servers, but you want to proceed
 *   with the data from the server that responds the fastest.
 * 
 * - You might have three servers to query (represented by resolved1, resolved2, and resolved3). You also 
 *   have a timeout mechanism in place (represented by reject4) to ensure you don't wait indefinitely.
 * 
 * - By using Promise.race(), you can move forward with the fastest response, whether it comes from any of the
 *   three servers or if the timeout occurs first.
 * 
 * - This approach is often used in real-world scenarios where speed is crucial, such as loading resources
 *   for a web page, where you might proceed with whichever resource loads first.
 */
