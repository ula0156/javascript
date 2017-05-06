function processDigit(number, index, letters) {
    if (index == number.length) {
        console.log(letters);
        return;
    }

    var map = {
        '2' : "abc",
        '3' : "def",
        '4' : "ghi",
        '5' : "jkl",
        '6' : "mno",
        '7' : "pqrs",
        '8' : "tuv",
        '9' : "wxyz"
    }

    let x = map[number[index]];
    for (let i = 0; i < x.length; i++) {
         processDigit(number, index + 1, letters + x[i]);
    }
}

function test() {
    processDigit("232", 0, "");
}

module.exports = {
    run : test
}