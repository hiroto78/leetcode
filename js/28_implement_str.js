/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }
  for (var i = 0; i < haystack.length - (needle.length - 1); i++ ) {
    if (haystack.substr(i, needle.length) === needle) {
      return i;
    };
  }
  return -1;
};

// console.log(strStr('hello', 'll'));
// console.log(strStr('hellonaya', 'naya'));
console.log(strStr('aaaaaaaaaa', 'bb'));
