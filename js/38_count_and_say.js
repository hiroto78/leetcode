const countAndSay = function(n) {
	let ans = '1';
	if (n === 1) {
		return ans;
	}
	for (let index = 1; index < n; index++) {
		ans = getNext(ans);
	}
	return ans;
};

const getNext = function(num) {
	let ans = '';
	const list = num.toString().split('');
	let count = 1;
	for (let index = 0; index < list.length; index++) {
		if (list[index] === list[index + 1]) {
			count = count + 1;
		} else {
			ans = ans + count.toString() + list[index].toString();
			count = 1;
		}
	}
	return ans;
};

console.log(countAndSay(4));
console.log(countAndSay(3));
// console.log(getNext(11));
// console.log(getNext(21));
// console.log(getNext(1211));
