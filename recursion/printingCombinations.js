'use strict';

function printCombinations(numbers, pos) {
    if (pos == numbers.length) {
        console.log(numbers);
        return;
    }

    for (var i = 0; i < numbers.length; i++) {
        for (var j = pos - 1; j >= 0; j--) {
            if (numbers[j] == i) {
                i++;
            }
        }
        numbers[pos] = i;
        printCombinations(numbers, pos + 1);
    }  
}


function test() {
    let n = 3;
    let numbers = [];
    for (var j = 0; j < n; j++) {
        numbers.push(0);
    }
    
    printCombinations(numbers, 0);
}


module.exports = {
    run: test
}