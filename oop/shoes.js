'use strict'

function Shoes(color, size) {
    this.color = color;
    this.size = size;
}

Shoes.prototype.wash = function() {
    console.log("Washing the " + this.color + " shoes.");
};

var Boots = function(color, size, type) {
    Shoes.call(this, color, size);
    this.type = type;
};

Boots.prototype = Object.create(Shoes.prototype);
Boots.prototype.laceUp = function() {
    console.log("Lacing up the " + this.type + " boots.");
}

function test() {
}

module.exports = {
    run: test
}