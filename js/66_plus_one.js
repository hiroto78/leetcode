const plusOne = function(digits) {
	for (let index = digits.length - 1; index >= 0; index--) {
		if (index === digits.length - 1) {
			digits[index] = digits[index] + 1;
		}
		if (digits[index] === 10 && index !== 0) {
			digits[index] = 0;
			digits[index - 1] = digits[index - 1] + 1;
		}
		if (digits[index] === 10 && index === 0) {
			digits[index] = 0;
			digits.unshift(1);
		}
	}
	return digits;
};


console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
console.log(plusOne([9, 9, 9]));
