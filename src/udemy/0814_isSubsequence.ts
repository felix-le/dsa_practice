/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
A subsequence of a string is a new string that is formed from the original 
string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. 
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.

Follow up: Suppose there are lots of incoming s, say s1, s2, ..., 
sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
 */
/**
 * input: s:string[]; t:string[]
 *
 * Output: boolean
 * if s is a subsequence of --> return true
 * each element of s has its index ==> order of char in s
 * if the order of char index same in the t ==> true
 * example: s = [a,b,c] ; t = [a,32,4,b,233,c]
 * a:[0]
 * b:[1]
 * c:[2]
 * ==> 0,1,2
 * in the t: a has index 0, b has index 3, c has index 5 => same ==> true
 * Notice:
 * only lowercase English
 */

export function isSubsequence(s: string, t: string): boolean {
  // how can resolve
  /**
   * use Map (char and its index)=> it will be wrong if we have t with "aa" => wrong because we only have unique index
   *
   * => so we should do by the pure method
   *
   * we need to create an object to store all characters of t and their indexes =>
   * {
   * char: []
   * }
   */

  let stored: { [key: string]: number[] } = {};

  // loop to get indexes each element of t

  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    if (char) {
      if (!stored[char]) {
        stored[char] = [];
      }
      stored[char].push(i);
    }
  }
  /**
   * we have the order of indexes for each element in t
   * => need to compare it with order of element in s
   *
   * we need have a loop to check element of s
   *
   * compare with previous order of previous element
   *
   * to compare we will use binary search.
   *
   * we will compare and get the index of current character is bigger or smaller
   * than previous character in t
   */

  const findNextIndex = (positions: number[], target: number): number => {
    /**
     * with this function, we need to find the number that is the nearest
     * our target, it should be the next element that bigger than target.
     */

    let left = 0;
    let right = positions.length - 1;
    let result = -1;

    // binary search
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let currentMid = positions[mid]!;

      if (currentMid > target) {
        // potential result
        result = currentMid;
        // need to check more to take the first element bigger than target
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return result;
  };

  // it is the time we will interact with s

  // check the previous value, make sure it doesn't bigger than current index

  let previousIndex = -1;

  for (let ch of s) {
    // if stored doesn't have ch --> false
    if (!stored[ch]) return false;

    // find and compare the previous index with the next index

    let nextIndex = findNextIndex(stored[ch], previousIndex);

    if (nextIndex === -1) {
      return false;
    }
    previousIndex = nextIndex;
  }

  return true;
}
