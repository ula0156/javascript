'use strict';

function test() {
    var text = "a2b";
    for (var i = 0; i < text.length; i++) {
        if (text[i] >= '0' && text[i] <= '9') {
            console.log(text[i]);
        }
    }
}

module.exports = {
    run: test
}