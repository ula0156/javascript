function sortArray(array) {
    // Fill every position to the minimum number to the right of it.
    for (var i = 0; i < array.length; i++) {
        var minIndex = i;
        
        // Find the minimum.
        for (var j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }

        // Exchange element i with minimum.
        var tmp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = tmp;
    }
}


function test() {
    var array = [4, 2, 7, 8, 9, 1, 6, 0];
    sortArray(array);
    console.log(array);
}

module.exports = {
    run: test
}
