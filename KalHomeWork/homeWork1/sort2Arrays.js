'use strict';

function sort2Arrays(arr1, arr2) { 
    var j = arr2.length - 1;
    for (let i = arr1.length - 1; i >= 0;) {
        //if last element in the arr1  > than last element in the arr2
        if (arr1[i - j - 1] > arr2[j]) {
            arr1[i] = arr1[i - j - 1];
             arr1[i - j - 1] = 0;
        } else {
            arr1[i] = arr2[j];
                if (j > 0) {
                    j--;
                }
                else {
                    return arr1;
                }
        }

        i--;
    }
}


function sort2(arr1, arr2) {
    var index1 = arr1.length - arr2.length - 1;
    var index2 = arr2.length - 1;
    var pos = arr1.length - 1;
    while (index2 >= 0) {
        if ((index1 != -1) && (arr1[index1] > arr2[index2])) {
            arr1[pos] = arr1[index1];
            index1--;
        } else {
            arr1[pos] = arr2[index2];
            index2--;
        }
        
        pos--;
    }
}


function test() {
    var arr1 = [2, 7, 12, 30, 40, 0, 0, 0, 0];
    var arr2 = [15, 20, 22, 45];
    sort2Arrays(arr1,arr2);
    console.log(arr1);
}

module.exports = {
    run: test
}  

