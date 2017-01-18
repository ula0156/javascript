function fib(n) {
	if ((n == 1) || (n == 2)) {
		return 1;
	}
	
	var sum = fib(n-1) + fib(n-2);
	
	return sum;
}

function test() {
	var index = 4;
	var result = fib(index);

	console.log("Fibonacci number " + index + " is: " + result);
}

module.exports = {
    run: test
}