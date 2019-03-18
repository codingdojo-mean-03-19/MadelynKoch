

function fib() {

	var val1 = 0;
	var val2 = 1;

	function nacci() {
		var temp = val1 + val2;
		console.log(temp);
		val1 = val2;
		val2 = temp;
	}

	return nacci;
}

var fibonacci = fib();

fibonacci()
fibonacci()
fibonacci()
fibonacci()
