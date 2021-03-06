/*

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

addTogether(2, 3) should return 5.
addTogether(2)(3) should return 5.
addTogether("http://bit.ly/IqT6zt") should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.

*/

function addTogether(a, b) {
  if (typeof a !== 'number') {
    return undefined;
  }
  if (b === undefined) {
    return function (c) {
      if (typeof c !== 'number') {
        return undefined;
      } else {
        return a + c;
      }
    }
  }
  if (typeof b !== 'number') {
    return undefined;
  }
  return a+b;
}

addTogether(2,3);