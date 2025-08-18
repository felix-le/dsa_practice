/**
 * Write a function call same, which accepts two arrays.
 * The function should return true if every value in the array has it's
 * corresponding value squared in the second array.
 * The frequency of values must be the same
 *
 * same([1,2,3], [4,1,9]) => true
 * same([1,2,3],(1,9)) =>false
 * same([1,2,1], [4,4,1]) => false as the sequency
 */
export function same(arr1: number[], arr2: number[]): boolean {
  /**
   * input: Two arrays
   * Output: boolean
   * - each elements of second array should be equal to elements of array 1
   * - the frequency must be the same.
   */
  /**
   * 2 arrays
   * check counter -> we will use Map <number/string , number>
   * value squared
   * frequency of values must be the same
   */
  /**
   *  the frequency must be the same.
   * arr1.length !== arr2.length --> return false
   * ---
   * create stored = new Map<number, number> (record)
   * create a loop to have the init value from array 1 => push the number and the frequency of each
   * element in array 1 into the stored. !!!!value squared!!!
   * ---
   * create another loop to check each element of array 2 then compare with the value in stored.
   * if stored doesn't have the value of element in array 2 --> return false.
   * otherwise, we will decrease 1 from the count of value in the stored.
   */

  // the frequency must be the same.
  if (arr1.length !== arr2.length) return false;

  const stored = new Map<number, number>();
  // first number is the element of arr1
  // second number is the count

  // * create a loop to have the init value from array 1 => push the number and the frequency of each
  //  * element in array 1 into the stored. !!!!value squared!!!

  for (let e1 of arr1) {
    const e1Squared = e1 * e1;
    const count = stored.get(e1Squared) || 0;
    stored.set(e1Squared, count + 1);
  }

  for (let e2 of arr2) {
    if (!stored.has(e2)) return false;

    const countInArr2 = stored.get(e2);
    if (!countInArr2) {
      return false;
    } else {
      stored.set(e2, countInArr2 - 1);
    }
  }
  return true;
}
