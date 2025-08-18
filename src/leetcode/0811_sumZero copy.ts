/**
 * Create pointers or values that correspond to an index or position and move towards the beginning,
 * end or middle based on a certain condition
 *
 * Very efficient for solving problems with minimal space complexity as well
 */

/**
 * AN EXAMPLE
Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. 
Return an array that includes both values that sum to zero or 
undefined if a pair does not exist
Code
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
 */
export function sumZero(arr: number[]): number[] | undefined {
  /**
   * input: sorted array number[]
   *
   * output: array number[]
   *if a + b = 0 ==> return [a,b]
    if c+ z = 0 => return [c,z]
   * Notice:
   * if there is no pair => return undefined
   */

  /**
   * as we have a sorted array
   *
   * --> we will try to get sum from a + z (from the beginning and from the last)
   * => two pointers.
   *
   * we will create two pointers.
   * if a+z > 0 --> a + y (move right on) ==> y always smaller than z
   * if a + z < 0 -> b + z (move left on) ==> b always bigger than a.
   */

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left]! + arr[right]!;

    if (sum === 0) {
      return [arr[left]!, arr[right]!];
    } else if (sum > 0) {
      right--;
    } else if (sum < 0) {
      left++;
    }
  }

  return undefined;
}
