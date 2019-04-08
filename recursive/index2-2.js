// id重复，即遍历所有树
(function () {
	let data = {
		id: 1,
		left: {
			id: 2,
			left: {
				id: 4,
				left: {
					id: 6,
					left: {id: 7},
					right: {
						id: 8,
						right: {id: 9}
					}
				}
			}
		},
		right: {
			id: 2,
			left: {id: 5}
		}
	};
	let findParent = (node, id) => {
		let chainArr = [],
			resultArr = [];
		let recursive = (node, chainArr) => {
			let chainArrCopy = chainArr.slice();
			if (node.id === id) {
				resultArr.push(chainArr);
			} else if (!node.left && !node.right) {
				return false;
			}
			chainArrCopy.push(node.id);
			if (node.left && recursive(node.left, chainArrCopy)) {
				recursive(node.left, chainArrCopy);
			}
			if (node.right && recursive(node.right, chainArrCopy)) {
				recursive(node.right, chainArrCopy);
			}
		}
		recursive(node, chainArr);
		return resultArr;
	}

	let result = findParent(data, 5);
	console.log(result);
})();