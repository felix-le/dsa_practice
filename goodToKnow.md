```ts
// Index all char into number
export const letterToIndex = (s: string): number[] => {
  return [...s].map((c) => c.charCodeAt(0) - 96);
};

const char = 'A'; // Unicode = 65
const binary = char.charCodeAt(0).toString(2);

console.log(binary); // 👉 "1000001"
String.fromCharCode(parseInt('1000001', 2)); // 👉 "A"
// Number
const num = 5; // Unicode = 65
const numBinary = num.toString(2);
// kiểm tra có phải là chữ hoặc số không:
// !/[a-zA-Z0-9]/.test

// The sum of 5 and 3 is 8.
// The product of 5 and 3 is 15.
// The difference between 5 and 3 is 2.
// The quotient of 6 and 2 is 3.
```

### **Time Complexity Quick Reference (Based on Input Size `n`)**

**Rule of Thumb:** A standard server can perform roughly **10⁸ (100 million) operations per second**. Your algorithm's total operations must be less than this to pass within the typical 1-2 second time limit.

| Input Size (n) | Required Time Complexity | Approximate Operations (for max n)            | Common Algorithm Examples                               |
| :------------- | :----------------------- | :-------------------------------------------- | :------------------------------------------------------ |
| n <= 20        | O(2^n), O(n!)            | 2^20 ≈ 10^6 (1 Million)                       | Backtracking, Generating all Subsets/Permutations       |
| n <= 100       | O(n⁴)                    | 100^4 = 10^8 (100 Million)                    | Some complex Dynamic Programming problems               |
| n <= 500       | O(n³)                    | 500³ = 1.25 \* 10^8 (125 Million)             | Floyd-Warshall, DP with 3 states                        |
| n <= 5,000     | O(n²)                    | 5000² = 2.5 \* 10^7 (25 Million)              | Brute-force with nested loops, basic DP                 |
| n <= 10^5      | O(n log n) or O(n)       | 10^5 \* log(10^5) ≈ 1.7 \* 10^6 (1.7 Million) | Sorting, Two Pointers, Sliding Window, Heap, Traversals |
| n >= 10^9      | O(log n) or O(1)         | log(10^9) ≈ 30                                | Binary Search, Mathematical formulas                    |

### **How to Use This Table for Your Problem:**

1.  **Look at the constraint:** `1 <= prices.length <= 10^5`.
2.  **Find the row for `n <= 10^5`:** This is the row you care about.
3.  **Look at the "Required Time Complexity" column:** It clearly states **O(n log n) or O(n)**.
4.  **Look at the "Approximate Operations" column:** You can see that an O(n) algorithm would take about `10^5` operations, and an O(n log n) would take about `1.7 * 10^6` operations. Both are safely under the `10^8` limit.
5.  **Conclusion:** This confirms that your brute-force O(n²) approach is not viable, and you must find a linear or "n log n" solution.
