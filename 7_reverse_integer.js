const reverse = function(x) {
	x = x + '';
	if ( x < 0 ) {
		x = x.split('');
		x.shift();
		x = x.reverse();
		ret = '-' + x.join('');
		ret = ret - 0;
		if (ret > Math.pow(2, 31) - 1 || ret < (Math.pow(2, 31) - 1)*(-1) ) {
			return 0;
		}
		return ret;
	} else {
		x = x.split('');
		x = x.reverse();
		ret = x.join('');
		ret = ret - 0;
		if (ret > Math.pow(2, 31) - 1 || ret < (Math.pow(2, 31) - 1)*(-1) ) {
			return 0;
		}
		return ret;
	}
};

console.log(reverse(-2147483648));
// console.log(Math.pow(2, 2))
