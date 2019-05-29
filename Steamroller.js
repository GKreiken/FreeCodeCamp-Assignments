/*

Flatten a nested array. You must account for varying levels of nesting.

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

*/

function steamrollArray(arr) {
  const flat = [];
  
  const isArray = function(arg) {
    if (!Array.isArray(arg)) {
      flat.push(arg);
    } else {
      for (let a in arg) {
        isArray(arg[a]);
      }
    }
  };

  arr.forEach(isArray);
  console.log(flat);
  return flat;
}

steamrollArray([1, [2], [3, [[4]]]]);