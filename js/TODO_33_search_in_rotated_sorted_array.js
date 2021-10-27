/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const pivotIndex = Math.floor(nums.length / 2);
    if (nums[nums.length - 1] === target) {
        return nums.length - 1;
    }
    if (nums[pivotIndex] === target) {
        return pivotIndex;
    }


    if (nums[pivotIndex] > target && nums[nums.length - 1] > target) {
        // 後半にある
        // 通常のソートされた配列
        console.log(nums.slice(pivotIndex + 1, nums.length));
        // return search(nums.slice(pivotIndex + 1, nums.length), target) + pivotIndex;
    }
    if (nums[pivotIndex] < target && nums[nums.length - 1] > target) {
        console.log(nums.slice(pivotIndex + 1, nums.length));
        // 後半にある
    }

    if (nums[pivotIndex] > target && nums[nums.length - 1] < target) {
        console.log(nums.slice(0, nums.length));
        // 前半にある
    }
    if (nums[pivotIndex] < target && nums[nums.length - 1] < target) {
        console.log(nums[pivotIndex]);
        console.log(nums.slice(0, pivotIndex));
        // 前半にある
    }
};

// console.log(search([4,5,6,7,0,1,2], 0)); // 4
// console.log(search([7,0,1,2,4,5,6], 5)); // 5
// console.log(search([4,5,6,7,0,1,2], 4)); // 0
console.log(search([7,0,1,2,4,5,6], 7)); // 0


// console.log(search([1,2,4,5,6,7,0], 0)); // 4
