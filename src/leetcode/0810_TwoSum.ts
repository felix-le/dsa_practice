// https://leetcode.com/problems/two-sum/description/
/**
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
 */
export function twoSum(nums: number[], target: number): number[] {
  /**
   * Input: number[], target num
   *
   * Output: number[] => index
   * input [a,b,c,d], target t
   *
   * Output: [index of first number, index of second number]
   * for example: a + b = t => [0, 1]
   * a + d = t => [0, 3]
   */
  /**
   * Given an array of integers nums and an integer target, 
   * return indices of the two numbers such that they add up to target.

          You may assume that each input would have exactly one solution, and you may not use the same element twice.

          You can return the answer in any order.
   */
  /**
   * analyze
   * return an array of indices of two numbers that they add up to target =>  create a new array / Map
   * ==> you may not use the same element twice - 1 element only display 1 time =>storedMap = Map (key, value)=> (number, index)
   *
   * create a loop -> for loop, create a complement
   * target - current number = complement
   *
   * => if the complement is in the storedMap => return the index of current number and the value of complement in the storedMap.
   * ==> Otherwise, we will add the currentNumber into the storeMap
   */

  const storedMap = new Map<number, number>();
  // first: number in the original array: nums
  // second: its index

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    let complement = target - currentNum!;

    if (storedMap.has(complement)) {
      return [storedMap.get(complement)!, i];
    } else {
      storedMap.set(currentNum!, i);
    }
  }
  return []; // it will never reach here as we always have a solution
}
