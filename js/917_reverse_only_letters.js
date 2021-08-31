/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const arr = s.split('');
    let alphabet = [];
    for (let i = 0; i < arr.length; i++) {
        if (/[a-zA-Z]/.test(arr[i])) {
            alphabet.push(arr[i]);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (/[a-zA-Z]/.test(arr[i])) {
            arr[i] = alphabet.pop()
        }
    }
    return arr.join('');
};
console.log(reverseOnlyLetters("ab-cd"));
console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));
