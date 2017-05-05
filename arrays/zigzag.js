'use strict';

function zigzag1(arr) {
    let countArr = [];
    for (let i = 0; i < arr.length; i++) {
        countArr.push(1);
    }
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            countArr[i] = 1;
        } else if (i == 1) {
            countArr[i] = 2;
        } else {
            if (arr[i] > arr[i - 1]) {
                if (arr[i - 1] < arr[i - 2]) {
                    countArr[i] = countArr[i - 1] + 1;
                } else {
                    countArr[i] = 2;
                }
            } else if (arr[i] < arr[i - 1]) {
                if (arr[i - 1] > arr[i - 2]) {
                    countArr[i] = countArr[i - 1] + 1;
                } else {
                    countArr[i] = 2;
                }
            } else {
                countArr[i] = 1;
            }
        }
    }

    return Math.max.apply(Math, countArr);
}


// my solution
function zigzag2(arr) {
    let lengArr = [];
    for (let i = 0; i < arr.length; i++) {
        lengArr.push(1);
    }

    for (let j = 0; j < arr.length; j++) {
        if (arr.length == 1) {
            return 1;
        } else if (j == 0) {
            lengArr[j] = 1;
        } else if (arr[j] > arr[j + 1]) {
            // "/" case
            if (arr[j] > arr[j - 1]) {
                lengArr[j + 1] = lengArr[j] + 1;
            } else {
                lengArr[j + 1] = lengArr[j + 1] + 1;
            }
        } else if (arr[j] < arr[j + 1]) {
            // "\" case
            if (arr[j] < arr[j - 1]) {
                lengArr[j + 1] = lengArr[j] + 1;
            } else {
                lengArr[j + 1] = lengArr[j + 1] + 1;
            }
        }
    }

    return Math.max.apply(Math, lengArr);
}


function test() {
    var arr = [12, 4, 30];
    console.log(zigzag(arr));
}

module.exports = {
    run: test
}