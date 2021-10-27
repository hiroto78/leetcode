// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(A) {
//   if (A.length <= 2) return 1;
//   let maxAns = 0;
// 
//   let temp = 0;
//   let start = 0;
//   for (let i = 0; i < A.length-2; i++) {
//     if (A[i] === A[i+2]) {
//       if (!start) {
//         start = 1;
//         temp = 3;
//       } else {
//         temp = temp + 1;
//       }
//     } else {
//       if (start) {
//         maxAns = Math.max(maxAns, temp);
//         // if maxAns is equal or greater than the number of items to read, return maxAns
//         if (maxAns >= A.length - (i + 2)) return maxAns;
//           temp = 0;
//           start = 0;
//       }
//     }
//   }
//   if (start) {
//     maxAns = Math.max(maxAns, temp);
//   }
//   return maxAns;
// }

// function solution(A) {
//   if (A.length <= 2) return 1;
//   let maxAns = 0;
// 
//   let temp = 0;
//   let start = 0;
//   for (let i = 0; i < A.length-2; i=i+2) {
//     if (A[i] === A[i+2]) {
//       if (!start) {
//         start = 1;
//         temp = 3;
//       } else {
//         if (A[i-1] === A[i+1]) {
//           temp = temp + 2;
//         }
//       }
//     } else {
//       if (start) {
//         if (A[i-1] === A[i+1]) {
//           temp = temp + 1;
//         }
//         maxAns = Math.max(maxAns, temp);
//         // if maxAns is equal or greater than the number of items to read, return maxAns
//         if (maxAns >= A.length - (i + 2)) return maxAns;
//         temp = 0;
//         start = 0;
//       }
//     }
//   }
//   if (start) {
//     maxAns = Math.max(maxAns, temp);
//   }
//   return maxAns;
// }

function solution(A) {
  if (A.length <= 2) return 1;
  let maxAns = 0;

  let temp = 0;
  let start = 0;
  for (let i = 0; i < A.length-2; i=i+2) {
    if (A[i] === A[i+2]) {
      if (!start) {
        start = 1;
        temp = 3;
      } else {
        if (A[i-1] === A[i+1]) {
          temp = temp + 2;
        }
      }
    } else {
      if (A[i-1] === A[i+1]) {
        temp = temp + 1;
      }
      if (start) {
        maxAns = Math.max(maxAns, temp);
        // if maxAns is equal or greater than the number of items to read, return maxAns
        if (maxAns >= A.length - (i + 2)) return maxAns;
        temp = 0;
        start = 0;
      }
    }
    // if (start) {
    //   i = i + 1;
    // }
  }
  if (start) {
    maxAns = Math.max(maxAns, temp);
  }
  return maxAns;
}



console.log(solution([1,1,1,1,1,1,1,1,3,2,3,2,3,1,1,1,1,1,1,1,5,6])); // 8
console.log(solution([3,2,3,2,3])); // 5
console.log(solution([7,4,-2,4,-2,-9])); // 4
console.log(solution([7,-5,-5,-5,7,-1,7,9])); // 3
console.log(solution([4])); // 1
console.log(solution([7, -5, -5, -5, 7, -1, 7])); // 3
console.log(solution([7,-5,7,-5,7,-1,7,9,9,9])); // 5
console.log(solution([4,3,2,3,2,3])); // 5
console.log(solution([4,3,2,3,2,3,2,3,2,3])); // 9
