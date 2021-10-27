/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let arr1 = [];
    let arr2 = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            nums.splice(i, 1);
            arr1.push(1);
            i = i - 1;
        } else if (nums[i] === 2) {
            nums.splice(i, 1);
            arr2.push(2);
            i = i - 1;
        }
    }
    for (var i = 0; i < arr1.length; i++) {
        nums.push(1);
    }
    for (var i = 0; i < arr2.length; i++) {
        nums.push(2);
    }
};
console.log(sortColors([2,0,2,1,1,0]));
