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
   * Input: number[] and target number
   * [a,b,c,d]
   * Output: if a + b = target or a + c = target
   * => Return the indexes of two numbers.
   */
  /**
   * create a loop -> check complement between target - current number  => complement
   * Remember: we cannot use the same element twice.
   */

  // ==> we need to create a Map to save the value and its index
  // ==> if the map has the value --> use target number - the value in the map = complement -> check if the complement is in the map or not?
  // If complement is here => return the value and the complement indexes. Otherwise, we will add the value into the map

  const numIndex = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]!;

    if (numIndex.has(complement)) {
      return [numIndex.get(complement)!, i];
    } else {
      numIndex.set(nums[i]!, i);
    }
  }

  return []; //never reach here as we always have 1 solution
}
