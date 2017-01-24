// Move the numbers  which are less than pivot on the left side of the pivot, bigger than pivot to the right of it 
function pivotSort(array, startIndex, endIndex) {
      var pivotIndex = startIndex;
      var currentIndex = startIndex + 1;
      for (; currentIndex <= endIndex; currentIndex++) {
        if (array[pivotIndex] > array[currentIndex]) {

            // Swap when smaller number is positioned straight after the pivot
            if (currentIndex == pivotIndex + 1) {
                var tmp = array[pivotIndex];
                array[pivotIndex] = array[currentIndex];
                array[currentIndex] = tmp;
            } 
            
            // Swap when smaller number isn't positioned next to the pivot
            else {
                var tmp = array[pivotIndex];
                array[pivotIndex] = array[currentIndex];
                array[currentIndex] = array[pivotIndex + 1];
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
    quickSort(array, pivotIndex + 1, endIndex); }

function test() {
    var array = [4, 7, 1, 3, 8, 0, 6, 0];
    quickSort(array, 0, array.length - 1);
    console.log(array);
}

module.exports = {
    run: test
}
