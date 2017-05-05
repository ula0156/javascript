'use strict';

function countOfChar(text) {
    var arr = [];
    var count = 1;
    for (var i = 0; i < text.length; i++) {
        if (text[i] == text[i + 1]) {
            count++;
        } else {
            arr.push(text[i], count);
            count = 1;
        }
    }

    return arr.join('');
}


function test() {
    var string = "aaabbcck";
    console.log(countOfChar(string));
}

module.exports = {
    run: test
}  
