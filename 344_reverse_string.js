const reverseString = function(s) {
	const max = s.length;
	for (let index = 0; index < s.length; index++) {
		if (index < max - (1 + index)) {
		  const a = s[index];
			const b = s[max - (1 + index)];
			s[index] = b;
			s[max - (1 + index)] = a;
		}
	}
	return s;
};

console.log(reverseString(['o', 'l', 'l', 'e', 'h']));
