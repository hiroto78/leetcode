const hammingWeight = function(n) {
	n = n.toString(2) + '';
	const list = n.split('');
	let ret = 0;
	list.forEach((element) => {
		if (element - 0) {
			ret = ret + 1;
		}
	});
	return ret;
};

console.log('hammingWeight(111111)');
console.log(hammingWeight(2147483647));
