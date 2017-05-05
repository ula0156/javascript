'use strict';

function printNumCombinations(n, pos, arr) {
    if (pos == n) {
       console.log(arr);
        return;
    }
    arr.push(0);
    for (let i = 0; i < n; i++) {
        arr[arr.length - 1] = i;
        printNumCombinations(n, pos + 1, arr);
    }

    arr.pop();
}


function wordsCombination(num, pos, text) {
    if (pos == num.length) {
        console.log(text);
        return;
    }
    let obj = { '1': "abc",
                '2': "cdf",
                '3': "kjs" }
    let stopCondition = obj[num[pos]];
    for (let i = 0; i < stopCondition.length; i++) {
        text += obj[num[pos]][i];
        wordsCombination(num, pos + 1, text);
    }
}


function test() {
    console.log(wordsCombination("123",0,"")); 
}


module.exports = {
    run: test
}