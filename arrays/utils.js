'use strict';

var Utils = {};

const assert = require('assert');

function getElement(array, comparator) {
    if ((!Array.isArray(array)) || (array.length == 0)) {
        return undefined;
    }

    var resultIndex = 0;
    for (var i = 1; i < array.length; i++) {
        if (comparator(array[resultIndex], array[i]) == array[i]) {
            resultIndex = i;
        }
    }

   return resultIndex;
}

Utils.getMinIndex = function(array) {
    return getElement(array, Math.min);
}

Utils.getMaxIndex = function(array) {
    return getElement(array, Math.max);
}

Utils.countElements = function(array, conditionChecker) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (conditionChecker(array[i])) {
            count++;
        }
    }

    return count;
}

function countOdd(array) {
    return countElements(array, function(number) { return number % 2 == 1; });
}

function countEven(array) {
    return countElements(array, function(number) { return number % 2 == 0; });
}

function countPositive(array) {
    return countElements(array, function(number) { return number > 0; });
}


function applyOnArray(array, additionalFunction) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        
        newArray.push(additionalFunction())
    }
}

function multiply(element) {
    return element * 2;
}

function test_getMinIndex() {
    assert(Utils.getMinIndex([]) == undefined);
    assert(Utils.getMinIndex("Cucumber") == undefined);
    assert(Utils.getMinIndex(15) == undefined);
    assert(Utils.getMinIndex(null) == undefined);
    assert(Utils.getMinIndex([-1 ,2, 3, 7, 0]) == 0);
    assert(Utils.getMinIndex([-1 ,2, 3, 7, -2]) == 4);
    assert(Utils.getMinIndex([-1 ,2, -3, 7, 0]) == 2);
}

function test_getMaxIndex() {
    assert(Utils.getMaxIndex([11 ,2, 3, 7, 0]) == 0);
    assert(Utils.getMaxIndex([-1 ,2, 3, 7, 12]) == 4);
    assert(Utils.getMaxIndex([-1 ,2, 13, 7, 0]) == 2);
}

function test() {
    test_getMinIndex();
    test_getMaxIndex();
    var numbers = [1, 2, 4, 4 , 5, 6, 7];
    console.log(countElements(numbers, countOdd(numbers)));
}

module.exports = {
    run : test,
    Utils : Utils
}