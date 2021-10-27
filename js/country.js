
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  const n = A.length;
  const m = A[0].length;
  // define map as {place => n_th country}
  // place is defined `#{i}-#{j}`
  let map = {};
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const value = A[i][j]
      // check north area
      if (A[i-1] && A[i-1][j] && A[i-1][j] === value) {
        if (map[ (i-1) + "-" + j]) {
          map[i + "-" + j] = map[ (i-1) + "-" + j];
        } else {
          map[i + "-" + j] = count + 1;
          count = count + 1;
        }
      // check west
      } else if (A[i][j-1] && A[i][j-1] === value) {
        if (map[ i + "-" + (j-1)]) {
          map[i + "-" + j] = map[ i + "-" + (j-1)];
        } else {
          map[i + "-" + j] = count + 1;
          count = count + 1;
        }
      // check south
      } else if (A[i+1] && A[i+1][j] && A[i+1][j] === value) {
        if (map[ (i+1) + "-" + j]) {
          map[i + "-" + j] = map[ (i+1) + "-" + j];
        } else {
          map[i + "-" + j] = count + 1;
          count = count + 1;
        }
      // check east
      } else if (A[i][j+1] === value) {
        // EAST IS A SPECIAL CASE
        // must ckeck east and northeast
        if (A[i-1] && A[i][j+1] === A[i-1][j+1]) {
          map[i + "-" + j] = map[ i-1 + "-" + (j+1)];
        } else {
          map[i + "-" + j] = count + 1;
          count = count + 1;
        }
      // nothing around the same, define new country
      } else {
        map[i + "-" + j] = count + 1;
        count = count + 1;
      }
    }
  }
  // console.log('map=======');
  // console.log(map);
  // console.log('count=======');
  // console.log(count);
  return count;
}


// A = [
// [5,4,4],
// [4,3,4],
// [3,2,4],
// [2,2,2],
// [3,3,4],
// [1,4,4],
// [4,1,1]
// ];
A = [
[5,4,4],
[4,3,4],
[3,2,4],
[2,2,2],
[3,3,4],
[1,4,4],
[4,1,5]
];
solution(A);
