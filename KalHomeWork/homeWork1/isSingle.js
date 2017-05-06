'use strict';
const assert = require('assert');

function getSingle(array, startIndex, endIndex) {
    if (startIndex == endIndex) {
        return array[startIndex];
    }

    var middleIndex = Math.round((startIndex + endIndex) / 2);
    if (array[middleIndex - 1] == array[middleIndex]) {
        // found the pair to the left.
        if ((middleIndex - 1 - startIndex) % 2 == 1) {
            // number is found to the left of the pair
            return getSingle(array, startIndex, middleIndex - 2);
        } else {
            // number is found to the right of the pair.
            return getSingle(array, middleIndex + 1, endIndex);
        }
    } else if (array[middleIndex + 1] == array[middleIndex]) {
        // found the pair to the right.
        if ((endIndex - middleIndex - 1) % 2 == 1) {
            // number is found to the right of the pair
            return getSingle(array, middleIndex + 2, endIndex);
        } else {
            // number is found to the left of the pair.
            return getSingle(array, startIndex, middleIndex - 1);
        }
    } else {
        // Found number.
        return array[middleIndex];
    }
}


function test() {
    // index       0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    var numbers = [1, 2, 2, 3, 3, 4, 4, 6, 6, 7, 7];
    assert(getSingle(numbers, 0, numbers.length - 1) == 1);
    numbers = [2, 2, 3, 3, 4, 6, 6, 7, 7];
    assert(getSingle(numbers, 0, numbers.length - 1) == 4);
    numbers = [2, 2, 3, 3, 4, 4, 6, 6, 7, 7, 8];
    assert(getSingle(numbers, 0, numbers.length - 1) == 8);
    numbers = [7];
    assert(getSingle(numbers, 0, numbers.length - 1) == 7);

}

module.exports = {
    run: test
}
