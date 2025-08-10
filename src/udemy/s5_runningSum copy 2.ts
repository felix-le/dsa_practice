/**
 * Given an array nums. We define a running sum of an array as 
 * runningSum[i] = sum(nums[0]…nums[i]).

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

//Principles:
/**
 * 1. read again and again the requirements
 * 2. rewrite the requirements in my own words
 * 3. break it down
 * 3.1 resolve
 * 3.2 test and compare with the output expectation
 * 4. refactor
 * 4.1 test and compare with the output expectation
 * 4.2 take a screenshot.
 */

/**
 * Input: an array of numbers
 *
 * Output: a new array of numbers
 * each number element is a sum of its and other elements before its index.
 */

export function runningSum(arr: number[]): number[] {
  // 1. understand the issue/task
  /**
   * Input: An array of numbers
   *
   * Output: a new array of numbers
   * new elements of the array: based on its index
   *  * index = 0 --> [a]
   * index = 1 --> [a, a+b]
   * index = 2 --> [a, sum of a plus b,
   * sum of a plus b and plus c]
   * AB = a + b
   * ABC = a+ b+c
   * 2. rewrite it:
   * arr = [a,b,c,d]
   * newArr = [a, AB,ABC,ABCD]
   * --> AB = a + b
   * --> ABC = AB + C
   * => the C index 2, will be equal index 1 (AB) plus c
   * newArr[i] = newArr[i-1] + arr[i]
   */
  /**
   * 3. Break it down:
   * we need to create a loop check and create new value for the element of original
   */
  /**
   * There are at least two method: loop
   * Method 1 (O(n) - O(n))
   * create a new array = []
   * modify / update each element of arr -> push it into new array
   * Method 2: (O(n) - O(1))
   * check and update the element of original array
   */

  // Method 1:
  // const arr = [1, 2, 3, 4];
  const result: number[] = [];
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i]!;
    // i = 0; => currentSum = 1
    // i = 1; currentSum = 1 + 2
    // etc...
    result.push(currentSum);
  }
  console.log('🚀 ~ result:', result);

  return result;
}
