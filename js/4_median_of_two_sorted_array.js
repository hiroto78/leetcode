/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let concat = [];
    while (nums1.length !== 0 || nums2.length !== 0) {
        if (nums1[0] > nums2[0] || nums1[0] === undefined) {
            concat.push(nums2.shift())
        } else if (nums1[0] < nums2[0] || nums2[0] == undefined) {
            concat.push(nums1.shift())
        } else { // nums1[0] === nums2[0]
            concat.push(nums1.shift())
            concat.push(nums2.shift())
        }
    }
    if (concat.length % 2 === 0) {
        const medianIndex2 = Math.floor(concat.length / 2);
        const medianIndex1 = medianIndex2 - 1;
        const median = (concat[medianIndex1] + concat[medianIndex2]) / 2;
        return median.toFixed(5);
    } else {
        const medianIndex = Math.floor(concat.length / 2);
        return concat[medianIndex].toFixed(5);
    }
};
console.log(findMedianSortedArrays([1,2], [3, 4]));
console.log(findMedianSortedArrays([0,0], [0, 0]));
console.log(findMedianSortedArrays([], [1]));
