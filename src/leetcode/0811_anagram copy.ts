/**
 * Function name: isAnagram
Goal: Determine if two given strings are anagrams of each other.

Definition
Two strings are anagrams if they contain the same characters with the same frequency, but possibly in a different order.

Rules
The function should return true if the strings are anagrams, otherwise false.

Ignore spaces, punctuation, and case sensitivity (e.g., "Listen" and "Silent" are anagrams).

Only alphabetic characters are considered for comparison.

Time complexity target: O(n) where n is the length of the strings.
 */

//

export function isAnagram(s1: string, s2: string): boolean {
  /**
   * input: 2 strings -> compare isAnagram?
   * Output: boolean
   * Notice: ignore spaces, punctuation, case sensitivity
   * Only alphabetic characters
   */

  const isAlphabetic = (c: string) => {
    return /[a-z]/.test(c);
  };

  const clearStringFn = (s: string) => {
    let result: string = '';
    const lowerStringCase = s.toLowerCase();
    for (let c of lowerStringCase) {
      if (isAlphabetic(c) === true) {
        result += c;
      }
    }
    return result;
  };

  const stored = new Map<string, number>();

  const cleanS1 = clearStringFn(s1);
  const cleanS2 = clearStringFn(s2);
  for (const c1 of cleanS1) {
    const count = stored.get(c1) || 0;
    stored.set(c1, count + 1);
  }

  for (const c2 of cleanS2) {
    if (!stored.has(c2)) return false;
    const countInS2 = stored.get(c2);

    if (!countInS2) {
      return false;
    } else {
      stored.set(c2, countInS2 - 1);
    }
  }

  return true;
}
