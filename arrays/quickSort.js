// Move the numbers  which are less than pivot on the left side of the pivot, bigger than pivot to the right of it
function pivotSort(array, startIndex, endIndex) {
      var pivotIndex = startIndex;
      for (var i = startIndex + 1; i <= endIndex; i++) {
        if (array[pivotIndex] > array[i]) {

            // Swap when smaller number is positioned stright after the pivot
            if (i == pivotIndex + 1) {
                var tmp = array[pivotIndex];
                array[pivotIndex] = array[i];
                array[i] = tmp;
            } 
            
            // Swap when smaller number isn't positioned after the pivot
            else {
                var tmp = array[pivotIndex];
                array[pivotIndex] = array[i];
                array[i] = array[pivotIndex + 1];
                array[pivotIndex + 1] = tmp;
            }

            pivotIndex++;
        }
    }

    return pivotIndex;
}

// Sorts the section [startIndex...endIndex] of the array.
function quickSort(array, startIndex, endIndex) {
    if (endIndex <= startIndex) {
        return;
    }

    // Arrange the elements around startIndex element.
    var pivotIndex = pivotSort(array, startIndex, endIndex);

    // Sort the elements on the left side of the pivot.    
    quickSort(array, startIndex, pivotIndex - 1);

    // Sort the elements on the right side of the pivot.
    quickSort(array, pivotIndex + 1, endIndex);
}

function test() {
    var array = [4, 7, 1, 3, 8, 0, 6, 0];
    quickSort(array, 0, array.length - 1);
    console.log(array);
}

module.exports = {
    run: test
}

