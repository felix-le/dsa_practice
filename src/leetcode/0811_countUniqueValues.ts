/**
 * Implement a function called countUniqueValues
 * which accepts a sorted array, and counts the unique values in the array.
 * There can be negative numbers in the array, but it will always be sorted.
 */
// const arr: number[] = [1, 2, 3, 4, 1, 2, 1, 2, 3, 6]; 5
export function countUniqueValues(arr: number[]): number {
  /**
   * input: sorted array : number[]
   *
   * output: a number
   *
   * notice:
   * number[] can have some negative numbers, but it always is sorted.
   */

  // /**
  //  * Set -> return Set.size
  //  */

  // const newSet = new Set<number>(arr);
  // return newSet.size;

  /**
   * declare 'i = 0' (flag)
   * create a loop with j, check if arr[i] !== arr[j];
   * i++,
   * arr[i] = arr[j]
   * ==> 1,2,3,4,5,6,7,8,9, .....
   */

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]!;
    }
  }
  return i + 1;
}
