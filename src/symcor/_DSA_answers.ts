//Given an array of integers nums, write a function to return true if any value appears at least twice in the array,
// and false if every element is distinct."
const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

function checkIsDup(arr: number[]): boolean {
  const storeNum = new Map<number, number>();

  for (const num of arr) {
    const count = storeNum.get(num) || 0;
    storeNum.set(num, count + 1);
  }

  for (const num of arr) {
    if (storeNum.get(num) === 1) {
      return false;
    }
  }
  return true;
}

function checkIsDup2(arr: number[]): boolean {
  const uniqueData = new Set<number>();

  for (const num of arr) {
    if (uniqueData.has(num)) {
      return true;
    }
    uniqueData.add(num);
  }
  return false;
}
//Given two strings, s and t, write a function to return true if t is an anagram of s.

function checkAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;

  const str1Count = new Map<string, number>();

  for (const char of str1) {
    const countS = str1Count.get(char) || 0;
    str1Count.set(char, countS + 1);
  }

  for (const char of str2) {
    const countInStr2 = str1Count.get(char);

    if (!countInStr2) {
      return false;
    }
    str1Count.set(char, countInStr2 - 1);
  }
  return true;
}
// "Given an array of integers nums and a target integer, write a function to return the indices of the two numbers that add up to the target."

function twoSum(nums: number[], target: number): number[] {
  const numMap = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i]!;
    const complement = target - currentNum;

    if (numMap.has(complement)) {
      return [numMap.get(complement)!, i];
    }

    numMap.set(currentNum, i);
  }
  return [];
}
// "Given a string s containing only '(', ')', '{', '}', '[' and ']', write a function to determine if the input string is valid."

export function isValid(s: string): boolean {
  const stack: string[] = [];
  const bracketMap = new Map<string, string>([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);

  for (const char of s) {
    if (bracketMap.has(char)) {
      const lastOpen = stack.pop();
      if (lastOpen !== bracketMap.get(char)) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}
// "Given a string s, write a function to determine if it is a palindrome,
// considering only alphanumeric characters and ignoring cases."

function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !/[a-zA-Z0-9]/.test(s[right]!)) {
      right++;
    }
    while (left < right && !/[a-zA-Z0-9]/.test) {
      left--;
    }
    if (s[left]?.toLowerCase() !== s[right]?.toLowerCase()) {
      return false;
    }
    right++;
    left--;
  }
  return true;
}
// "Given a string s,
// write a function to find the first non-repeating character in it and return its index.
// If it does not exist, return -1."

function getIndexNonRepeat(s: string): number {
  const storeChar = new Map<string, number>();

  for (const char of s) {
    const countChar = storeChar.get(char) || 0;
    storeChar.set(char, countChar + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (storeChar.get(s[i]!) === 1) {
      return i;
    }
  }
  return -1;
}

// Write a function that takes a string as input and reverses it

function reversesString(s: string): string {
  return s.split('').reverse().join('');
}
// "Explain what recursion is using a simple example (like factorial).

export function factorial(n: number): number {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
// function isPalindrome2(s: string): boolean {
//   let left = 0;
//   let right = s.length - 1;

//   while (left < right) {
//     while (left < right && !isAlphaNum(s[left])) {
//       left++;
//     }
//     while (left < right && !isAlphaNum(s[right])) {
//       right--;
//     }
//     if (s[left].toLowerCase() !== s[right].toLowerCase()) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }
