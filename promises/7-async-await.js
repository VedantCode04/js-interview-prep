
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 1"); 
  }, 10000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2"); 
  }, 5000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 3"); 
  }, 3000);
});

// The commented-out code below demonstrates promise chaining without async/await
// This code executes promises in sequence, waiting for each to resolve before proceeding
/*
promise1
  .then((data) => {
    console.log(data); // Logs "promise 1" after 10 seconds
    return promise2; // Returns promise2 to be handled by the next then
  })
  .then((data) => {
    console.log(data); // Logs "promise 2" after 5 seconds
    return promise3; // Returns promise3 to be handled by the next then
  })
  .then((data) => {
    console.log(data); // Logs "promise 3" after 3 seconds
  })
  .catch((err) => {
    console.log(err); // Logs any errors encountered in the chain
  });
*/

// `async` function definition
// The `async` keyword is used to declare an asynchronous function.
// It allows the use of the `await` keyword inside the function.
// An `async` function always returns a promise, and other values are wrapped in a promise.
async function test() {
  console.log("in test.."); // Logs immediately when the function starts
  
  // The `await` keyword pauses the function execution until the promise resolves.
  // `promise1` is awaited first, which means the function waits for this promise to resolve before proceeding to the next line.
  const data1 = await promise1; // Waits for promise1 to resolve (10 seconds)
  
  console.log("1.........."); // Logs after promise1 resolves
  console.log(data1); // Logs the resolved value of promise1
  // Concurrency: await does not delay the start of the promises themselves. Instead, 
  //   it only makes the async function wait for the result of each promise sequentially. 
  //   Promises that are not awaited will still run concurrently
  
  // The function now awaits `promise2`, which has been running concurrently.
  // Even though `promise2` was started earlier, it is awaited only after promise1 resolves.
  
  const data2 = await promise2; 
  
  console.log("2........."); // Logs after promise2 resolves
  console.log(data2); 
  
  // Similarly, the function awaits `promise3`, which has also been running concurrently.
  // `promise3` resolves independently of the other promises, but it is awaited last.
  const data3 = await promise3; // Waits for promise3 to resolve (3 seconds)
  
  console.log("3........."); 
  console.log(data3); 
}

test();

// This line runs immediately after calling `test`, as it is not affected by the async function
console.log("in main thread"); // Logs immediately after calling test

