'use strict';

function findDup(text) {
    let unique = new Set();
    let dup = new Set();
    for (let i = 0; i < text.length; i++) {
        if (unique.has(text[i])) {
            dup.add(text[i]);
        } else {
            unique.add(text[i]);
        }
    }

    return unique.size;
}


function test() {
    let text = "ababac";
    let duplicate = findDup(text);
    console.log(duplicate);
}

module.exports = {
    run: test
}