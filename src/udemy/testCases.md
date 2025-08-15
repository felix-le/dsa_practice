import { mergeStringsAlternately } from './0812_mergeStringsAlternately';

const w1 = [
'abc', // Example 1
'ab', // Example 2
'abcd', // Example 3
'xyz',
'',
'abcde',
'abcd',
'go',
'a',
'HELLO',
'a1b2',
'!@#',
'',
];

const w2 = [
'pqr', // Example 1
'pqrs', // Example 2
'pq', // Example 3
'123',
'hello',
'',
'xy',
'play',
'z',
'world',
'c3d4e5',
'$%^&*',
'',
];

for (let i = 0; i < w1.length; i++) {
console.log(w1[i], w2[i], '=>', mergeStringsAlternately(w1[i]!, w2[i]!));
}

/\*\*

- abc pqr => apbqcr
  ab pqrs => apbqrs
  abcd pq => apbqcd
  xyz 123 => x1y2z3
  hello => hello
  abcde => abcde
  abcd xy => axbycd
  go play => gpolay
  a z => az
  HELLO world => HweLoLrldo
  a1b2 c3d4e5 => ac13bd24e5
  !@# $%^&*     => !$@%^#&\*
  \*/
