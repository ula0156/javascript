'use strict';

function biggestSum(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
        sum = Math.max(a[i], sum);
    }

    return sum;
}


function test() {
    var numbers = [1 , 2, -8, 4, 0, 9];
    console.log(biggestSum(numbers));
}


module.exports = {
    run: test
}