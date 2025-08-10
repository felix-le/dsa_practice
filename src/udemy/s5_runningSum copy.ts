/**
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
 */

/**
 * Principle:
 * 1. understand the issue/task
 * 2. rewrite it in own words
 * 3. break it down
 * 4. refactor it.
 */

/**
 * Input: an array of numbers
 * Output: a new array of numbers has:
 * sum of each index number = sum of previous indices numbers + the number
 */

/**
 * return an array that each element will be sum:
 * from the original: [a,b,c,d]
 * based on the index we will have new array:
 * index = 0 --> [a]
 * index = 1 --> [a, a+b]
 * index = 2 --> [a, sum of a plus b, sum of a plus b and plus c]
 */
/**How to do it
 *
 * we need a loop --> map each element of the original array
 * we should have a current sum variable - to store the sum at the current index
 * two methods:
 * 1. we will create a new array -> have a new value of each element from original array -> push it into new array
 * - we should have a new array outside of the loop
 *
 * 2. we will replace the original array with new value.
 * replace arr = [a, ab, abc,abcd]
 * => arr = [a, a+b, ab+c,abc+d] =>arr:
 * 0: a
 * 1: index[0] + index[1]
 * 2: index[0][1] + index[2]
 * ==> i + [i-1]
 */

export function runningSum(arr: number[]): number[] {
  // method 1:  one is create new array then return it O(n) and O(n)
  const result: number[] = [];
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i]!;
    result.push(currentSum);
  }
  console.log(result);
  return result;
  // method 2: replace on the original array. O(n) and O(1)

  // for (let i = 1; i < arr.length; i++) {
  //   // Cập nhật giá trị của phần tử hiện tại
  //   // bằng cách cộng nó với giá trị của phần tử ngay trước nó (đã là tổng chạy đến bước trước).
  //   arr[i] += arr[i - 1]; // tương đương arr[i] = nums[i] + nums[i - 1];
  // }

  // // Mảng 'nums' đầu vào đã bị thay đổi để chứa kết quả, ta trả về chính nó.
  // return arr;
}
