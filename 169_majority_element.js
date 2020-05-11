const majorityElement = function(nums) {
	let count = 0;
	let cursor = 0;
	for (let index = 0; index < nums.length; index++) {
		if (count === 0) {
			cursor = nums[index];
			count = count + 1;
		} else if (cursor === nums[index]) {
			count = count + 1;
		} else if (cursor !== nums[index]) {
			count = count - 1;
		}
	}
	return cursor;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
