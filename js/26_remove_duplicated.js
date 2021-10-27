/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const underscore = '_';
  let ans = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === undefined || nums[i] === underscore) break;
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      nums.push(underscore);
      i = i - 1;
      ans = ans + 1;
    }
  }
  console.log(nums);
  return nums.length - ans;
};
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
// console.log(removeDuplicates([1,1,2]));
