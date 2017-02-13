function selectionSort(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        var minIndex = i;
        for (var j = i + 1; j < numbers.length; j++) {
            if (numbers[minIndex] > numbers[j]) {
                minIndex = j;
            }
        }
        var tmp = numbers[i];
        numbers[i] = numbers[minIndex];
        numbers[minIndex] = tmp;
    }
    return numbers;
}


function test() {
    var array = [4, 7, 1, 3, 8, 0, 6];
    selectionSort(array);
    console.log(array);
}

module.exports = {
    run: test
}
