const isPalindrome = function(x) {
	if (x === 0) {
		return true;
	}
	if (x < 0) {
		return false;
	}
	if (x % 10 === 0) {
		return false;
	}
	x = x + '';
	const y = x.split('');
	y.reverse();
	if (x === y.join('')) {
		return true;
	}
	return false;
};

console.log(isPalindrome(123));
