/*
 * 插入法：如果已知n-1个元素的排列，将n插入到排列的不同位置，就得到了n个元素的排列。
 * 用这种方法可以产生出任意n个元素的排列。这个方法有一个缺点：为了产生n个元素的排列，
 * 我们必须知道并存储所有n-1个元素的排列，然后才能产生出所有n阶排列
 */
var permute = function(nums) {
	let recursive = numsLength => {
		if (numsLength === 0) {
			return [[nums]];
		} else if (numsLength === 1) {
			// 此处跳出递归
			return [[nums[0], nums[1]], [nums[1], nums[0]]];
		}
		let flagArr = recursive(numsLength - 1),
			lastNums = nums[numsLength];
		let resultArr = [];

		flagArr.forEach(itemArr => {
			for (let i = 0; i < itemArr.length + 1; i++ ) {
				let copyArr = itemArr.slice();	// 拷贝一份新的数组
				copyArr.splice(i, 0, lastNums);
				resultArr.push(copyArr);
			}
		})
		return resultArr;
	}
	return recursive(nums.length - 1);
};

let a = permute([1,2,3]);
console.log(a);

