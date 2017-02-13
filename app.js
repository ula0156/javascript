'use strict';

var test = require("./test.js")

// Recursion
var nonRecursiveFibonacci = require("./recursion/nonRecursiveFibonacci.js");
var recursiveFibonacci = require("./recursion/recursiveFibonacci.js");
var recursiveMin = require("./recursion/recursiveMin.js");
var singleNumber = require("./recursion/singleNumber.js");

// Arrays
var binarySearch = require("./arrays/binarySearch.js");
var isSorted = require("./arrays/isSorted.js");
var mergeSortedArrays = require("./arrays/mergeSortedArrays.js");
var sumOfTheArray = require("./arrays/sumOfTheArray.js");
var quickSort = require("./arrays/quickSort.js");
var selectionSort = require("./arrays/selectionSort.js");

// OOP
var oopExamples = require("./oop/examples.js");
var oopShapes = require("./oop/shapes.js");
var oopShoes = require("./oop/shoes.js");

// Strings
var digits = require("./strings/digit.js");

// Other
var wordContext = require("./other/wordContext.js");

// To run a different module just change this line and make sure
// the module exports the "run" function.
var moduleToRun = singleNumber;

moduleToRun.run();