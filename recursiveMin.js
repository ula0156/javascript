function recursiveMin(numbers) {
	if (numbers.length == 0) {
		return undefined;
	}if (numbers.length == 1) {
		return numbers[0];
	} else {
		return Math.min(numbers[0], recursiveMin(numbers.splice(1, numbers.length - 1)));
	}
}

function recursiveMinNoRemove(start, numbers) {
	if (numbers.length == 0) {
		return undefined;
	} else if (start + 1 == numbers.length) {
		return numbers[start];
	} else {
		return Math.min(numbers[start], recursiveMinNoRemove(start + 1, numbers));
	}
}

console.log(recursiveMin([]));
var values = [12, 9, 3, 4, 5];
console.log(recursiveMin(values));
console.log(recursiveMinNoRemove(0, [12, 9, 3, 4, 5]));
