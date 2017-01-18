// Returns the minimum number from the array but it modifies the array
function recursiveMin(numbers) {
	if (numbers.length == 0) {
		return undefined;
	} else if (numbers.length == 1) {
		return numbers[0];
	} else {
		return Math.min(numbers[0], recursiveMin(numbers.splice(1, numbers.length - 1)));
	}
}

// Returns the minimum number from the array but it does no modify the array
function recursiveMinNoRemove(start, numbers) {
	if (numbers.length == 0) {
		return undefined;
	} else if (start + 1 == numbers.length) {
		return numbers[start];
	} else {
		return Math.min(numbers[start], recursiveMinNoRemove(start + 1, numbers));
	}
}

function test() {
	console.log(recursiveMin([]));
	var values = [12, 9, 3, 4, 5];
	console.log(recursiveMin(values));
	console.log(recursiveMinNoRemove(0, [12, 9, 3, 4, 5]));
}

module.exports = {
    run: test
}