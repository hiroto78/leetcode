/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let ans = [];
  let map = {};
  let minus = [];
  let plus = [];

  // divide minus items and plus items
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      if (map[nums[i]] === undefined || map[nums[i]] < 4) {
        map[nums[i]] = (map[nums[i]] || 0) + 1;
        plus.push(nums[i]);
      }
    } else {
      if (map[nums[i]] === undefined || map[nums[i]] < 4) {
        map[nums[i]] = (map[nums[i]] || 0) + 1;
        minus.push(nums[i]);
      }
    }
  }
  plus.sort(function(a,b){
    if( a < b ) return -1;
    if( a > b ) return 1;
    return 0;
  });
  minus.sort(function(a,b){
    if( a < b ) return -1;
    if( a > b ) return 1;
    return 0;
  });
  // console.log(plus);
  // console.log(minus);
  delete map;
  let map = {};

  // 2 items from minus and 2 item from plus
  for (var i = 0; i < plus.length-1; i++) {
    for (var j = i+1; j < plus.length; j++) {
      for (var k = 0; k < minus.length-1; k++) {
        for (var l = k+1; l < minus.length; l++) {
          // console.log('==========================');
          // console.log(plus[i]);
          // console.log(plus[j]);
          // console.log(minus[k]);
          // console.log(minus[l]);
          const sum = plus[i] + plus[j] + minus[k] + minus[l];
          if (sum > target) {
            break;
          }
          if (sum < target) {
            continue;;
          }
          const tmp = [plus[i], plus[j], minus[k], minus[l]];
          tmp.sort(function(a,b){
            if( a < b ) return -1;
            if( a > b ) return 1;
            return 0;
          });
          if (sum === target && !map[tmp.join('')]) {
            ans.push(tmp);
            map[tmp.join('')] = 1;
          }
        }
      }
    }
  }

  delete map;
  let map = {};
  // 3 items from minus and 1 item from plus
  for (var i = 0; i < minus.length-2; i++) {
    for (var j = i+1; j < minus.length-1; j++) {
      for (var k = j+1; k < minus.length; k++) {
        for (var l = 0; l < plus.length; l++) {
          const sum = minus[i] + minus[j] + minus[k] + plus[l];
          if (sum > target) {
            break;
          }
          if (sum < target) {
            continue;
          }
          const tmp = [minus[i], minus[j], minus[k], plus[l]];
          tmp.sort(function(a,b){
            if( a < b ) return -1;
            if( a > b ) return 1;
            return 0;
          });
          if (sum === target && !map[tmp.join('')]) {
            ans.push(tmp)
            map[tmp.join('')] = 1;
          }
        }
      }
    }
  }

  delete map;
  let map = {};
  // 1 items from minus and 3 item from plus
  for (var i = 0; i < plus.length-2; i++) {
    for (var j = i+1; j < plus.length-1; j++) {
      for (var k = j+1; k < plus.length; k++) {
        for (var l = 0; l < minus.length; l++) {
          // console.log('==========================');
          // console.log(plus[i]);
          // console.log(plus[j]);
          // console.log(plus[k]);
          // console.log(minus[l]);
          const sum = plus[i] + plus[j] + plus[k] + minus[l];
          if (sum > target) {
            break;
          }
          if (sum < target) {
            continue;;
          }
          const tmp = [plus[i], plus[j], plus[k], minus[l]];
          tmp.sort(function(a,b){
            if( a < b ) return -1;
            if( a > b ) return 1;
            return 0;
          });
          if (sum === target && !map[tmp.join('')]) {
            ans.push(tmp);
            map[tmp.join('')] = 1;
          }
        }
      }
    }
  }
  delete map;
  let map = {};
  // 4 plus
  if (target >= 0) {
    for (var i = 0; i < plus.length-3; i++) {
      for (var j = i+1; j < plus.length-2; j++) {
        for (var k = j+1; k < plus.length-1; k++) {
          for (var l = k+1; l < plus.length; l++) {
            // console.log('==========================');
            // console.log(plus[i]);
            // console.log(plus[j]);
            // console.log(plus[k]);
            // console.log(plus[l]);
            const sum = plus[i] + plus[j] + plus[k] + plus[l];
            if (sum > target) {
              break;
            }
            if (sum < target) {
              continue;;
            }
            const tmp = [plus[i], plus[j], plus[k], plus[l]];
            tmp.sort(function(a,b){
              if( a < b ) return -1;
              if( a > b ) return 1;
              return 0;
            });
            if (sum === target && !map[tmp.join('')]) {
              ans.push(tmp);
              map[tmp.join('')] = 1;
            }
          }
        }
      }
    }
  } else { // 4 minus
    for (var i = 0; i < minus.length-3; i++) {
      for (var j = i+1; j < minus.length-2; j++) {
        for (var k = j+1; k < minus.length-1; k++) {
          for (var l = k+1; l < minus.length; l++) {
            // console.log('==========================');
            // console.log(minus[i]);
            // console.log(minus[j]);
            // console.log(minus[k]);
            // console.log(minus[l]);
            const sum = minus[i] + minus[j] + minus[k] + minus[l];
            if (sum > target) {
              break;
            }
            if (sum < target) {
              continue;;
            }
            const tmp = [minus[i], minus[j], minus[k], minus[l]];
            tmp.sort(function(a,b){
              if( a < b ) return -1;
              if( a > b ) return 1;
              return 0;
            });
            if (sum === target && !map[tmp.join('')]) {
              ans.push(tmp);
              map[tmp.join('')] = 1;
            }
          }
        }
      }
    }
  }
  return ans;
};
// console.log(fourSum([1,0,-1,0,-2,2], 0)); // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// console.log(fourSum([2,2,2,2], 8)); // [[2,2,2,2]]
// console.log(fourSum([-3,-1,0,2,4,5], 0)); // [[-3,-1,0,4]]
console.log(fourSum([-1,0,-5,-2,-2,-4,0,1,-2], -9));
