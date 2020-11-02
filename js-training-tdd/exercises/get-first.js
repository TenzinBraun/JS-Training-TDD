'use strict';

/*
 * Create a `getFirst` function that takes an array or a string
 * and return the first element
 *
 * @notions Data-Structures, Get
 */

// Your code:
function getFirst(arg) {
  switch (typeof arg) {
    case "string":
      return arg.charAt(0)
    case "object":
      if(Array.isArray(arg)){
        return arg[0]
      }
      return undefined
    default:
      return undefined
  }
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(getFirst([ 2, 42 ]), 2);
assert.strictEqual(getFirst([ 'pouet', 4, true ]), 'pouet');
assert.strictEqual(getFirst([ getFirst ]), getFirst);
assert.strictEqual(getFirst('salut'), 's');
assert.strictEqual(getFirst([]), undefined);
// End of tests */
