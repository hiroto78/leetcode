/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const sorted = heights.slice().sort(function(a,b){
        if( a < b ) return -1;
        if( a > b ) return 1;
        return 0;
    });
    // console.log(sorted)
    // console.log(heights)
    let ans = 0;
    for(var i = 0; i < heights.length; i++) {
        if (heights[i] != sorted[i]) {
            ans = ans + 1;
        }
    }
    return ans;
};
console.log(heightChecker([1,1,4,2,1,3])); // 3
// console.log(heightChecker([5,1,2,3,4])); // 5
