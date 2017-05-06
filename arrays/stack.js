'use strict'

function test() {
    let arr = [1, 2, 3, 4];
    let stack1 = [];
    let stack2 = [];

    arr.forEach(function(element) {
        stack1.push(element);
    });

    while (stack1.length > 0) {
        stack2.push(stack1.pop());
    }
}

module.exports = {
    run: test
}