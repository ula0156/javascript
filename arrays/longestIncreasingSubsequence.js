'use strict';

function longestIncreasingSubsequence(arr) {
    let maxLen = [];
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        let max = 0;
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                max = Math.max(max, maxLen[j]);
            }
        }

        result = Math.max(result, 1 + max);
        maxLen.push(1 + max);
    }

    return result;
}


function test() {
            //  0, 1, 2, 3, 4, 5, 6
    var array =[0, 0, 0, 2, 1, 0, 8];
    console.log(zigzag(array)); 
    //console.log(longestIncreasingSubsequence(array)); 
}


module.exports = {
    run: test
}