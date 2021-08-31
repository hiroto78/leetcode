const longestCommonPrefix = function(strs) {
	const item = strs[0];

    // when strs === ['test']
	if (strs.length === 1) {
		console.log(11);
		return item;
	}

    // when strs === []
	if (!item) {
		console.log(2);
		return '';
	}

	const itemAry = item.split('');
	const ret = [];
	let end = 0;
	for (let index = 0; index < itemAry.length; index++) {
		const elm = item[index];
		for (let index2 = 1; index2 < strs.length; index2++) {
			if (end) {
				break;
			}
			const target = strs[index2].split('');
			console.log(target);

			if (elm === target[index]) {
				if (index2 === strs.length - 1) {
					ret.push(elm);
				}
			} else {
				end = 1;
				break;
			}
		}
	};
	return ret.join('');
};

console.log(longestCommonPrefix(['aca', 'cba']));
