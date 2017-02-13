// Define a constructor function 
function Shoes(size, color, gender) {
    this.size = size;
    this.color = color;
    this.gender = gender;
}
// Define a method on the constructor(Shoes) prototype
Shoes.prototype.putOn = function() {
    console.log("You just put " + this.color + "shoes on");
}
// Create a new constructor 
var Boots = function(size, color, gender, hight) {
    Shoes.call(this, size, color, gender);
    this.hight = hight;
};
// 
Boots.prototype = Object.create(Shoes.prototype);
Boots.prototype.laceUp = function() {
    console.log("Don't forget to lace up " + this.color + "!");
}

function test() {
    console.log("hello");
    // create a Boot instance 
	var boots1 = new Boots(7, "green", "female", "20 cm");
    boots1.laceUp();
    
}

module.exports = {
    run: test
}