// const searchInsert = function(nums, target) {
// 	let ans;
// 	for (let index = 0; index < nums.length; index++) {
// 		if (target <= nums[index]) {
// 			ans = index;
// 			break;
// 		}
// 	}
// 	if (ans !== 0 && !ans) {
// 		return nums.length;
// 	}
// 	return ans;
// };

function searchInsert(nums, target) {
    let idx = -1;
    let iMin = 0;
    let iMax = nums.length - 1;
    if (nums[iMax] < target) {
        return iMax + 1
    } else if (nums[iMax] < target) {
        return iMax;
    }
    if (nums[iMin] >= target) {
        return iMin;
    }

    while (iMin <= iMax) {
        // console.log("--------------");
        // console.log("iMin => " + iMin);
        // console.log("iMax => " + iMax);
        let iMid = Math.floor((iMin + iMax) / 2);
        console.log(iMid);
        if (nums[iMid] === target) {
            idx = iMid;
            break;
        } else if (nums[iMid] < target) {
            iMin = iMid + 1;
        } else {
            iMax = iMid - 1;
        }
    }
    if (idx >= 0) {
        return idx
    } else {
        return iMax + 1;
    }
}

console.log(searchInsert([1, 3, 5, 6], 8));
console.log(searchInsert([2, 3, 5, 6], 1));
console.log(searchInsert([2, 3, 5, 6], 2));
// console.log(searchInsert([1], 1));
// console.log(searchInsert([1, 3, 5, 6], 5));
// console.log(searchInsert([1, 3, 5, 6], 7));
