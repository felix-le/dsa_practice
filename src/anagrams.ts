// @ts-nocheck
// Examples:

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat", "car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

export function validAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length || !str1 || !str2) return false;

  const counter1: { [key: string]: number } = {};
  const counter2: { [key: string]: number } = {};
  for (let char of str1) {
    counter1[char] = (counter1[char] || 0) + 1; // if char is not in the counter1, we set it 1, if it is, we increment it
  }
  for (let char of str2) {
    counter2[char] = (counter2[char] || 0) + 1;
  }
  for (let key in counter1) {
    if (counter1[key] !== counter2[key]) return false;
  }
  return true;
}
