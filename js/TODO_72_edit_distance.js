/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  word1 = word1 + "*";
  word2 = word2 + "*";
  let del = (word1.length - word2.length > 0) ? word1.length - word2.length : 0;
  let ins = (word2.length - word1.length > 0) ? word2.length - word1.length : 0;
  let count = 0;

  const array1 = word1.split('');
  const array2 = word2.split('');
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]){
      continue;
    } else if (del || ins) {
      if (del) {
        del = del - 1;
        count = count + 1;
        array1.splice(i,1);
      }
      if (ins) {
        ins = ins - 1;
        count = count + 1;
        array1.splice(i,0, array2[i]);
      }
    } else {
      array1[i] = array2[i]
      count = count + 1;
    }
  }
  return count;
};

console.log(minDistance("","a"));
console.log(minDistance("horse","ros"));
console.log(minDistance("intention", "execution"));
