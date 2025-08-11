/**
 * get key -> use i to get the value of line_dict
 * pageCount we will have the correrct page
 * if line 27 -> get the pattern
 * out_line below for use the line_dict to replace the correct page line.
 *
 * line 48 identify the correct dict
 */

function maxSum(arr: number[], k: number): number | string {
  const n = arr.length;
  if (k > n) return 'Invalid';

  // Compute sum of first window of size k
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  // Slide the window from start to end of array
  for (let i = k; i < n; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}
