function sumNum(arr, ind) {
    if (ind == arr.length) {
        return 0;
    } else {
        return arr[ind] + sumNum(arr, ind + 1);
    }
}

function test() {
    var result = sumNum([1,2,4,7,9], 0);
    console.log("The sum is: " + result);
}

module.exports = {
    run: test
}