const arr = [-4, -3, -2, -1, 0, 1, 2, 5];

export function sumZero(arr: number[]): number[] | undefined {
  if (!arr || arr.length === 0) return [];
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left]! + arr[right]!;
    if (sum === 0) return [arr[left]!, arr[right]!];
    else if (sum > 0) right--;
    else left++;
  }
  return undefined;
}

export function countUniqueValues(arr: number[]): number {
  if (!arr || arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]!;
    }
  }
  return i + 1;
}

// arr should be sorted first
export function countUniqueValues2(arr: number[]): number {
  if (arr.length === 0) return 0;
  const uniqueArr = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]!) {
      uniqueArr.push(arr[i]!)
    }
  }
  return uniqueArr.length;
}
// arr should be sorted first
export function countUniqueValues3(arr: number[]): number {
  if (arr.length === 0) return 0;
  const uniqueArr: number[] = []

  for (let i = 0; i < arr.length; i++) {
    if (uniqueArr.includes(arr[i]!)) continue;
    uniqueArr.push(arr[i]!)
  }
  return uniqueArr.length;
}