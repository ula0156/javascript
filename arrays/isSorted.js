// isSorted recursive function
function isSorted1(array) {
    if (array.length == 0) {
        return true;
    } else if (array[0] > array[1]) {
        return false;
    } else {
        return isSorted1(array.splice(1, array.length - 1))
    }
}

// isSorted non recursive function
function isSorted2(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= array[i + 1]) {
            return false;
        }
    }

    if (array[i] < array[i + 1]) {
        return true;
    }

    return true;
}

function test1() {
    var array = [1,2,4,10,8,9];
    console.log("Array is sorted: " + isSorted1(array));
}

function test2() {
    var array = [1,2,4,6,8,9];
    console.log("Array is sorted: " + isSorted2(array));
}

module.exports = {
    run: test1
}