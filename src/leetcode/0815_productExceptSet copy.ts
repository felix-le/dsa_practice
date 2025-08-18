/**
 * // The sum of 5 and 3 is 8. (plus)
// The product of 5 and 3 is 15. (times)
// The difference between 5 and 3 is 2. (minus)
// The quotient of 6 and 2 is 3. (divided)
238. Product of Array Except Self
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
 */
/**
 *
 * @param number[]
 *
 * output: answers: numbers[]
 * answer[i] = pre[i] * suf[i] (except i)
 *
 * Notice:
 * Write an algorithm that runs in o(n) without using the division operation
 */
function productExceptSelf2(nums: number[]): number[] {
  /**
   * Flow:
   * the simplest way is we get the product all elements of the array then divided the index => we must not use this way.
   * other way:
   * Calculate:
   * left [i]
   * right[i]
   * => element in the new array = left[i]*right[i]
   */
  /**
   * How to resolve
   * 1. declare 2 empty arrays with same number of elements based on input array
   * 2. calculate product on the left of array[i] -> a loop
   * 3. calculate product on the right of array[i] -> a loop
   * 4. create a loop for calculate array[i] with product of other elements based on left*right
   *
   * => a similar to sliding sum.
   */

  const n = nums.length;

  const prefix: number[] = new Array(n);
  const suffix: number[] = new Array(n);
  const ans: number[] = new Array(n);

  //  The prefix product for the first element is 1, as there are no elements to its left.

  prefix[0] = 1;
  // Iterate from the second element to the end.
  for (let i = 1; i < n; i++) {
    // The prefix product at `i` is the prefix product of the previous element
    // multiplied by the previous element's value.
    prefix[i] = prefix[i - 1]! * nums[i - 1]!;
  }
  // The suffix product for the last element is 1, as there are no elements to its right.
  suffix[n - 1] = 1;
  // Iterate backwards from the second-to-last element to the beginning.
  for (let j = n - 2; j >= 0; j--) {
    // The suffix product at `j` is the suffix product of the next element
    // multiplied by the next element's value.
    suffix[j] = suffix[j + 1]! * nums[j + 1]!; //as we decrease the index --> we need to plus 1 to calc the correct position
  }

  for (let i = 0; i < n; i++) {
    ans[i] = prefix[i]! * suffix[i]!;
  }
  return ans;
}
