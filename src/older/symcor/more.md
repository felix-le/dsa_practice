"Now, let's solve another common problem. Given an array of integers nums and an integer target, I would like you to write a function that returns the indices of the two numbers in the array that add up to the target."

```ts
function twoSum(nums: number[], target: number): number[] {
  // The Map stores: { number => its_index }
  const stored = new Map<number, number>();

  // Create a loop to check the indices of numbers.
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i]!;
    const complement = target - currentNum;

    // Check if the complement is inside of the store.
    if (stored.has(complement)) {
      // If yes, we return it with the index.
      return [stored.get(complement)!, i];
    }

    // If not, we will add the CURRENT number and its index by using set.
    stored.set(currentNum, i);
  }

  // This will never run as the problem guarantees a result.
  return [];
}
```
