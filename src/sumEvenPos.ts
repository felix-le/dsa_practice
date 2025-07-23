export function sumEven(arr: number[]): number {
  const evenNumbs: number[] = [];

  arr.forEach((n, i) => {
    (i + 1) % 2 === 0 && evenNumbs.push(n);
  });

  const result = evenNumbs.reduce((a, b) => a + b, 0);
  console.log('🚀 ~ sumEven ~ result:', result);

  return result;
}
