// export function same(arr1: number[], arr2: number[]): boolean {
//   if (!arr1 || !arr2 || arr1.length !== arr2.length) {
//     return false;
//   }
//   let arr2Copy = [...arr2];
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2Copy.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2Copy.splice(correctIndex, 1);
//   }
//   return true;
// }

export function same2(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) return false;

  const frequencyCounter1: { [key: number]: number } = {};
  const frequencyCounter2: { [key: number]: number } = {};

  // O(n)
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  // O(n) 
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // O(n)
  for (let key in frequencyCounter1) {
    const keySquared = (+key) ** 2;
    if (!(keySquared in frequencyCounter2)) return false;
    if (frequencyCounter2[keySquared] !== frequencyCounter1[key]) return false;
  }

  return true;
}