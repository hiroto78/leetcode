const maxSubArray = function(nums) {
	let currSum = -Infinity;
	let maxSum = -Infinity;
	for (let i = 0; i < nums.length; i++) {
		currSum = Math.max(0, currSum);
		currSum += nums[i];
		maxSum = Math.max(maxSum, currSum);
	}
	return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
