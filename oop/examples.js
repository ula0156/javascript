/**
 * Shape
 */
var Shape = function(color) {
    this.color = color;
};

Shape.prototype.GetColor = function () { return this.color; };
Shape.prototype.GetArea = function () { return undefined; };
Shape.prototype.GetPerimeter = function () { return undefined; };

/**
 * Square
 */
var Square = function(side, color) {
    Shape.call(this, color);
    this.side = side;
};

Square.prototype = Object.create(Shape.prototype, {
    GetArea: {value : function () { 
        return this.side * this.side;
    }},

    GetPerimeter: {value: function () { 
        return 4 * this.side;
    }},

    toString: {value: function () { 
        return "I am a " + this.color + " square with side " + this.side;
    }}    
});

// ======================================
/*
var Clothes = function(material, color) {
    this.myMaterial = material;
    this.myColor = color;
    this.sayHello = function() {
        console.log("Hi, I'm a cloth made out of " + this.myMaterial + " and my color is " + this.myColor);
    }                                                        
}

var Hanger = function(clothes) {
    this.myClothes = clothes;
    this.sayHello = function() {
        console.log("Hi, I'm a hanger.");
        this.myClothes.sayHello();
    }
}
*/

function test() {
    var square1 = new Square(5, "red");
    console.log(square1.GetArea());
    console.log(square1.GetColor());
    console.log("hello " + square1);
}

module.exports = {
    run: test
}