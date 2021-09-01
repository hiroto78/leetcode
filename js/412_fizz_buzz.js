/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let ans = [];
    for (var i = 1; i < n+1; i++) {
        if (i%5===0 && i%3===0) {
            ans.push("FizzBuzz");
        } else if (i%5===0) {
            ans.push("Buzz");
        } else if (i%3===0) {
            ans.push("Fizz");
        } else {
            ans.push(String(i));
        }
    }
    return ans;
};
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
