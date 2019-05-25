/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.
*/


    function diffArray(arr1, arr2) {
      let result = [];

      function searchAndDestroy(search, destroy) {
        for (let i = 0 ;i < search.length ;i++) {
          if (destroy.indexOf(search[i]) === -1) {
            result.push(search[i]);
          }
        }
      }

      searchAndDestroy(arr1, arr2);
      searchAndDestroy(arr2, arr1);

      return result;
    }

    console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));