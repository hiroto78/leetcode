/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let len = s.length;
  if(len<=2) return s;
  let a = [];
  let row = 0;
  let isDown = true;

  for(let i=0; i<len; i++){
    console.log(row);
    if(!a[row]) {
      a[row] = s.charAt(i);
    } else {
      a[row] += s.charAt(i);
    }

    if(row === numRows-1) isDown = false;
    if(row === 0) isDown = true;
    row = isDown ? row + 1 : row - 1;
  }
  return a.join('');
}
console.log(convert("PAYPALISHIRING", 3)); // "PAHNAPLSIIGYIR"
/*
 *
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

*/
