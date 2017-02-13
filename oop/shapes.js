'use strict'

function Shape(x, y) {
    this.color = "black";
    this.centerX = x;
    this.centerY = y;
}

Shape.prototype.moveCenter = function(dx, dy) {
    this.centerX += dx;
    this.centerY += dy;
}

Shape.prototype.draw = function(context) {
}

Shape.prototype.setColor = function(color) {
    this.color = color;
}

var Rectangle = function(x, y, width, height) {
    Shape.call(this, x, y);
    this.width = width;
    this.height = height;    
}
 
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.draw = function(context) {
    context.beginPath();
    context.strokeStyle = this.color;
    context.rect(this.centerX, this.centerY, this.width, this.height);
    context.stroke();
    context.closePath();
}

function Circle(x, y, radius) {
    Shape.call(this, x, y);
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.expand = function(dr) {
    this.radius += dr;
}

Circle.prototype.draw = function(context){
    context.beginPath();
    context.strokeStyle = this.color;
    context.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
    context.stroke();
    context.closePath();
}

function test() {
    var circle1 = new Circle(2, 3, 5);
    console.log(circle1);
    circle1.moveCenter(1, -2);
    circle1.expand(2);
    console.log(circle1);
}

function draw() {
    var c = document.getElementById("board");
    var ctx = c.getContext("2d");

    var circle1 = new Circle(50, 50, 50);
    circle1.draw(ctx);
    circle1.setColor('#ffffff');
    circle1.draw(ctx);
    circle1.moveCenter(50, 50);
    circle1.expand(50);
    circle1.setColor('#ff0000');
    circle1.draw(ctx);

    var rectangle1 = new Rectangle(50, 50, 100, 100);
    rectangle1.draw(ctx);
}

if (typeof module === "undefined") 
    var module = {};

module.exports = {
    run: test
};