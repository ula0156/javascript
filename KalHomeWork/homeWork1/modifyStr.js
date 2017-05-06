'use strict';

function modifyStr(text) {
    var arr = [];
    for (var i = 0; i < text.length; i++) {
        if ((text.length > i + 2) && (text[i] == "%") && (text[i + 1] == "2") && (text[i + 2] == "0")) {
            arr.push(' ');
            i += 2;
        } else {
            arr.push(text[i]);
        }    
    }

    return arr.join('');
}


function test() {
    var phrase = "I%20love%20Agolos%20";
    console.log(modifyStr(phrase));
}

module.exports = {
    run: test
}  
