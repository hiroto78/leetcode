const maxDepth = function(root) {
	const depth = 0;
	if (!root) {
		return depth;
	}
	const left = maxDepth(root.left) + 1;
	const right = maxDepth(root.right) + 1;

	if (left > right) {
		return left;
	}
	return right;
};
