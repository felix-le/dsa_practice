Chắc chắn rồi. Tôi sẽ đóng vai bạn (ứng viên) và trình bày toàn bộ quá trình giải bài toán này trong một buổi phỏng vấn, tuân thủ nghiêm ngặt "Định luật vàng" của chúng ta.

---

### **Bắt đầu buổi phỏng vấn (Màn hình Roleplay)**

**Interviewer (Tôi):** "Hi Felix, thanks for joining today. Let's start with a coding problem. You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? For example, if `n` is 3, there are 3 ways: 1+1+1, 1+2, and 2+1."

**Felix (Tôi đóng vai):**

#### **Phase 1: Clarification & Scoping (The "Understand" Phase)**

"Okay, thank you. Let me make sure I understand the problem correctly.

So, I'm given a number of stairs, `n`. I need to find the total number of unique combinations of 1-step and 2-step moves to reach exactly the `n`-th step. The order of the steps matters. Is that correct?"

**Interviewer:** "Yes, that's correct."

**Felix:** "Great. I have a few clarifying questions about the constraints and edge cases:

- What is the expected range for `n`? Can `n` be zero or negative?
- Just to confirm, for `n=1`, there is only 1 way (one 1-step move), right?
- And for `n=2`, there are 2 ways (1+1 and 2), as in the example.

Let's assume for now that `n` is a positive integer."

**Interviewer:** "Good questions. You can assume `n` will be a positive integer, let's say from 1 up to about 45. And yes, your understanding for n=1 and n=2 is correct."

**Felix:** "Perfect, thank you. So the input is a positive integer `n`, and the output should be a single integer representing the total number of distinct ways."

#### **Phase 2: Approach & Strategy (The "Plan" Phase)**

"My initial thought for problems involving combinations is often recursion. I can try to define a function, let's say `ways(n)`, that calculates the number of ways to reach step `n`.

To think about this, I'll consider the very last move to reach the top step, `n`. That last move must have been either a 1-step climb from step `n-1`, or a 2-step climb from step `n-2`. There are no other possibilities.

This means the total number of ways to reach step `n` is simply the sum of the number of ways to reach step `n-1` and the number of ways to reach step `n-2`. This gives me a recurrence relation: `ways(n) = ways(n-1) + ways(n-2)`.

This looks exactly like the Fibonacci sequence.

For this to work, I need base cases.

- For `n=1`, there's 1 way.
- For `n=2`, there are 2 ways.

So, a brute-force recursive solution would be to implement this directly. However, this approach would have an exponential time complexity of O(2^n) because it recalculates the same subproblems many times. Given that `n` can go up to 45, this will be far too slow.

A much better approach is to use **Dynamic Programming** with a bottom-up strategy. Instead of starting from `n` and going down, I can start from the base cases and build my way up to `n`.

My strategy will be:

1.  Handle the base cases: if `n` is 1 or 2, return `n`.
2.  Initialize two variables to store the results for the previous two steps, `one_step_before` (for `n-1`) and `two_steps_before` (for `n-2`).
3.  I'll loop from 3 up to `n`. In each iteration, I'll calculate the number of ways for the current step by summing the two previous variables.
4.  Then I'll update the two variables for the next iteration.
5.  Finally, I'll return the result for `n`.

This approach will have a time complexity of O(n) and a space complexity of O(1), which is very efficient."

#### **Phase 3: Implementation (The "Think Aloud" Phase)**

"Okay, that sounds like a solid plan. I'll start coding it out now and explain as I go."

```typescript
function climbStairs(n: number): number {
  // First, I'll handle the base cases we discussed.
  // If n is 1 or 2, the number of ways is simply n.
  if (n <= 2) {
    return n;
  }

  // Now, I'll initialize two variables to track the number of ways
  // for the two preceding steps. I'll start my loop from i=3,
  // so these variables will represent the ways for n=2 and n=1 respectively.
  let oneStepBefore = 2; // Corresponds to ways(2)
  let twoStepsBefore = 1; // Corresponds to ways(1)

  // I'll use a variable to store the ways for the current step `i`.
  let currentWays = 0;

  // Now, I'll loop from the 3rd step up to the target step `n`.
  for (let i = 3; i <= n; i++) {
    // The number of ways to reach the current step `i` is the sum of the ways
    // to reach the previous two steps, as per our recurrence relation.
    currentWays = oneStepBefore + twoStepsBefore;

    // For the next iteration, the step that was one step before
    // will now be two steps before.
    twoStepsBefore = oneStepBefore;

    // And the current ways we just calculated will become the new one step before.
    oneStepBefore = currentWays;
  }

  // After the loop finishes, the `oneStepBefore` variable (or `currentWays`)
  // will hold the total number of ways for the nth step.
  return oneStepBefore;
}
```

#### **Phase 4: Verification & Conclusion (The "Confirm" Phase)**

"Alright, the code is written. I'd like to do a quick dry run with the example `n = 4` to make sure it works as expected. The expected output should be 5 (1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2)."

- "Input is `n=4`. `n` is not <= 2, so we proceed."
- "Initialize `oneStepBefore = 2`, `twoStepsBefore = 1`."
- "Loop starts at `i = 3`:"
  - `currentWays = 2 + 1 = 3`. (Correct, for n=3 there are 3 ways).
  - `twoStepsBefore` becomes `2`.
  - `oneStepBefore` becomes `3`.
- "Loop continues with `i = 4`:"
  - `currentWays = 3 + 2 = 5`. (Correct, for n=4 there are 5 ways).
  - `twoStepsBefore` becomes `3`.
  - `oneStepBefore` becomes `5`.
- "The loop finishes as `i` is now greater than `n`."
- "The function returns `oneStepBefore`, which is `5`. The logic seems correct."

"So, to summarize, this solution uses a bottom-up dynamic programming approach. It has a time complexity of **O(n)** because of the single loop, and a space complexity of **O(1)** since we only use a few constant variables."

"Does this approach look good to you? Do you have any questions about my implementation?"
