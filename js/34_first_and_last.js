/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let ans = [-1, -1];
  if (nums.length === 0 ) return ans;
  if (nums[0] > target) return ans;
  if (nums[nums.length - 1] < target) return ans;

  let smallIndex = 0;
  let bigIndex = nums.length - 1;

  let smallDone = 0;
  let bigDone = 0;

  while (smallIndex <= bigIndex) {
    if (nums[smallIndex] === target) {
      if (!smallDone) {
        ans[0] = smallIndex;
        smallDone = 1;
      }
      if (smallDone && !bigDone) {
          ans[1] = smallIndex;
      }
    }
    if (nums[bigIndex] === target) {
      if (!bigDone) {
        ans[1] = bigIndex;
        bigDone = 1;
      }
      if (bigDone && !smallDone) {
          ans[0] = bigIndex;
      }
    }
    // if (ans[0] >= 0 && ans[1] >= 0) {
    if (smallDone && bigDone) {
      break;
    }
    bigIndex = bigIndex - 1;
    smallIndex = smallIndex + 1;

    // if (nums[smallIndex] !== target && nums[bigIndex] !== target) {
    //   bigIndex = bigIndex - 1;
    //   smallIndex = smallIndex + 1;
    // } else if (nums[smallIndex] === target) {
    //   bigIndex = bigIndex - 1;
    // } else if (nums[bigIndex] === target) {
    //   smallIndex = smallIndex + 1;
    // }
  }

  // for (var i = 0; i < nums.length; i++) {
  //   if (nums[i] === target) {
  //     if (ans[0] < 0) {
  //       ans[0] = i;
  //       ans[1] = i;
  //     } else {
  //       ans[1] = i;
  //     }
  //   } else if (nums[i] > target) {
  //     break;
  //   }
  // }
  return ans;
};
console.log(searchRange([2,2], 2)); // [0.1]
console.log(searchRange([1,3], 3)); // [1,1]
console.log(searchRange([1,3], 1)); // [0.0]
console.log(searchRange([5,7,7,8,10], 8)); // [3,3]
console.log(searchRange([5,7,7,8,8,8,8,8,8,10], 8)); // [3,8]
console.log(searchRange([5,7,7,8,8,10], 8)); // [3,4]
console.log(searchRange([5,7,7,8,8,10], 6)); // [-1,-1]
console.log(searchRange([], 0)); // [-1,-1]
