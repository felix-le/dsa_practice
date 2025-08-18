/**
 * Write a function call same, which accepts two arrays.
 * The function should return true if every value in the array has it's corresponding value squared in the second array.
 * The frequency of values must be the same
 *
 * same([1,2,3], [4,1,9]) => true
 * same([1,2,3],(1,9)) =>false
 * same([1,2,1], [4,4,1]) => false as the sequency
 */
export function same(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) return false;

  const uniqueMap = new Map<number, number>();
  /**
   * we need to create a Map -> collection of number and its sequency.
   * check the show times of element in array 1 -->
   * if its value squared appears on array 2 --> let the number - 1
   * return false if it doesn't have
   */

  for (const ele1 of arr1) {
    const valueSquared = ele1 * ele1;
    const count = uniqueMap.get(valueSquared) || 0;
    uniqueMap.set(valueSquared, count + 1);
  }

  for (const ele2 of arr2) {
    if (!uniqueMap.has(ele2)) return false;

    const countInArr2 = uniqueMap.get(ele2);
    if (!countInArr2) {
      return false;
    } else {
      uniqueMap.set(ele2, countInArr2 - 1);
    }
  }
  return true;
}
