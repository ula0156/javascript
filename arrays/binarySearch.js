function binarySearch(sInd, eInd, numbers, n) {
    // if the array is empty -> return false, there is not looking number in the array
    if (numbers.length == 0) {
        // if ther is only one number left -> check if it's looking number
        return false;
    } 
    
    if (sInd == eInd) {
        return numbers[sInd] == n;
    }

    // calculating middle index of the array
    var middlePoint = Math.round((sInd + eInd) / 2);

    // if middlePoint is the looking number -> return true
    if (numbers[middlePoint] == n) {
        return true;
    }
    
    if (middlePoint == eInd) {
        return numbers[middlePoint] == n;
    } else if (n < numbers[middlePoint]) {
        // if looking number is < middle number, search for number in the 1st half of the array
        return binarySearch(sInd, middlePoint - 1, numbers, n);
    } else {
        // if looking number is > middle number, search for number in the 2nd half of the array
        return binarySearch(middlePoint + 1, eInd, numbers, n);
    }
}
      
function test() {
    //  [0,1,2,3,4,5,6,7,8,9, 10,11,] - length 12
    var arr = [1,2,3,4,5,6,7,8,9,14,16,20];
    binarySearch(0, arr.length - 1, arr, 10);
}

module.exports = {
    run: test
}