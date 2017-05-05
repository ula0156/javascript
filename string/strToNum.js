'use strict' 

function strToNum(str) {
    let number = 0;
    let power = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        if (!isNaN(str[i] * '0')) {
            let digit = str[i] * Math.pow(10, power);
            number += digit;
            power++;
        } else {
            number = number/Math.pow(10,(str.length - 1 - i));
            power = 0;
        }
    }

    return number;
}



function test() {
    var number = "1234.76"; 
    console.log(strToNum(number));
    
}


module.exports = {
    run: test
}