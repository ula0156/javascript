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
var printNumCombinations = require("./recursion/printNumCombinations.js");
var printingCombinations = require("./recursion/printingCombinations.js");

// String
var reverseWords = require("./string/reverseWords.js");
var makePalindrome = require("./string/makePalindrome.js");
var mathExpression = require("./string/mathExpression.js");
var LCS = require("./string/LCS.js");
var longestComSubseq = require("./string/longestComSubseq.js");
var replaceSpace = require("./string/replaceSpace.js");
var longestSubString = require("./string/longestSubString.js");
var strToNum = require("./string/strToNum.js");

// KalHomeWork
var isSingle = require("./KalHomeWork/homeWork1/isSingle.js");
var singleNumber = require("./recursion/singleNumber.js");
var sort2Arrays = require("./KalHomeWork/homeWork1/sort2Arrays.js");
var modifyStr = require("./KalHomeWork/homeWork1/modifyStr.js");
var modifyStr2 = require("./KalHomeWork/homeWork1/modifyStr2.js");


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
var uniqueNumbers = require("./arrays/set_mapPractice/uniqueNumbers.js");
var returnDup = require("./arrays/set_mapPractice/returnDup.js");
var sumOfDigits = require("./arrays/sumOfDigits.js");
var pivotSort = require("./arrays/pivotSort.js");
var maxConsequentSum = require("./arrays/maxConsequentSum.js");
var longestIncreasingSubsequence = require("./arrays/longestIncreasingSubsequence.js");
var zigzag = require("./arrays/zigzag.js");
var mergeSort = require("./arrays/mergeSort.js");
var quickSort = require("./arrays/quickSort.js");
var biggestSum = require("./arrays/biggestSum.js");

// Other
//var wordContext = require("./other/wordContex.js");
var findLocation = require("./other/findLocation.js");
var stack = require("./other/stack.js");


// Linked lists
var circularList = require("./linkedLists/circularList.js");
var reverseLinkedList = require("./linkedLists/reverseLinkedList");
var sort2LinkedLists = require("./linkedLists/sort2LinkedLists.js");
var singlyLinkedList = require("./linkedLists/singlyLinkedList.js");
var kthElementFromLinkedList = require("./linkedLists/kthElementFromLinkedList.js");
var removeDup = require("./linkedLists/removeDup.js");
var changeOrder = require("./linkedLists/changeOrder.js");
var isListPalindrom = require("./linkedLists/isListPalindrom.js")

//queue
var queueImplementation = require("./queue/queueImplementation.js");

// Trees
var BST = require("./trees/BST.js");
var BSToutOfList = require("./trees/BSToutOfList");
// To run a different module just change this line and make sure
// the module exports the "run" function.
var moduleToRun = strToNum;

moduleToRun.run();