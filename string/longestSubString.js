'use strict';

function toCount(text) {
    let word = text.split('');
    let count = 0;
    for (let j = 0; j < word.length; j++) {
        count++;
    }

    return count;
}


function longestSubString(arr) {
    let numArr = [];
    for (let i = 0; i < arr.length; i++) {
        let x = toCount(arr[i])
        numArr.push(x);
    }
    
    let longestIndex = 0;
    for (let k = 0; k < numArr.length; k++) {
        if (numArr[k] > numArr[longestIndex]) {
            longestIndex = k;
        } else {
            numArr[k] = - 1;
        }
    }

    let result = [];
    for (let m = 0; m < numArr.length; m++) {
        if (numArr[m] != - 1) {
            result.push(arr[m]);
        }
    }

    return result; 
}


function test() {
              // 2     2     3      4       3
    let arr = ["ab", "bc", "ccc", "bfsr", "ack"];
    console.log(longestSubString(arr));
}


module.exports = {
    run: test
}