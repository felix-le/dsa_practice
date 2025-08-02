export const checkCharFrequency = (str: string, char: string): string => {
  let strObj: { [key: string]: number } = {};

  for (let a of str) {
    strObj[a] = (strObj[a] || 0) + 1;
  }

  let maxCount = 0;
  let result: string = '';

  for (let c in strObj) {
    if (strObj[c]! > maxCount) {
      maxCount = strObj[c]!;
      result = c;
    }
  }
  console.log('🚀 ~ checkCharFrequency ~ result:', result);

  return result;
};
// export const checkCharFrequency = (str: string, char: string): number => {
//   let count = 0;

//   for (let c of str) {
//     if (c === char) count++;
//   }
//   console.log('🚀 --------------------------------------🚀');
//   console.log('🚀 ~ checkCharFrequency ~ count:', count);
//   console.log('🚀 --------------------------------------🚀');

//   return count;
// };
