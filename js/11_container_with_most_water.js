/**
 * @param {number[]} height
 * @return {number}
 */
// Too slow
// var maxArea = function(height) {
//     let max = 0;
//     for (var i = 0; i < height.length; i++) {
//         for (var j = i+1; j < height.length; j++) {
//             const minheight = height[j] > height[i] ? height[i] : height[j];
//             const width = j - i;
//             const amount = minheight*width;
//             max = amount > max ? amount : max;
//         }
//     }
//     return max;
// };
var maxArea = function(height) {
    let max = 0;
    let i = 0;
    let j = height.length;
    while (i < j) {
        const length = height[j] > height[i] ? height[i] : height[j];
        const width = j - i;
        const amount = length*width;
        max = amount > max ? amount : max;
        if (height[j] > height[i]) {
            i = i+1;
        } else {
            j = j-1;
        }
    }
    return max;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1])); // 1
console.log(maxArea([1,2,1])); // 2
console.log(maxArea([4,3,2,1,4])); // 16
