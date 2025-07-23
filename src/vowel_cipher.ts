/**
 * Write a function that receives a lowercase string and replaces each vowel with the next vowel in the sequence.

Vowel Sequence:
a → e, e → i, i → o, o → u, u → a

Consonants should remain unchanged.

You only need to support lowercase English letters.

No whitespace or special characters will be included in the input.

📥 Input:
A single string consisting only of lowercase letters.

📤 Output:
A new string with each vowel replaced as described.

 */

export const vowelCipherFn = (str: string): string => {
  const replaceObj: { [key: string]: string } = {
    a: 'e',
    e: 'i',
    i: 'o',
    o: 'u',
    u: 'a',
  };
  const result = [...str].map((c) => (c in replaceObj ? replaceObj[c] : c));
  console.log('🚀 ~ vowelCipherFn ~ result:', result.join(''));

  return 'hello';
};
