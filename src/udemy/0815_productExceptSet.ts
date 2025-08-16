/**
 * 
 * // The sum of 5 and 3 is 8. (plus)
// The product of 5 and 3 is 15. (times)
// The difference between 5 and 3 is 2. (minus)
// The quotient of 6 and 2 is 3. (divided)

238. Product of Array Except Self
Given an integer array nums, return an array answer such that answer[i] 
is equal to the product of all the elements of nums except nums[i].

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
export function productExceptSelf(nums: number[]): number[] {
  /**
   * Flow:
   * the simplest way is we get the product all elements of the array then divided the index => we must not use this way.
   * [a,b,c,d,e] => answers[0]= b*c*d*a*e / a
   * other way:
   * Calculate:
   * left [i]
   * right[i]
   * => element in the new array = left[i]*right[i]
   *example: answer[c] = (a*b) * (d*e)
   */
  /**
   * How to resolve
   * 1. declare 3 empty arrays with same number of elements based on input array=>
   * 2. calculate product on the left of array[i] -> a loop
   * 3. calculate product on the right of array[i] -> a loop
   * 4. create a loop for calculate array[i] with product of other elements based on left*right
   *
   * => a similar to sliding sum.
   * => sliding sum using plus, we will use times
   */

  const n = nums.length;

  const prefix: number[] = new Array(n); // [ , , , , ]
  const suffix: number[] = new Array(n); // [ , , , , ]
  const answers: number[] = new Array(n); // [ , , , , ]

  // same like sliding sum => we need to declare and count from the beginning array => [0]
  // because on the left of the first number ([0]) we dont have any numbers
  prefix[0] = 1; // because num*1 = num

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1]! * nums[i - 1]!;
  }

  /**
  // nums = [a,b,c,d,e]
   * 
   *  //prefix: [1 , a, , , ] prefix[i - 1]! = a,  nums[i - 1]! = num[2-1] = b 
   * ==> for index 2 = prefix[1] * nums[1] 
   * ==> result = a * b
   * prefixProduct[0] = 1
      prefixProduct[1] = a
      prefixProduct[2] = a * b
      prefixProduct[3] = a * b * c
   */

  // calc suffix

  suffix[n - 1] = 1; // similar to prefix first element as on the right of the last element is empty
  // nums = [a,b,c,d,e]
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1]! * nums[i + 1]!;
  }
  /**
   * n = 5
   * suffix[i] = suffix[i + 1]! * nums[i + 1]!;
   * suffix[4] [ , , , ,1]
   * suffix[3] e, as on the right d has e
   * nums[5 - 3 + 1] => nums[3] => c * (a*b)
   * [b*c*d*e, c*d*e, d*e, e, 1].
   * */

  for (let i = 0; i < n; i++) {
    answers[i] = prefix[i]! * suffix[i]!;
  }
  return answers;
}
