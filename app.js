'use strict';

var test = require("./test.js")

// OOP
var caddMethodtoPrototype = require("./OOP/addMethodtoPrototype.js");
var oopExamples = require("./oop/examples.js");
var oopShapes = require("./oop/shapes.js");
var oopShoes = require("./oop/shoes.js");

// Recursion
var nonRecursiveFibonacci = require("./recursion/nonRecursiveFibonacci.js");
var recursiveFibonacci = require("./recursion/recursiveFibonacci.js");
var recursiveMin = require("./recursion/recursiveMin.js");

// String
var reverseWords = require("./string/reverseWords.js");
var digits = require("./strings/digit.js");

// KalHomeWork
var isSingle = require("./KalHomeWork/homeWork1/isSingle.js");
var singleNumber = require("./recursion/singleNumber.js");

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
var selectionSort = require("./arrays/selectionSort.js");

// Other
var wordContext = require("./other/wordContext.js");

// To run a different module just change this line and make sure
// the module exports the "run" function.
var moduleToRun = singleNumber;

moduleToRun.run();