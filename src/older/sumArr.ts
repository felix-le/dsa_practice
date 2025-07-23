export const sumArr = (arr: number[]): number => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

console.log(sumArr([1, 2, 3, 4, 5]));

export const sumArr2 = (arr: number[]): number => {
  if (arr.length === 0) return 0;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i]!;
  }
  return result;
};
