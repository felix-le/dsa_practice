/**
 * write a function called maxSubarraySum which accepts an array of integers and
 * number called n. The function should calculate maximum sum of n
 * consecutive elements in the array.
 *
 * maxSubarraySum([1,2,4,2,8,1,5],2) => 10
 */

export function maxSubarraySum(arr: number[], num: number): number | null {
  /**
   * input: number[]
   *
   * output: number = sum of n consecutive elements
   * maxSubarraySum([1,2,4,2,8,1,5],2) => 10
   */
  /**
   * if arr.length < k -> return null
   * create a loop to run from 0 -> k + 1 why !?
   * bc we need to stop at the arr.length - k + 1, if not our algorithm will be false / wrong.
   * at this time, we will have a new array from i -> k
   * create a new loop -> get the the value of sum for this loop.
   *
   * --> we need to have a temp to store the sum value
   * ==> we need to create a maxSum outside of the loop.
   * --> if temp > max --> max = temp
   */
  /**
   * 1. if arr.length < k -> return null
   * 2. create maxSum
   * 3. create a loop to run from 0 -> k + 1
   * 4. we need to have a temp to store the sum value
   * 5. if temp > max --> max = temp
   * 6. return max
   */
  // if (arr.length < num) {
  //   return null;
  // }
  // let maxSum = 0;
  // for (let i = 0; i < arr.length - num + 1; i++) {
  //   let temp = 0;
  //   // we will create a new loop for the array of num
  //   for (let j = 0; j < num; j++) {
  //     temp += arr[i + j]!;
  //   }
  //   if (temp > maxSum) {
  //     maxSum = temp;
  //   }
  // }
  // return maxSum;
  // ==>O(m*n)

  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]!;
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num]! + arr[i]!;
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
