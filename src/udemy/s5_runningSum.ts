//Principles:
/**
 * 1. read again and again the requirements
 * 2. rewrite the requirements in my own words
 * 3. break it down
 * 3.1 resolve one by one
 * 3.2 test and compare with the output expectation
 * 4. refactor
 * 4.1 test and compare with the output expectation
 */
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

export function runningSum(arr: number[]): number[] {
  /**
   * Input: an array of numbers
   *
   * Output: a new array of numbers.
   * Each element of this new array will equal its value plus total values of all elements before its.
   * examples:
   * input = [a,b,c,d]
   * output = [a, a + b, a + b + c, a + b + c + d]
   */
  /**
   * the new array: will have
   * AB = a + b
   * ABC = a + b + c
   *
   * index 0 = a
   * index 1 = sum(index 0 + b)
   * index 2 = sum(index 1 + c)
   *
   * new arr:
   * of new array | old array
   * arr[i]= sum(index before ) + arr[i]
   */
  /** resolve
   * at two methods:
   * 1. create new arr, then each new sum --> push it
   * 2. replace new value of each element on the original array
   */
  // create new arr, then each new sum --> push it
  // const result: number[] = [];
  // let currentSum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   currentSum += arr[i]!;
  //   result.push(currentSum);
  // }
  // /**Input: nums = [1,2,3,4]
  // Output: [1,3,6,10] */
  // console.log('🚀 ~ result:', result);
  // return result;

  // 2. replace new value of each element on the original array

  /**
   * loop each element of original array
   * modify / update each element based on its index
   * each element should be:
   * arr[i]=arr[i]+arr[i-1]
   *
   * index 0 = a
   * index 1 = sum(index 0 + b)
   * index 2 = sum(index 1 + c)
   *
   */
  for (let i = 1; i < arr.length; i++) {
    // arr[i] = arr[i]! + arr[i - 1]!;
    arr[i]! += arr[i - 1]!;
  }
  console.log('🚀 ~ arr:', arr);

  return arr;
}
