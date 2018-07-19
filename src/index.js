/**
 * Title: Index.js
 * Description: This is the main entry point for your application, Clear out the examples below,
 * as well as the related tests in the `./../tests/index.test.js` file.
 */

// @flow

// example sync function
export const multiplySync = x => x * x;

// example async function
export const multiplyAsync = x => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (!x || typeof x !== 'number') {
      return reject(new Error('a single arg of type number is required'));
    }

    return resolve(x * x);
  }, 1000);
});
