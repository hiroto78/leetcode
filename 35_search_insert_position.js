const searchInsert = function(nums, target) {
	let ans;
	for (let index = 0; index < nums.length; index++) {
		if (target <= nums[index]) {
			ans = index;
			break;
		}
	}
	if (ans !== 0 && !ans) {
		return nums.length;
	}
	return ans;
};

console.log(searchInsert([1, 3, 5, 6], 5));
