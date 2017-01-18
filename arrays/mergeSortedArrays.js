// 1st solution with for loop
function merging1(arrA,arrB) {
    var newArr = [];
    var i = 0;
    var j = 0;
    for (; i < arrA.length;) {
        // if arrB is shoter than arrA
        if (j >= arrB.length) {
            newArr.push(arrA[i]);
            i++;
        }

        for (; j < arrB.length;) {
            if (arrA[i] < arrB[j]) {
                newArr.push(arrA[i]);
                i++;
            } else {
                newArr.push(arrB[j]);
                j++;
            }
        }
    }

    return newArr;
}

//2nd solution with while loop (more efficiant)
function merging2(a,b) {
    var newArr = [];
    var i = 0;
    var j = 0;
    while ((i < a.length) && (j < b.length)) {
        if (a[i] < b[j]) {
            newArr.push(a[i]);
            i++;
        } else {
            newArr.push(b[j]);
            j++;
        }
    }

    // if arr b is shoter than arr a
    if (j >= b.length) {
        newArr.push(a[i]);
        i++;
    }

    return newArr;
}

function test1() {
    var arrA = [1,3,5,7];
    var arrB = [2,4];
    var result = merging1(arrA,arrB);
    console.log("Merged arrays: " + result);
}

function test2() {
    var a = [1,3,5,7];
    var b = [2,4,6,8];
    var result = merging2(a,b);
    console.log("Merged arrays: " + result);
}

module.exports = {
    run: test1
}