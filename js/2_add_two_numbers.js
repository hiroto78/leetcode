var addTwoNumbers = function(l1, l2) {
    let large, small;
    if (l1.length > l2.length) {
        large = l1;
        small = l2;
    } else {
        large = l2;
        small = l1;
    }

    large = large.reverse();
    small = small.reverse();

    carry_over = 0;
    ans = [];
    for (var i = 0; i < large.length; i++) {
        if (!small[i]) {
            small[i] = 0;
        }
        if (large[i] + small[i] + carry_over >= 10){
            ans.push( (large[i] + small[i] + carry_over)%10 )
            carry_over = 1;
        } else {
            ans.push( (large[i] + small[i] + carry_over) )
            carry_over = 0;
        }
    }
    if (carry_over === 1) {
        ans.push(1);
    }
    return ans;
};

console.log(addTwoNumbers([2,4,3], [5,6,4])); // [7,0,8]
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])); // [8,9,9,9,0,0,0,1]
console.log(addTwoNumbers([0,0,0,0], [1,9,9,9,9])); // []
