'use strict';

var test = require("./test.js")

// Recursion
var nonRecursiveFibonacci = require("./recursion/nonRecursiveFibonacci.js");
var recursiveFibonacci = require("./recursion/recursiveFibonacci.js");
var recursiveMin = require("./recursion/recursiveMin.js");

// Arrays
var binarySearch = require("./arrays/binarySearch.js");
var isSorted = require("./arrays/isSorted.js");
var mergeSortedArrays = require("./arrays/mergeSortedArrays.js");
var sumOfTheArray = require("./arrays/sumOfTheArray.js");

// To run a different module just change this line and make sure
// the module exports the "run" function.
var moduleToRun = sumOfTheArray;

moduleToRun.run();