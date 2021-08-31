// なぜか leetcode 側で回答が受け付けられない
var merge = function(nums1, m, nums2, n) {
    let marray = [];
    let narray = [];
    for (let i = 0; i < m; i++) {
        marray.push(nums1[i]);
    }
    for (let i = 0; i < n; i++) {
        narray.push(nums2[i]);
    }
    console.log(marray);
    console.log(narray);
    // console.log(narray.concat(marray));
    b = narray.concat(marray).sort(function(a,b){
        if( a < b ) return -1;
        if( a > b ) return 1;
        return 0;
    });
    return b;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3)); // [1,2,2,3,5,6]
// console.log(merge([1], 1, [], 0)); // [1]
