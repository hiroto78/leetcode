/**
 * @param {string} digits
 * @return {string[]}
 */
const map = [
    [],
    [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z'],
];
var combineArray = function(arr1, arr2) {
    let arr = [];
    for (var i = 0; i < arr1.length; i++){
        for (var j = 0; j < arr2.length; j++){
            arr.push(arr1[i] + arr2[j]);
        }
    }
    return arr;
}
var letterCombinations = function(digits) {
    if (digits === '') {
    return [];
    }
    const arr = digits.split('');
    const list = [];
    for (var i = 0; i < arr.length; i++) {
        list.push(map[arr[i]-0]);
    }
    let ans = list[0];
    for (var i = 1; i < list.length; i++) {
        ans = combineArray(ans, list[i])
    }
    return ans;
};
console.log(letterCombinations("23"));
console.log(letterCombinations("2"));
console.log(letterCombinations(""));
