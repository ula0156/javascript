"use strict";
const assert = require('assert');
// search a single number in a sorted array
function searchForSingle(arr, sInd, eInd) {
    var midPoint = Math.round ((sInd + eInd)/2);
    
    if ((arr[midPoint] !== arr[midPoint - 1] && (arr[midPoint] !== arr[midPoint + 1]))) {
        return arr[midPoint];
    }

    // midPoint is odd
    if (midPoint % 2 == 1) {
    // check to the left to see if there is a pair
        if (arr[midPoint - 1] == arr[midPoint]) {
            // search for the number on the right 
            return searchForSingle(arr, midPoint + 1, eInd);
        } 
        // if there is no pair in the left - number is on the left
        else {
            return searchForSingle(arr, sInd, midPoint - 1);
        }
    // midPoint is even 
    } else {
        // look to the right to check if there is a pair
        if (arr[midPoint + 1] == arr[midPoint]) {
            // number is on the right
            return searchForSingle(arr, midPoint + 2, eInd);
        }
        // if there is no pair on the right - number is on the left
        else {
            return searchForSingle(arr, sInd, midPoint - 1);
        }
    }
}

function test() {
    var numbers = [1, 2, 2, 3, 3, 4, 4, 6, 6, 7, 7];
    assert(searchForSingle(numbers, 0, numbers.length - 1) == 1);
    numbers = [2, 2, 3, 3, 4, 6, 6, 7, 7];
    assert(searchForSingle(numbers, 0, numbers.length - 1) == 4);
    numbers = [2, 2, 3, 3, 4, 4, 6, 6, 7, 7, 8];
    assert(searchForSingle(numbers, 0, numbers.length - 1) == 8);
    numbers = [2];
    assert(searchForSingle(numbers, 0, numbers.length - 1) == 2);
}

module.exports = {
    run: test
}