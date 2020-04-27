const romanToInt = function(s) {
	const c = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	if (s.length === 1) {
		return c[s];
	}
	const ary = s.split('');

	let ret = 0;
	let double = 0;
	for (let index = 0; index < ary.length - 1; index++) {
		const x = ary[index];
		const y = ary[index + 1];
		if (double && index === (ary.length - 2)) {
			ret = ret + c[y];
			continue;
		} else if (double) {
			double = 0;
			continue;
		}

		if (c[x] > c[y] && index === (ary.length - 2) ) {
			ret = ret + c[x];
			ret = ret + c[y];
		} else if (c[x] > c[y]) {
			ret = ret + c[x];
		} else if (c[x] === c[y] && index === (ary.length - 2) ) {
			ret = ret + c[x];
			ret = ret + c[y];
		} else if (c[x] === c[y]) {
			ret = ret + c[x];
		} else {
			ret = ret + (c[y] - c[x]);
			double = 1;
		}
	}

	return ret;
};

// romanToInt('III');

console.log(romanToInt('D'));

// console.log(romanToInt('MDCXCV'));
