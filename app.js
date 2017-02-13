'use strict';

var test = require("./test.js")
// OOP
var caddMethodtoPrototype = require("./OOP/addMethodtoPrototype.js");
var shoes = require("./OOP/shoes.js");
// Recursion
var nonRecursiveFibonacci = require("./recursion/nonRecursiveFibonacci.js");
var recursiveFibonacci = require("./recursion/recursiveFibonacci.js");
var recursiveMin = require("./recursion/recursiveMin.js");
// String
var reverseWords = require("./string/reverseWords.js");
// KalHomeWork
var isSingle = require("./KalHomeWork/homeWork1/isSingle.js");
// Arrays
var countElements = require("./arrays/functionsPractice/countElements.js");
var applyOnTheArray = require("./arrays/functionsPractice/applyOnTheArray.js");
var arrayUtils = require("./arrays/utils.js");
var binarySearch = require("./arrays/binarySearch.js");
var isSorted = require("./arrays/isSorted.js");
var mergeSortedArrays = require("./arrays/mergeSortedArrays.js");
var sumOfTheArray = require("./arrays/sumOfTheArray.js");
var anchorArray = require("./arrays/anchorArray.js");
var sortArray = require("./arrays/sortArray.js");
var quickSort = require("./arrays/quickSort.js");
// To run a different module just change this line and make sure
// the module exports the "run" function.
var moduleToRun = reverseWords;

moduleToRun.run();