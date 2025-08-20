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
  - **Input:**
  - **Output:**
  - **Constraints:**

- **Question the Edge Cases:**

#### **Step 2: Approach & Strategy**

> **Goal:** Show that I have a process to resolve the problem, starting from a simple idea and moving to an optimal one.

- **Brute-Force Solution First (Recursive):**

- **Optimal Solution (Dynamic Programming):**
  - **Difference & Improvement:**
  - **How it works:**

#### **Step 3: Think Aloud (Implementation)**

- **Goal:** Walk through my coding process step-by-step, explaining both solutions.

"First, I'll write out the brute-force recursive solution we discussed. It's a direct translation of the recurrence relation."

**Solution 1: Brute-Force Recursion (O(2^n) Time, O(n) Space)**

```typescript

```

"As we discussed, this solution is too slow. Now, I will implement the optimized Dynamic Programming solution."

**Solution 2: Dynamic Programming (O(n) Time, O(1) Space)**

```typescript

```

#### **Step 4: Verification & Conclusion**

> **Goal:** Verify the optimal solution with a simple example and wrap up the discussion.

- **Simple Example (Dry Run with Optimal Solution):**

- **Confirm the Final Complexity:**

- **Open for Discussion:**
