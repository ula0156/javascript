'use strict';

var test = require("./test.js")
var nonRecursiveFibonacci = require("./recursion/nonRecursiveFibonacci.js");
var recursiveFibonacci = require("./recursion/recursiveFibonacci.js");
var recursiveMin = require("./recursion/recursiveMin.js");

// To run a different module just change this line and make sure
// the module exports the "run" function.
var moduleToRun = test;

moduleToRun.run();