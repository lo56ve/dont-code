/* ��1����Ŀ��
  �鿴һ�������е��ظ�Ƶ����ߵ�����
  ���룺 [1,2,3,5,4,8,[1,4,2,5,4,7, [5,8,6,5,4, [5,8,7,4], []], [2,5,4,7,8]],[]]
  �����  �ظ�Ƶ����ߵ����֣�[4,5]�� �ܹ�6��
*/

(function () {
	let input = [1, 2, 3, 5, 4, 8, [1, 4, 2, 5, 4, 7, [5, 8, 6, 5, 4, [5, 8, 7, 4], []], [2, 5, 4, 7, 8]], []];

	let findMax = (input) => {
		  //todo
	}
	let data = findMax(input);
	console.log(` �ظ�Ƶ����ߵ����֣�${data.maxNum}�� �ܹ�${data.maxNumCnt}��`)
})();

/*��2����Ŀ��
  ���ݺ�̨���صĶ����������ݽṹ���� ��{
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
ͨ��id��id���ظ�������һ�£�������ظ���Ӧ����ô�������ܹ����Ҹ�id�ĸ�Ԫ��
����id�� 6
����� [1��2��4]
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
��3����Ŀ. ����һ��û���ظ����ֵ����У����������п��ܵ�ȫ���С�
ʾ��:
����: [1,2,3]
���:
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
