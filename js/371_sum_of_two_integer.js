/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if (a === 0 ) {
        return b;
    }
    if (b === 0 ) {
        return a;
    }
    // ++ -> +
    // -- -> -
    // +- -> + or -
    // -+ -> + or -
    let aArray = Array(Math.abs(a));
    let bArray = Array(Math.abs(b));
    aArray.fill(1);
    bArray.fill(1);
    if (a > 0 && b >0 ) {
        return aArray.concat(bArray).length;
    } else if (a < 0 && b < 0 ) {
        return aArray.concat(bArray).length * (-1);
    } else if (a > 0 && b < 0) {
        if (Math.abs(a) >= Math.abs(b)) {
            for (var i = 0; i < Math.abs(b); i++) {
                aArray.shift();
            }
            return aArray.length;
        } else {
            for (var i = 0; i < a; i++) {
                bArray.shift();
            }
            return bArray.length * (-1);
        }
    } else {
        if (Math.abs(a) >= Math.abs(b)) {
            for (var i = 0; i < Math.abs(b); i++) {
                aArray.shift();
            }
            return aArray.length * (-1);
        } else {
            for (var i = 0; i < Math.abs(a); i++) {
                bArray.shift();
            }
            return bArray.length;
        }

    }
};
// console.log(getSum(1, 2));
// console.log(getSum(-5, 2));
console.log(getSum(-5, 8));
// console.log(getSum(5, -2));
// console.log(getSum(5, -8));
