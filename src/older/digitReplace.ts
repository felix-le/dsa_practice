/*Problem Statement:
Given a string containing only digits (0 to 9), return a new string where each digit is replaced by its corresponding English word (in lowercase), separated by a dash -.

Digit Mapping:
0 → zero, 1 → one, 2 → two, 3 → three, 4 → four,
5 → five, 6 → six, 7 → seven, 8 → eight, 9 → nine

Constraints:
Input string contains only digits (0–9)
No whitespace or special characters
*/

export const digitReplaceFn = (strNum: string): string => {
  const numberStr: [key: number, string][] = [
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eight'],
    [9, 'nine'],
    [0, 'zero'],
  ];
  const result: string[] = [];
  for (let n of strNum) {
    let parseN = parseInt(n);
    for (let [key, value] of numberStr) {
      if (key === parseN) {
        result.push(value);
      }
    }
  }
  return result.join(',').replaceAll(',', '-');
};
export const digitReplaceFn2 = (strNum: string): string => {
  const numberMap: { [key: string]: string } = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
  };

  const result = [...strNum].map((d) => numberMap[d]);
  return result.join('-');
};
