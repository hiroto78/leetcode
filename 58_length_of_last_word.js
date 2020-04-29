const lengthOfLastWord = function(s) {
	s = s.replace(/\s+$/, '');
	const ary = s.split(' ');
	if (ary.length === 0) {
		return '';
	}
	return ary.pop().length;
};


console.log(lengthOfLastWord('a '));
