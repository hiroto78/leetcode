const conf = {
	A: 1,
	B: 2,
	C: 3,
	D: 4,
	E: 5,
	F: 6,
	G: 7,
	H: 8,
	I: 9,
	J: 10,
	K: 11,
	L: 12,
	M: 13,
	N: 14,
	O: 15,
	P: 16,
	Q: 17,
	R: 18,
	S: 19,
	T: 20,
	U: 21,
	V: 22,
	W: 23,
	X: 24,
	Y: 25,
	Z: 26,
};

const titleToNumber = function(s) {
	const list = s.split('');
	let ret = 0;

	for (let index = list.length - 1; index >= 0; index--) {
		const element = list[index];
		if (index === list.length - 1) {
			ret = ret + conf[element];
		} else {
			console.log('list.length + 1 - index');
			console.log(list.length + 1 - index);
			ret = ret + conf[element] * Math.pow(26, (list.length - index - 1));
		}
	}
	return ret;
};


console.log(titleToNumber('AAA'));
// console.log(titleToNumber('ZY'));
// console.log(titleToNumber('AB'));
// console.log(titleToNumber('AB'));
