'use strict';

/**
 * Checks if the text starting from startPos till end is a palindrome.
 */
function isPalindrome(text, startPos) {
    for (var j = startPos; j < startPos + (text.length - startPos) / 2; j++) {
        let end = text[text.length - j - 1 + startPos];
        if (text[j] != end) {
            return false;
        }
    }

    return true;
}

/**
 * Mirrors the first n characters and appends them at the end of text. 
 * Returns the text together with the mirrored characters.
 */
function mirrorFirstCharacters(text, n) {
    let result = text;
    for (let k = n - 1; k >= 0; k--) {
        result += text[k];
    }

    return result;
}

/**
 * Non-recursive version.
 */
function makePalindrome(text) {
    for (var i = 0; i < text.length; i++) {
            if (isPalindrome(text, i)){
                return mirrorFirstCharacters(text, i);
            }
    }

    return "";
}

/**
 * Recursive version.
 */
function makePalindromeRec(text, startPos) {
    if (isPalindrome(text, startPos)){
        return mirrorFirstCharacters(text, startPos);
    }

    return makePalindromeRec(text, startPos + 1);
}


function test() {
    //          012345
    let text = "abcaac";
    console.log(makePalindromeRec(text, 0))
//    console.log(makePalindrome(text))
}


module.exports = {
    run: test
}