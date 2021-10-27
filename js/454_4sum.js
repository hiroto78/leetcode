/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let count = 0;
    let map = {};
    for (var i = 0; i < nums1.length; i++) {
        for (var j = 0; j < nums2.length; j++) {
            const sum = nums1[i] + nums2[j];
            if (map[sum + ""]) {
                map[sum + ""] = map[sum + ""] + 1;
            } else {
                map[sum + ""] = 1;
            }
        }
    }
    for (var i = 0; i < nums3.length; i++) {
        for (var j = 0; j < nums4.length; j++) {
            const sum = nums3[i] + nums4[j];
            if (sum > 0 ) {
                if(map["-" + sum + ""]) {
                    count = count + map["-" + sum + ""];
                }
            } else {
                if(map[Math.abs(sum) + ""]) {
                    count = count + map[Math.abs(sum) + ""];
                }

            }
        }
    }

    return count;
};
console.log(fourSumCount([1,2], [-2,-1], [-1,2], [0,2])); //2
console.log(fourSumCount([0], [0], [0], [0])); //1
console.log(fourSumCount([-1,-1], [-1,1],[-1,1],[1,-1])); //6
