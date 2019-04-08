(function () {
	let input = [1, 2, 3, 5, 4, 8, [1, 4, 2, 5, 4, 7, [5, 8, 6, 5, 4, [5, 8, 7, 4], []], [2, 5, 4, 7, 8]], []];

	let findMax = input => {
		let resultObj = {},
			maxNumCnt = 0,
			maxNum = [];

		let recursive = arr => {
			if (arr.length === 0) {
				return ;
			}
			arr.forEach(item => {
				if (typeof item === 'object') {
					recursive(item);
				} else if (typeof resultObj[item] !== 'undefined') {
					resultObj[item] += 1;
				} else {
					resultObj[item] = 1;
				}
				// 少了对一层遍历，降低复杂度
				if (resultObj[item] > maxNumCnt) {
					maxNumCnt = resultObj[item];
					maxNum = [item];
				} else if (resultObj[item] === maxNumCnt) {
					maxNum.push(item);
				}
			})
		}

		recursive(input);

		return {
			maxNumCnt,
			maxNum: maxNum.join(',')
		}
	}

	let data = findMax(input);
	console.log(` 重复频率最高的数字：${data.maxNum}， 总共${data.maxNumCnt}次`);
})();