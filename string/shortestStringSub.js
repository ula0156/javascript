'use strict';

function handleOperation(arr, operator, solver) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == operator) {
            let insert = solver(arr[i - 1], arr[i + 1]);
            arr.splice(i - 1, i + 1, insert);
        }
    }
}


function add(a, b) {
    return a + b;
}


function mathOperator(arr) {
//    handleOperation(arr, "*", function(a, b) { return a * b; } );
    handleOperation(arr, "*", add );
}


function test() {
    var arr = [15, "*", 10];
    mathOperator(arr)
    console.log(arr);
}


module.exports = {
    run: test
}


