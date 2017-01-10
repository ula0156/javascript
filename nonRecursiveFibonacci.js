function fib(n) {
	if ((n == 1) || (n == 2)) {
		return 1;
	}
	
	var fst = 1;
	var snd = 1;
	
	for (var i = 3; i <= n; i++) {
		var current = fst + snd;
		fst = snd;
		snd = current;
	}
	
	return snd;
}