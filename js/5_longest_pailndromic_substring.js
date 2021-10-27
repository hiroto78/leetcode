/**
 * @param {string} s
 * @return {string}
 */
function searchLongest(leftIndex, rightIndex, centerStr, s) {
    let stop = 0;
    let ans = s[leftIndex] + centerStr + s[rightIndex];
    while(!stop) {
        leftIndex = leftIndex - 1;
        rightIndex = rightIndex + 1;
        if (leftIndex < 0 || rightIndex > s.length) {
            stop = 1;
            break;
        }
        if (s[leftIndex] === s[rightIndex]) {
            ans = s[leftIndex] + ans + s[rightIndex];
        } else {
            stop = 1;
        }
    }
    return ans;
}

var longestPalindrome = function(s) {
    if (s.length === 1) {
        return s;
    }
    s = s.split('');

    let ans = '';

    // abba
    for (var i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            const left = i;
            const right = i+1;
            const str = searchLongest(i, i+1, '', s);
            ans = (ans.length > str.length) ? ans : str;
        }
    }

    // abcba
    for (var i = 0; i < s.length - 2; i++) {
        if (s[i] === s[i + 2]) {
            const left = i;
            const right = i+2;
            const str = searchLongest(i, i+2, s[i+1], s);
            ans = (ans.length > str.length) ? ans : str;
        }
    }
    // s = 'abc'
    if (ans === '') {
        return s[0];
    }
    return ans;

};
console.log(longestPalindrome("abadd")); // aba
// console.log(longestPalindrome("babad"));
// console.log(longestPalindrome("a"));
// console.log(longestPalindrome("bb"));
