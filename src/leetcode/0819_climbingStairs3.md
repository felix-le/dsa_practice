### **Solving "Climbing Stairs" - Following the Universal Protocol (with Detailed Code)**

```
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:

1 <= n <= 45
```

#### **Step 1: Understand**

> **Goal:** By confirming the important information from the requirement for both input and output, I can make sure that I fully understand the problem.

- **Analyze I/O & Constraints:**
  - **Input:** `n` (number > 0)
  - **Output:** `number` (total distinct ways)
  - **Constraints:** 1 <= n <= 45 -> we can use an algorithm with solution has time complexity O(2^n). However, it is too slow, we should aim for a linear time complexity O(n)

> **Question the Edge Cases:**

- Output when `n=1` => based on example => return 1
- `n=2` => based on example => return 2

#### **Step 2: Approach & Strategy**

> **Goal:** Show that I have a process to resolve the problem, starting from a simple idea and moving to an optimal one.

> **Brute-Force Solution First (Recursive):**

- initial thought is to use recursion as the number of ways to get step `n = ways[n-1] + ways[n-2]`
- base cases are `ways(1)` = 1 and `ways(2) = 2`

> **Optimal Solution (Dynamic Programming):**

- **Difference & Improvement:**
  Instead of a top-down recursive approach, I will use a bottom up **Dynamic Programming** approach. This avoids re-computation by calculating the number of ways for each step sequentially and storing only the results of the last two steps.

- **How it works:**

1. base cases for `n=1` and `n=2`
2. iterate from `i = 3` up to `n`
3. each step `i`, sum = `i-1` and `i-2`
4. O(n) and O(1)

#### **Step 3: Think Aloud (Implementation)**

- **Goal:** Walk through my coding process step-by-step, explaining both solutions.

"First, I'll write out the brute-force recursive solution we discussed. It's a direct translation of the recurrence relation."

**Solution 1: Brute-Force Recursion (O(2^n) Time, O(n) Space)**

```typescript
/**
 * Calculates the number of ways to climb n stairs using a native recursive approach.
 * NOTE: This solution is inefficient and will exceed the time limit for larger n
 */

function climbStairs_recursive(n: number): number {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return climbStairs_recursive(n - 1) + climbStairs_recursive(n - 2);
}
```

"As we discussed, this solution is too slow. Now, I will implement the optimized Dynamic Programming solution."

**Solution 2: Dynamic Programming (O(n) Time, O(1) Space)**

```typescript
/**
 * Calculates the number of ways to climb n stairs using an optimized bottom-up dynamic programming approach with constant space
 */

function climbStairs(n: number): number {
  // First, I'll handle the base cases. If n is 1 or 2, the num ber of ways is simply n.
  // This covers the edge cases and provides the starting point for our calculation.

  if (n <= 2) return n;

  // I'll initialize two variables to track the number of ways for the two preceding steps
  // I will start my loop from i = 3, so these variables will represent the ways for

  // step 2 and step 1 respectively

  let oneStepBefore = 2; //Represent ways(i-1), initialized for i=3, so it's ways(2)
  let twoStepBefore = 1; // represents ways(i-2), initialized for i = 3, so it's ways(1)

  // I will use a variable to store the ways for the current step `i`

  let currentWays = 0;
  // it is the time to loop from 3rd step up to the target step `n`

  for (let i = 3; i <= n; i++) {
    // the number of ways to reach the current step `i` is the sum of the ways
    // to reach the previous two steps, as per our recurrence relation.

    currentWays = oneStepBefore + twoStepBefore;

    // For the next iteration, the step that was "one step before"
    // will now become "two steps before". We are sliding our window forward.

    twoStepsBefore = oneStepBefore;

    oneStepBefore = currentWays;
  }
  return oneStepBefore;
}
```

#### **Step 4: Verification & Conclusion**

> **Goal:** Verify the optimal solution with a simple example and wrap up the discussion.

> **Simple Example (Dry Run with Optimal Solution):**

- Let's quickly test: `n = 4`
  oneStepBefore is 2, twoStepBefore is 1
  i = 3: currentWays = 2 + 1 = 3 => oneStep = 3, twoStep = 2
  i = 4; currentWays = 3 + 2 = 5 => oneStep 5, twoStep 3

=> return `5`

- **Confirm the Final Complexity:**

"The final, optimal solution has a time complexity of O(n) due to the single loop, and a space complexity of O(1) as it only uses a constant number of variables."

- **Open for Discussion:**
  "This bottom-up approach is efficient and solves the problem within the given constraints. Does this look good to you? Please let me know your thoughts or if you have any questions."
