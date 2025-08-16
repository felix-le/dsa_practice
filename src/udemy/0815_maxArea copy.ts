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

/**
 * @param height:number[];
 *
 * Output: number = maximum area of water that can be contained.
 *
 * Notice:
 * 1. container cannot be slanted: => width * height (width = j - i)
 * 2. The height of the water is limited by the shorter of the two lines => height = min(height[i], height[j])
 * 3. 0 <= height[i] <= 10^4 => we cannot use O(n^2) => only use O(log n) or O(n)
 */

/**
 * How can calculate?
 * The area is determined by two factors: width and height.
 * To maximize the area, we need to find the best balance between these two.
 * An optimal approach is to use the Two Pointers technique.
 */

function maxArea2(height: number[]): number {
  /**
   * we will create 2 pointers: left and right (indexes)
   * left = 0
   * right = height.length - 1
   * => width = right - left
   * => height = minimum value between `height[left]` and `height[right]
   * => we will have current_area = `width` * `current_height`
   * ==> update `max_area` based on Math.max(max_area, current_area)
   */

  // step 1: declare two pointers and max_area

  let left = 0;
  let right = height.length - 1;
  let max_area = 0;

  while (left < right) {
    const width = right - left;

    const currentHeight = Math.min(height[left]!, height[right]!);

    const currentArea = width * currentHeight;

    max_area = Math.max(max_area, currentArea);

    if (height[left]! < height[right]!) {
      left++;
    } else {
      right--;
    }
  }

  return max_area;
}
