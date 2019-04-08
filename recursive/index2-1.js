// id不重复
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
			id: 3,
			left: {id: 5}
		}
	};
	let findParent = (node, id) => {
		let haveFound = false;
		let getSideArr = (id, side) => {
			return side && [id].concat(recursive(side)) || [];
		}
		let recursive = tree => {
			if (tree.id === id) {
				haveFound = true;
				return [];
			}

			// let left = tree.left && [tree.id].concat(recursive(tree.left)) || [],
			// 	right = tree.right && [tree.id].concat(recursive(tree.left)) || [];
			let left = getSideArr(tree.id, tree.left);
			if (haveFound) {
				return left;
			}
			let right = getSideArr(tree.id, tree.right);
			return haveFound && right || [];
		}
		return recursive(node);
	}

	let result = findParent(data, 8);
	console.log(result);
})();