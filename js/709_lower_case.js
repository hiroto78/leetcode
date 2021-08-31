/**
 * @param {string} s
 * @return {string}
 */
const list = {
    "A": "a",
    "B": "b",
    "C": "c",
    "D": "d",
    "E": "e",
    "F": "f",
    "G": "g",
    "H": "h",
    "I": "i",
    "J": "j",
    "K": "k",
    "L": "l",
    "M": "m",
    "N": "n",
    "O": "o",
    "P": "p",
    "Q": "q",
    "R": "r",
    "S": "s",
    "T": "t",
    "U": "u",
    "V": "v",
    "W": "w",
    "X": "x",
    "Y": "y",
    "Z": "z",
};
var toLowerCase = function(s) {
    const arr = s.split('');
    for (var i = 0; i < arr.length; i++) {
        if (list[arr[i]]) {
            arr[i] = list[arr[i]];
        }
    }
    console.log(arr.join(''));
    return arr.join('');
};
toLowerCase('aaab')
