'use strict';

function countElements(array, conditionChecker) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (conditionChecker(array[i])) {
            count++;
        }
    }

    return count;
}


function isEven(number) {
    return number % 2 == 0;
}


function isOod(number) {
    return number % 2 == 1;
}


function countEven(array) {
    return countElements(array, isEven);
}


function countOod(array) {
    return countElements(array, function(number) {return number % 2 == 1});
}


function test() {
    var numbers = [4, 2, 7, 8, 9, 1, 6, 0];
    console.log(countElements(numbers, isEven));
    console.log(countElements(numbers, isOod));
    console.log(countEven(numbers));
    console.log(countOod(numbers));
}


module.exports = {
    run: test
}