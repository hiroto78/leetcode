const singleNumber = function(nums) {
	let ret;
	nums.forEach((element) => {
		ret ^= element;
	});
	return ret;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
