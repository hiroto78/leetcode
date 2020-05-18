const missingNumber = function(nums) {
	const sum = (nums.length)*(nums.length+1)/2;
	let sum2 = 0;
	nums.forEach((element) => {
		sum2 = sum2 + element;
	});
	return sum - sum2;
};
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
