import { isAnagram } from './0811_anagram';
const a1 = [
  'listen',
  'Listen',
  'rail safety',
  'Dormitory',
  'The eyes',
  'hello',
  'abc',
];

const a2 = [
  'silent',
  'Silent',
  'fairy tales',
  'Dirty room!!',
  'They see',
  'world',
  'abcc',
];

for (let i = 0; i < a1.length; i++) {
  console.log(a1[i], a2[i], '=>', isAnagram(a1[i]!, a2[i]!));
}

// true
// true
// true
// true
// true
// false
// false
