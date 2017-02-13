function apply(array, transformation) {
    for (var i = 0; i < array.length; i++) {
        array[i] = transformation(array[i]);
    }
}

function multiplyOnlyEvenNumBy2(number) {
    if (number % 2 == 0) {
        return number * 2;
    }

    return number;
}

function multiplyBy2(number) {
    return number * 2;
} 

function isEven(number) {
    return number % 2 == 0;
} 

function test() {
    var numbers = [4, 2, 7, 8, 9, 1, 6, 0];
    apply(numbers, multiplyOnlyEvenNumBy2);
    console.log(numbers);
    apply(numbers, isEven);
    console.log(numbers);
}

module.exports = {
    run: test
}