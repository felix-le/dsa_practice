/**
 * 🔹 Exercise 5: Binary Gap
Difficulty: ⭐⭐
Type: Bit manipulation + tracking positions

📝 Problem Statement:
Write a function that takes a positive integer n and returns the length of the longest sequence of consecutive 0s that is surrounded by 1s in the binary representation of n.

📥 Input:
A single integer n (1 ≤ n ≤ 2³¹ − 1)

📤 Output:
An integer: the length of the longest binary gap (consecutive zeros surrounded by 1s).

 */

export const countZeroBiggest = (n: number): number => {
  let maxGap = 0;
  let currentGap = 0;
  let insideGap: boolean = false;
  const binary = n.toString(2);

  for (const bit of binary) {
    if (bit === '1') {
      if (insideGap && currentGap > maxGap) {
        maxGap = currentGap;
      }
      currentGap = 0;
      insideGap = true;
    } else if (insideGap) {
      currentGap++;
    }
  }
  return maxGap;
};
