/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    if (n === 1) {
        return [0];
    }
    if (n === 2) {
        return [1, -1];
    }

    ans = [];
    sum = 0;
    for (var i = 0; i < n - 1; i++) {
        ans.push(i);
        sum = sum + i;
    }
    ans.push(0 - sum);
    return ans;
};

console.log(sumZero(1000));
