/* 第1道题目：
  查看一组数据中的重复频率最高的数字
  输入： [1,2,3,5,4,8,[1,4,2,5,4,7, [5,8,6,5,4, [5,8,7,4], []], [2,5,4,7,8]],[]]
  输出：  重复频率最高的数字：[4,5]， 总共6次
*/

(function () {
	let input = [1, 2, 3, 5, 4, 8, [1, 4, 2, 5, 4, 7, [5, 8, 6, 5, 4, [5, 8, 7, 4], []], [2, 5, 4, 7, 8]], []];

	let findMax = (input) => {
		  //todo
	}
	let data = findMax(input);
	console.log(` 重复频率最高的数字：${data.maxNum}， 总共${data.maxNumCnt}次`)
})();

/*第2道题目：
  根据后台返回的二叉树型数据结构，如 ：{
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
	}
通过id，id不重复（考虑一下：如果有重复，应该怎么处理），能够查找该id的父元素
输入id： 6
输出： [1，2，4]
*/

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
		 //todo
	}

	let result = findParent(data, 4);
	console.log(result);
})();


/*
第3道题目. 给定一个没有重复数字的序列，返回其所有可能的全排列。
示例:
输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
     //todo
};

permute([1,2,3]);
