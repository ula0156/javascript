"use strict";
function searchForSingle(arr, sInd, eInd) {
    console.log(sInd + " " + eInd);
    var midPoint = Math.round ((sInd + eInd)/2);
    // midPoint is odd
    if (midPoint % 2 == 1) {
    // check to the left to see if there is a pair
        if (arr[midPoint - 1] == arr[midPoint]) {
            // search for the number on the right 
            searchForSingle(arr, midPoint + 1, eInd);
        } 
        // if there is no pair in the left - number is on the left
        else {
            searchForSingle(arr, sInd, midPoint - 1);
        }
    // midPoint is even 
    } else {
        // look to the right to check if there is a pair
        if (arr[midPoint + 1] == arr[midPoint]) {
            // number is on the right
            searchForSingle(arr, midPoint + 2, eInd);
        }
        // if there is no pair on the right - number is on the left
        else {
            searchForSingle(arr, sInd, midPoint - 1);
        }
    }

}


function test() {
    var list = [1, 1, 2, 2, 3, 3, 5, 6, 6, 8, 8];
    console.log(searchForSingle(list, 0, list.length - 1));
}

module.exports = {
    run: test
}