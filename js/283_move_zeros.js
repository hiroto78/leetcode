// 全部の numx の値を変えていく
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var movezeroes = function(nums) {
//     let zerocount = 0;
//     for (var i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             nums.splice(i, 1);
//             zerocount = zerocount + 1;
//         }
//     }
//     // nums.push(0);
//     // nums.push(0);
//     // return nums;
// };

var moveZeroes = function(nums) {

    let nonZeroIndex = 0;

    for(let i=0; i < nums.length; i++){
        if(nums[i] != 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex ++;
        }
    }

    for(let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }

};
moveZeroes([0,1,0,3,12]); // [1,3,12,0,0]
// console.log(moveZeroes([0])); // [0]
