const twoSum = function(nums, target) {
	const ret = [];
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				ret.push(i);
				ret.push(j);
			}
		}
	}
	return ret;
};
console.log(twoSum([2, 7, 11, 15], 9));
