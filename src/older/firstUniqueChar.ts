// export const firstUniChar = (str: string): string => {
//   let countObj: { [key: string]: number } = {};
//   let result: string = '';
//   for (let char of str) {
//     countObj[char] = (countObj[char] || 0) + 1;
//   }

//   for (let c of str) {
//     if (countObj[c] === 1) {
//       return c;
//     }
//   }
//   return '_';
// };
export const firstUniChar = (str: string): string => {
  // count all characters of string
  // loop the second time for the the string -> check if counter = 1, return the character
  // if all counter > 1 --> return _

  const charCounter: { [char: string]: number } = {};

  for (let c of str) {
    charCounter[c] = (charCounter[c] || 0) + 1;
  }

  for (let c of str) {
    if (charCounter[c] === 1) {
      return c;
    }
  }
  return '_';
};
