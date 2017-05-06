'use strict'

// using a set (can't have miltiple elements with the same value)
function countWithDuplicatesNum1(array) {
   var uniqueNum = new Set();
   var withDuplicates = new Set();
   for (var i = 0; i < array.length; i++) {
       if (uniqueNum.has(array[i])) {
           withDuplicates.add(array[i]);
       }

       uniqueNum.add(array[i]);
   }

   return withDuplicates.size;
}


// using a map (pairs with the key and value)
function countWithDuplicatesNum2(array) {
   var uniqueNum = new Map();
   for (var i = 0; i < array.length; i++) {
       if (!uniqueNum.has(array[i])) {
           uniqueNum.set(array[i], 1);
       } else {
           let currentCount = uniqueNum.get(array[i]);
           uniqueNum.set(array[i], currentCount + 1);
       }
   }

   var count = 0;
   uniqueNum.forEach(function(value, key, map) {
       if (value > 1)
         count++;
   });

   return count;
}


function test() {
    var array = [1, 3, 6, 8, 11, 3, 8, 5, 5, 5, 5, 1 , 1 , 1];
    console.log(countWithDuplicatesNum2(array));

}

module.exports = {
    run: test
}
