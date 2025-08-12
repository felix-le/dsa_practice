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
   * output: [a,b] || undefined
   *
   * return a, b only a + b = 0. Otherwise, return undefined.
   *
   * Notices:
   * - find the first pair
   */
  /**
   * create 2 variables: left and right.
   * left = 0;
   * right = arr.length - 1
   * sum = arr[left] + arr[right]
   *
   * if sum === 0 => return  arr[left] + arr[right]
   * sum < 0 ==> -1,-2 ... let left goes bigger -> left move to closer 0 ==> left++
   * sum > 0 ==> 1,2,3 ... reduce right value --> right move to closer 0 => right --
   * cases no pair -> return undefined.
   */

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left]! + arr[right]!;

    if (sum === 0) {
      return [arr[left]!, arr[right]!];
    } else if (sum < 0) {
      left++;
    } else if (sum > 0) {
      right--;
    }
  }

  return undefined;
}
