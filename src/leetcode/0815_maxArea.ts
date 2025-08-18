/**
 * 11. Container With Most Water
You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, 
such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 */

export function maxArea(height: number[]): number {
  /**
   * input: number[]
   *
   * output: number
   * is the max area between two columns
   *
   * Notice:
   * we cannot slant the container -> we can use two pointers method
   * calculate area: width * height
   * => width = the distance between left pointer and right pointer (j - i) (max)
   * ==> height = max of height for both columns => we need to find a min between height[j] - height [i]
   *  if height[j] is shorter than height[i]=> we need to based on height[i]
   */
  /**
   * HOw can do it
   * 1. declare max_are and first pointer, and last pointers
   * 2. we will calculate the currentArea by currentHeight * width.
   */

  let left = 0;
  let right = height.length - 1;
  let max_area = 0;

  while (left < right) {
    // because we cannot store water in 1 column - left = right

    const width = right - left;

    const currentHeight = Math.min(height[left]!, height[right]!); // take the min height

    const currentArea = width * currentHeight;

    max_area = Math.max(currentArea, max_area);

    if (height[left]! < height[right]!) {
      left++;
    } else {
      right--;
    }
  }
  return max_area;
}
