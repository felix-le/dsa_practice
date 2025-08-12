/**
 * Given a sorted array of integers,
 * write a function called search, that accepts
 * a value and returns the index where the value passed to the function is located.
 * If the value is not found, return -1
 */

// arr = [1,2,3,4,5,6,7,8,9]
// k = 4
// result = 3
export function findIndexInSortedArr(arr: number[], k: number): number {
  // Method 1: we will search each page of the phone book until finding the specific name
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === k) {
  //     return i;
  //   }
  // }
  // return -1;
  // Method 2:
  /**
   * open the book from the middle
   * find the specific name on the correct half
   * repeat the process until finding (out) the name
   */
  /**
   * 1: find the middle
   * 2: create condition: if
   * 3: compare with the value --> repeat the process.
   */
  /**
   * declare min and max (0 and arr.length - 1)
   * create a loop while min <= max we will do
   * 1. find the middle = (Math.floor((min + max )/2)) // index
    If arr[middle] > k, move left (max = middle - 1)
    Else if arr[middle] < k, move right (min = middle + 1)
    Else (arr[middle] == k), return middle immediately
   */

  let min = 0; // index
  // index
  let max = arr.length - 1; // get the last number

  while (min <= max) {
    let middle = Math.floor((min + max) / 2); // find the index of middle
    let currentMiddleNumber = arr[middle]!;
    //  [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // 2
    // ==> 1, 2, 3, 4
    if (currentMiddleNumber > k) {
      max = middle - 1;
    } else if (currentMiddleNumber < k) {
      //  [1, 2, 3, 4, 5, 6, 7, 8, 9];
      // 7
      // ==> 5, 6, 7, 8, 9
      min = middle + 1;
    } else {
      // currentMiddleNumber === k
      return middle;
    }
  }

  return -1;
}
// O(log n)
