'use strict'
/**
 * Write a method to replace all spaces in a string with ‘%20’.
 *  - ask if additional space is given at the end of the string.
 * if so move all the charts to the end of the string, when at after word
 * hit a space replace it with 20%.
} */
function swap(tail, firstIndex, text) {
    let tmp = text[tail];
    text[tail] = text[firstIndex];
    text[firstIndex] = tmp;
}


function replaceSpace(t) {
    let text = t.split('');
    let tail = text.length - 1;
    let insideTheWord = false;
    for (let i = text.length - 1; i >= 0; i--) {
        if (text[i] != ' ') {
            insideTheWord = true;
            swap(tail,i,text);
            tail--;
        } else if ((text[i] == ' ') && (insideTheWord == true)) {
            insideTheWord = false;
            text[tail] = '0';
            text[tail - 1] = '2';
            text[tail - 2] = '%';
            tail -= 3;
        }
    }

    return text.join('');
}


function test() {
    let text = "I   love        icecream     ";
    console.log(replaceSpace(text));
}


module.exports = {
    run: test
}