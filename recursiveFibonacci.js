function recursiveFibonacci(n) {
	if ((n == 1) || (n == 2)) {
		return 1;
	}
	
	var sum = fibonacci(n-1) + fibonacci(n-2);
	
	return sum;
}