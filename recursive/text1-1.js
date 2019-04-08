// 在递归时候将数值计算加上
(function () {
	let input = [1, 2, 3, 5, 4, 8, [1, 4, 2, 5, 4, 7, [5, 8, 6, 5, 4, [5, 8, 7, 4], []], [2, 5, 4, 7, 8]], []];

	let findMax = input => {
		if (input.length === 0) {
			return {
				maxNumCnt: 0,
				maxNum: ''
			}
		}

		let resultObj = {};
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
			})
		}

		recursive(input);

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
	console.log(` 重复频率最高的数字：${data.maxNum}， 总共${data.maxNumCnt}次`);
})();


// 判断是否为一个数组（4种方法）,但在此处可以直接使用typeof
// Math.max()使用
// 两种解题方式：1.将数组递归为一维数组，2.在递归时候将数值计算加上
// 递归调用自身时是否用argument.caller