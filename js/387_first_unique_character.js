/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const arr = s.split('');
    let ngList = [];
    for (let i = 0; i < arr.length; i++) {
        if (ngList[i]) {
            continue;
        }
        let unique = 1;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                unique = 0;
                ngList[j] = 1;
                continue;
            }
        }
        if (unique) {
            return i;
        }
    }
    return -1;
};
console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabbb"));
