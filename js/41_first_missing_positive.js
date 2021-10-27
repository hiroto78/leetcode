/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 || nums[i] > nums.length) {
      continue;
    }
    map[nums[i]] = 1;
  }
  for (let i = 1; i < nums.length+1; i++) {
    if (!map[i]) {
      return i;
    }
  }
  return nums.length + 1;
};
console.log(firstMissingPositive([1,2,0]));
console.log(firstMissingPositive([3,4,-1,1]));
console.log(firstMissingPositive([7,8,9,11,12]));
