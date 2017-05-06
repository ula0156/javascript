'use strict';

function merge(left, right, arr) {
    let i = 0;
    let j = 0;
    let k = 0;
    while ((i < left.length) && (j < right.length)) {
        if (left[i] < right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    while(i < j) {
        arr[k] = left[i];
        i++;
        k++;
    }

    while(j < i) {
        arr[k] = right[j];
        j++;
        k++;
    }
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return;
    }

    let mid = arr.length / 2;
    let left = [];
    let right = [];
    for (let i = 0; i < mid; i++) {
        left.push(arr[i]);
    }

    for (let j = mid; j < arr.length; j++) {
        right.push(arr[j]);
    }

    mergeSort(left);
    mergeSort(right);
    merge(left,right,arr);
    
    return arr;
}

function test() {
    let array = [5, 4, 7, 3, 6, 9, 2, 1];
    console.log(mergeSort(array));
}
  
    

module.exports = {
    run: test
}