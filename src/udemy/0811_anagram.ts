/**
 * Function name: isAnagram
Goal: Determine if two given strings are anagrams of each other.

Definition
Two strings are anagrams if they contain the same characters with the same frequency,
 but possibly in a different order.

Rules
The function should return true if the strings are anagrams, otherwise false.

Ignore spaces, punctuation, and case sensitivity (e.g., "Listen" and "Silent" are anagrams).

Only alphabetic characters are considered for comparison.

Time complexity target: O(n) where n is the length of the strings.
 */

export function isAnagram(s1: string, s2: string): boolean {
  /**
   * Input: two strings
   * output: boolean
   * if they are anagram -> true
   * otherwise, false
   *
   * Notices:
   * 1. Ignore special characters --> write a function to remove all special characters
   * 2. ONLY ALPHABETIC CHARACTERS --> write a function to get only alphabetic characters.
   * 3. length --> a1.length !== a2.length --> false
   */

  /**
   * every time we have count --> think about Map
   * create a new Map
   * count alphabetic characters
   */

  if (s1.length !== s2.length) return false;

  const isAlphabetic = (c: string): boolean => {
    return /[a-z]/.test(c);
  };

  const cleanString = (s: string): string => {
    const lowerCaseS = s.toLowerCase();
    let result = '';

    for (let c of lowerCaseS) {
      if (isAlphabetic(c) === true) {
        result += c;
      }
    }
    return result;
  };
  // create a Map

  const countCharacter = new Map<string, number>();

  for (let c1 of cleanString(s1)) {
    const count = countCharacter.get(c1) || 0;
    countCharacter.set(c1, count + 1);
  }

  for (let c2 of cleanString(s2)) {
    if (!countCharacter.has(c2)) {
      return false;
    }
    const countInS2 = countCharacter.get(c2);
    if (!countInS2) {
      return false;
    } else {
      countCharacter.set(c2, countInS2 - 1);
    }
  }
  return true;
}
