
/**
 * Add a new method to string prototype which counts the particular letters
 */
String.prototype.letterToCount = function(letter) {
    var count = 0;
    for (var i = 0; i < this.length; i++) {
      // why do i have to use "charAt method?"
        if (this.charAt(i).toUpperCase() == letter.toUpperCase()) {
          count++;
        }
     }

      return count;
};
// how can I check if it works?
function test() {
  var day = "It's a beautiful day, enjoy it!";
  console.log(day.letterToCount(e));
}

module.exports = {
    run: test
}
