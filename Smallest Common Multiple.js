/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([2, 10]) should return 2520.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.

*/

function smallestCommons(arr) {
const list = [];
for (let i = Math.max(...arr); i >= Math.min(...arr); i--) {
    list.push(i);

console.log(list);}

    var lcm = list[0];
    for (let i = 1; i < list.length; i++) {
    var GCD = gcd(lcm, list[i]);
    lcm = (lcm * list[i]) / GCD;
    }
    return lcm;

    function gcd(x, y) {
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }

}
smallestCommons([1,5]);








/*
Was mijn eerste oplossing. Werkt technisch gezien wel, maar is niet mogelijk qua stack overflow. Jammerrrrrrr


function smallestCommons(arr) {
const list = [];
for (let i = Math.max(...arr); i >= Math.min(...arr); i--) {
    list.push(i);
}
console.log(list);

 for (let j = 1; j < Infinity; j++) {
   //console.log("j = " + j);
   let check = list.filter( x => j % x === 0);
   //console.log(check);
   if (check.length === list.length) {
     //console.log("Dit zou het moeten zijn: " + j);
     return j;
   }
 }

}



smallestCommons([2,10]);

*/