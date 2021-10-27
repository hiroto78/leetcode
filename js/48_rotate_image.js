/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let rotated = [];
    for (let i = 0; i < matrix.length; i++) {
        rotated.push([]);
        for (let j = matrix.length - 1; j >= 0; j--) {
            rotated[i].push(matrix[j][i]);
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            matrix[i][j] = rotated[i][j];
        }
    }
};
// [[7,4,1],[8,5,2],[9,6,3]]
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));
// [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));
