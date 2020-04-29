const climbStairs = function(n) {
	const ary = [1, 1];
	for (let index = 0; index < n + 1; index++) {
		if (!ary[index]) {
			ary[index] = ary[index - 1] + ary[index -2];
		}
	}
	return ary.pop();
};

console.log(climbStairs(3));
