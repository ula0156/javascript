function anchorArray(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[0] > array[i]) {
            newArray.push(array[i]);
        } 
    } 
    newArray.push(array[0]);


    for (var j = 1; j < array.length; j++) {
        if (array[0] <= array[j]) {
            newArray.push(array[j]);
        }
    }
    return newArray;
}

function test() {
    var numbers = [4, 2, 7, 8, 9, 1, 6, 0];
    console.log(anchorArray(numbers));
}

module.exports = {
    run: test
}