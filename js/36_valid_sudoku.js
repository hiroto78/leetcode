/**
 * @param {character[][]} board
 * @return {boolean}
 */
function hasDuplicate(arr) {
    const sortedArr = arr.slice().sort(function(a,b){
            if( a < b ) return -1;
            if( a > b ) return 1;
            return 0;
    });
    for (var i = 0; i < sortedArr.length - 1; i++) {
        if (sortedArr[i] !== '.' && sortedArr[i] == sortedArr[i + 1]) {
            return true;
        }
    };
    return false;
}

var isValidSudoku = function(board) {
    // check row
    for (var i = 0; i < board.length; i++) {
        if (hasDuplicate(board[i])) {
            return false;
        }
    }
    // check column
    for (var i = 0; i < board.length; i++) {
        let arr = [];
        for (var j = 0; j < board.length; j++) {
            arr.push(board[j][i])
        }
        if (hasDuplicate(arr)) {
            return false;
        }
    }

    // check 3x3
    for (var i = 0; i < board.length; i=i+3) {
        for (var j = 0; j < board.length; j=j+3) {
            let arr = [];
            arr.push(board[i][j])
            arr.push(board[i+1][j])
            arr.push(board[i+2][j])

            arr.push(board[i][j+1])
            arr.push(board[i+1][j+1])
            arr.push(board[i+2][j+1])

            arr.push(board[i][j+2])
            arr.push(board[i+1][j+2])
            arr.push(board[i+2][j+2])

            if (hasDuplicate(arr)) {
                return false;
            }
        }
        /*
        board[0][0], board[0][1], board[0][2], | board[0][3], board[0][4], board[0][5]
        board[1][0], board[1][1], board[1][2], | board[1][3], board[1][4], board[1][5]
        board[2][0], board[2][1], board[2][2], | board[2][3], board[2][4], board[2][5]
        */
    }

    return true;
};
board = [
     ["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]
]
board2 = [
     ["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]
]

console.log(isValidSudoku(board)); // true
console.log(isValidSudoku(board2)); // false
