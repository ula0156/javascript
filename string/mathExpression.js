'use strict';

// to check if n is a digit, if it's - return digit
function getDigit(n) {
    let parseChar = parseInt(n);
    if (!isNaN(parseChar)) {
        return parseChar;
    }
}

// convert to digit array
function toArray(text) {
    let currentNum = 0;
    let arrChar = text.split('');
    let newArr = [];
    for (let m = 0; m < arrChar.length; m++) {
        if ((arrChar[m] == "*") || (arrChar[m] == "+") || (arrChar[m] == "^") || (arrChar[m] == "-")) {
            newArr.push(currentNum);
            newArr.push(arrChar[m]);
            count = 0;
            currentNum = 0;
        } else if (arrChar[m] != " ") {
            let digit = getDigit(arrChar[m]); 
            currentNum *= 10;
            currentNum += digit;
         }
    }
    if (arrChar.length - 1) {
        newArr.push(currentNum);
    }

    return newArr;
}


function handleOperation(array, operator, solver) {
    for (let j = 0; j < array.length; j++) {
        if (array[j] == operator) {
            let insert = solver(array[j - 1], array[j + 1]);
            array.splice(j - 1, 3, insert);
            j = -1;
        }
    }
}

// mathematical operations
function mathOperations(arr) {
    let array = toArray(arr);
    handleOperation(array, "^", function(a, b) { return Math.pow(a, b); });
    handleOperation(array, "*", function(a, b) { return a * b; });
    handleOperation(array, "-", function(a, b) { return a - b; });
    handleOperation(array, "+", function(a, b) { return a + b; });
  
    return array[0];
}


function test() {
    var string = "   15   *   10 - 50 + 3^3     ";
    console.log(mathOperations(string));
    
}


module.exports = {
    run: test
}