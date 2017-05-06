'use strict';

function numSum(numbers, stPoint) {
    if (stPoint == numbers.length) {
        return 0;
    }

    return numbers[stPoint] + numSum(numbers, stPoint + 1);
}


 // recursive solution
function sumOfDigits1(sum) {
    let result = sum;
    let digitSum = 0;
    while (result > 9) {
        let remainder = result % 10;
        digitSum += remainder;
        let subsctractor = result - remainder;
        result = subsctractor / 10;
    }

    result += digitSum;
    if (result > 9) {
        return sumOfDigits(result)
    } else {
        return result;
    }
}

/**
 *  solution with 2 while loops
 */
function sumOfDigits2(sum) {
    while (sum > 9) {
        let digitSum = 0;
        while (sum > 0) {
            let remainder = sum % 10;
            digitSum += remainder;
            let subsctractor = sum - remainder;
            sum = subsctractor / 10;
        }
        
        sum += digitSum;
    }

    return sum;
}


function test() {
    let numbers = [12, 16, 45, 75, 16];
    console.log(sumOfDigits2(numSum(numbers, 0)));
}

module.exports = {
    run: test
}