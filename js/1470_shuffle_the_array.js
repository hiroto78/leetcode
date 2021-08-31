/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    ans = [];
    for (var i = 0; i < n; i++) {
        ans.push(nums[i]);
        ans.push(nums[i + n]);
    }
    return ans;
};
console.log(shuffle([2,5,1,3,4,7], 3)); // [2,3,5,4,1,7]
console.log(shuffle([1,2,1,2], 2)); // [2,3,5,4,1,7]
