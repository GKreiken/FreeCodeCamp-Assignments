/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.



LET OP!: als je de // weghaalt voor de console logs stack overflowed hij en zegt de opdracht alsof hij niet geldig is.

*/


function sumPrimes(num) {
let result = 0;

  for (let i = 2; i <= num; i++) {
    //console.log("i = " + i);
    let checker = true;
    
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          checker = false;
        }

      } if (checker) {
        result += i;
        //console.log("result = " + result);
      }
  }

return result;
}

console.log(sumPrimes(20));