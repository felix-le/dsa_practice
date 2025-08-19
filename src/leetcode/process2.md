### **The Universal Protocol for Coding Interviews**

#### **Phase 1: Clarification & Scoping (The "Understand" Phase)**

**Goal:** Confirm you are solving the right problem before you start.

1.  **Rephrase the Core Task:**
    - Restate the main objective in your own words.
    - **Template:** _"Just to ensure I'm on the right track, my understanding is that I need to [main objective] given [input type]. The function should then return [output type]. Is this correct?"_

2.  **Analyze I/O & Constraints:**
    - Verbally acknowledge the inputs, outputs, and critical constraints.
    - **Template:** _"Okay, so the input is a [data structure] of [data type]. The output will be a [data structure/type]. I'm also noticing the constraint on the input size is [mention constraint], which suggests that a solution with a time complexity of [inefficient complexity, e.g., O(n²)] might be too slow, and I should aim for something more optimal like [efficient complexity, e.g., O(n)]."_

3.  **Question the Edge Cases:**
    - Probe the boundaries of the problem.
    - **Template:** _"Before I discuss my approach, I have a few clarifying questions about potential edge cases. How should the function handle [e.g., an empty array, a null value, negative numbers, a single-element input]? What are the expected return values in these scenarios?"_

#### **Phase 2: Approach & Strategy (The "Plan" Phase)**

**Goal:** Outline your solution path, starting broad and then refining to the optimal approach.

1.  **Propose the Brute-Force Solution:**
    - Describe the most straightforward, "obvious" solution first.
    - **Template:** _"My initial thought is a brute-force approach to cover all possibilities. I could [describe the simple, often nested-loop, method]."_

2.  **Analyze the Brute-Force Complexity:**
    - State its complexity and why it's a starting point, not the final answer.
    - **Template:** _"This method would guarantee a correct answer, but its time complexity is [e.g., O(n²)]. Based on the constraints we discussed, this is likely not efficient enough. I will now think about how to optimize this."_

3.  **Develop the Optimal Solution (The "Insight" Moment):**
    - Explain the key idea that allows for optimization.
    - **Template:** _"To optimize this, the key insight is that [describe the core idea, e.g., 'we can process the data in a single pass if we keep track of X']. Instead of re-calculating everything each time, we can maintain [e.g., a running minimum, a hash map of seen values, two pointers]."_
    - **Continue:** _"My optimal strategy will be to [describe the high-level steps of the efficient algorithm, e.g., 'initialize two pointers at the start and end', 'iterate once while storing results in a map']. This should allow me to achieve the target time complexity of [e.g., O(n)]."_

#### **Phase 3: Implementation (The "Think Aloud" Phase)**

**Goal:** Write clean code while keeping the interviewer engaged in your thought process.

1.  **Set Up the Structure:**
    - **Template:** _"Okay, I'll start by setting up the main function and initializing my variables. I'll need a variable for [e.g., the final result], initialized to [initial value], and another for [e.g., the minimum value seen so far], initialized to [initial value]."_

2.  **Narrate the Core Logic:**
    - Explain each significant block of code as you write it.
    - **Template:** _"Now I'm starting the main loop which will iterate through [the data structure]. Inside the loop, the first step is to [describe the first action, e.g., 'calculate the potential value']. Next, I'll update my result variable by [describe the update logic, e.g., 'comparing it with the current maximum']. Finally, I need to update my tracking variable for the next iteration by [describe the tracking logic, e.g., 'updating the minimum price seen so far']."_

3.  **Handle the Return:**
    - **Template:** _"After the loop completes, the result variable will hold the final answer, so I'll return it."_

#### **Phase 4: Verification & Conclusion (The "Confirm" Phase)**

**Goal:** Prove your solution works and conclude the problem professionally.

1.  **Dry Run with an Example:**
    - Manually trace your code with a simple, non-trivial example.
    - **Template:** _"The implementation looks complete. I'd like to quickly dry run it with the example [mention example] to verify the logic. Initially, my variables are [state initial values]. In the first iteration, [describe changes]. In the second, [describe changes]... and so on. The loop finishes, and the function returns [final value], which matches the expected output."_

2.  **Re-state Final Complexity:**
    - Confirm the efficiency of your final solution.
    - **Template:** _"As planned, this solution involves a single pass through the data, making the final time complexity [e.g., O(n)]. Since I only used a few variables for storage, the space complexity is [e.g., O(1)]."_

3.  **Open for Discussion:**
    - Hand the conversation back to the interviewer.
    - **Template:** _"Does this approach and implementation look good to you? I'm open to any questions or suggestions for further improvements."_
