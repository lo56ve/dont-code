// 将数组递归为一维数组
(function () {
	let input = [1, 2, 3, 5, 4, 8, [1, 4, 2, 5, 4, 7, [5, 8, 6, 5, 4, [5, 8, 7, 4], []], [2, 5, 4, 7, 8]], []];

	let findMax = (input) => {
		if (input.length === 0) {
			return {
				maxNumCnt: 0,
				maxNum: ''
			}
		}

		// 数组降维
		// let recursive = arr => {
		// 	let formatInput = [];
		// 	arr.forEach(item => {
		// 		if (typeof item !== 'object') {
		// 			formatInput.push(item)
		// 		} else {
		// 			formatInput = formatInput.concat(recursive(item));
		// 		}
		// 	})
		// 	return formatInput;
		// }

		// ES10的降维方法Array.property.flat()
		let recursive = arr => arr.flat(Infinity);

		let dimensionalArr = recursive(input),
			resultObj = {};

		dimensionalArr.forEach((item, index, array) => {
			if (array.indexOf(item) !== index) {
				resultObj[item] += 1;
			} else {
				resultObj[item] = 1;
			}
		})

		let maxNumCnt = Math.max(...Object.values(resultObj)),
			maxNum = [];

		for (let item in resultObj) {
			if (resultObj[item] === maxNumCnt) {
				maxNum.push(item);
			}
		}
		return {
			maxNumCnt,
			maxNum: maxNum.join(',')
		}
			

	}
	let data = findMax(input);
	console.log(` 重复频率最高的数字：${data.maxNum}， 总共${data.maxNumCnt}次`)
})();