'use strict'

function pivotSort(arr) {
    let currentWordIndex = 0;
    let pivotIndex = 0;
    for (; currentWordIndex < arr.length; currentWordIndex++) {
        if (arr[pivotIndex] > arr[currentWordIndex]) {
            if (pivotIndex + 1 == currentWordIndex) { 
                // pivot has a neighour on the right and it's very next index
                let tmp = arr[pivotIndex];
                arr[pivotIndex] = arr[currentWordIndex];
                arr[currentWordIndex] = tmp;
            } else {
                //  pivot has a neighour on the right and it's not very next index
                let tmp = arr[pivotIndex];
                arr[pivotIndex] = arr[currentWordIndex];
                arr[currentWordIndex] = arr[pivotIndex + 1];
                arr[pivotIndex + 1] = tmp;
            }
            pivotIndex++;
        }
    }

    return arr;
}


function test() {   
                // 0, 1, 2, 3, 4, 5
    let numbers = [3, 5, 1, 4, 0, 6]
    console.log(pivotSort(numbers));
}

module.exports = {
    run: test
}