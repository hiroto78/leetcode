const hasCycle = function(head) {
	if (!head) return false;
	let faster = head;
	let slower = head;
	while (faster && faster.next) {
		faster = faster.next.next;
		slower = slower.next;
		if (slower === faster) return true;
	}
	return false;
};
