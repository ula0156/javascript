'use strict';

function maxConsequentSum(arr) {
    let sum = 0; 
    let resultSum = 0;
    let lastIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            sum = arr[i];
            resultSum = sum;
        } else if (sum + arr[i] >= arr[i]) {
            sum += arr[i];
        } else {
            sum = arr[i];
        }
        
        if (resultSum < sum) {
            resultSum = sum;
            lastIndex = i;
            
        }
    }

    sum = resultSum;
    let startIndex = lastIndex;
    while (sum != 0) {
        sum -= arr[startIndex];
        startIndex = startIndex - 1;
    }
    
    startIndex += 1;
    
    console.log(startIndex);                 
    console.log(lastIndex);                 
    return resultSum;
}

function test() {   
    let numbers = [5, 1, -3, 4, -20, 0];
    console.log(maxConsequentSum(numbers));
}

module.exports = {
    run: test
}