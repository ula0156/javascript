// TODO - finish the function reverseWords2

function reverseWords(text) {
    var result = [];
    var currentWord = '';
    for (var i = 0; i < text.length; i++) {
        if (text[i] == ' ') {
            // convertToArray a currentWord
            var cwToArray = convertToArray(currentWord);

            // reverse currentword
            var reverse = reverseWord(cwToArray);

            // convert to string
            var cwToString = toString(cwToArray);
            
            // push it to result and add a space between words
            result.push(cwToString + " ");
            currentWord = '';    
        }
        else {
            currentWord += text[i];
        }
    }
    //add the last word to result
    var cwToArray = convertToArray(currentWord);
    var reverse = reverseWord(cwToArray);
    var cwToString = toString(cwToArray);
    result.push(cwToString);

    result = toString(result);
    return result;
}

function reverseWords2(text) {
    var array = convertToArray(text);
    var word = [];
    for (var i = 0; i < array.length; i++) {
        // word is found
        if (array[i] == ' ') {
            // reverse the word
            var reverse = reverseWord2(array, startIndex, endIndex);
        }

        else {

        }
    
    }

}

function convertToArray(text) {
    var newText = [];
    for (var i = 0; i < text.length; i++) {
        newText.push(text[i]);
    }

    return newText;
}

function reverseWord(wordArray) {
    for (var i = 0; i < wordArray.length/2; i++) {
        var tmp = wordArray[i];
        wordArray[i] = wordArray[wordArray.length - 1 - i]  
        wordArray[wordArray.length - 1 - i] = tmp;
    }
}

function reverseWord2(array, startIndex, endIndex) {
    for (var i = startIndex; i <= (startIndex + endIndex) / 2; i++) {
        var tmp = array[i];
        array[i] = array[endIndex - (startIndex - i)];
        array[endIndex - (startIndex - i)] = tmp;
    }
}


function toString(array) {
    var wordString = '';
    for (var i = 0; i < array.length; i++) {
        wordString += array[i]
    }
    return wordString;
}


function test() {
	var string = "Count to 10 several times";
    console.log(reverseWords(string));
}

module.exports = {
    run: test
}