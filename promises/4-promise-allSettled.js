
// Using Promise.allSettled to handle multiple promises.
// Promise.allSettled() waits for all the promises to settle (either resolve or reject) and returns a promise
// that resolves after all of the given promises have either resolved or rejected.
/**
 * Use Cases of Promise.allSettled():
 * 1. **Handling Multiple Asynchronous Operations:** 
 *    - Useful when you need to perform several asynchronous operations and want to wait for all of them to complete,
 *      regardless of whether they succeed or fail.
 * 
 * 2. **Processing All Results:** 
 *    - Unlike Promise.all(), Promise.allSettled() doesn't short-circuit on the first rejection. 
 *      It allows you to get the result of all promises, whether they resolved or rejected.
 * 
 * 3. **Ensuring Completion:**
 *    - Ideal when you want to run a set of promises and perform some action after all have completed,
 *      without being concerned about individual failures.
 * 
 * 4. **Error Reporting:**
 *    - You can use it to gather errors from multiple sources while still processing successful operations.
 * 
 * 5. **Parallel Operations with Mixed Outcomes:**
 *    - Suitable when executing parallel tasks where some may fail, but you still want to proceed with the others.
 */
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
    }, 8000);
  });
}

Promise.allSettled([resolved1(), resolved2(), resolved3(), reject4()])
  .then((result) => {
    // The result is an array of objects, where each object corresponds to one of the input promises. 
    // in same order as the are passed to the methods
    console.log(result); 

    result.forEach((element) => {
      // Each object has a status field which is either "fulfilled" or "rejected".
      console.log("status = ", element.status);
      
      if (element.status == "fulfilled") {
        // If the promise was fulfilled, the object will have a value field containing the resolved value.
        console.log("value = ", element.value);
      } else {
        // If the promise was rejected, the object will have a reason field containing the rejection reason.
        console.log("reason = ", element.reason);
      }
    });
  })
  .catch((err) => {
    // This catch block won't usually run in Promise.allSettled() since it doesn't short-circuit on rejection.
    // However, it's good practice to include it for unexpected errors.
    console.log("error = ");
    console.log(err);
  });


