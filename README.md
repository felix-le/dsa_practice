### **English Language Resource for Week 1**

To replace the previous video, we will use another classic, in-depth talk that covers system design and technical trade-offs:

- **Video:** [10 Things I Regret About Node.js - Ryan Dahl](https://www.youtube.com/watch?v=M3BM9TB-8yA)
- **Reasoning:** This video not only helps with clear pronunciation and listening practice but also provides deep insights into design decisions, mistakes, and lessons learned—valuable topics for both System Design and Behavioral interviews.

---

### **WEEK 1: Recursion, Sorting Algorithms & Linear Data Structures**

**Weekly Goals:**

- Master recursion and its application in algorithms.
- Achieve proficiency in sorting algorithms, from basic to advanced (Merge Sort, Quick Sort).
- Understand and be able to implement linear data structures (Linked Lists, Stacks, Queues).
- Build a solid foundation in System Design and apply its concepts to NodeJS.
- Connect theoretical knowledge with corresponding, themed LeetCode problems each day.

---

### **Monday: Theme - Recursion & The Call Stack**

- **Morning (6:00 AM - 11:00 AM): DSA & Coding**
  - **Udemy:** Section 7 (Recursion), Section 8 (Recursion Problem Set).
  - **Cracking the Coding Interview:** Read Chapter 8: Recursion and Dynamic Programming (focusing on the introduction to Recursion).
  - **LeetCode Practice (Recursion):**
    1.  [Reverse String](https://leetcode.com/problems/reverse-string/) (solve recursively)
    2.  [Power of Four](https://leetcode.com/problems/power-of-four/)
    3.  [Same Tree](https://leetcode.com/problems/same-tree/)
- **Afternoon (2:00 PM - 5:00 PM): FE & System Design**
  - **FE Fundamentals (Linking with the Call Stack):** Read "You Don't Know JS" - "[Scope & Closures](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/README.md)", Chapter 3: Function vs. Block Scope and Chapter 4: Hoisting to understand how the call stack manages function scopes.
  - **System Design (Accelerated):** Read the [System Design Primer](https://github.com/donnemartin/system-design-primer) sections:
    1.  An introduction to system design
    2.  How to approach a system design interview question
    3.  Back-of-the-envelope estimation
    4.  Communication
- **Evening (8:00 PM - 11:30 PM): Practice & English**
  - **English:** Watch and transcribe the first 5 minutes of the video [10 Things I Regret About Node.js](https://www.youtube.com/watch?v=M3BM9TB-8yA).
  - **Behavioral:** Read Chapter 5: Behavioral Questions in "Cracking the Coding Interview".

---

### **Tuesday: Theme - Basic & Advanced Sorting Algorithms**

- **Morning (6:00 AM - 11:00 AM): DSA & Coding**
  - **Udemy:** Section 11 (Bubble Sort), 12 (Selection Sort), 13 (Insertion Sort), 15 (Merge Sort).
  - **Cracking the Coding Interview:** Read Chapter 10: Sorting and Searching (focusing on the sorting algorithms learned).
  - **LeetCode Practice (Sorting):**
    1.  [Sort Colors](https://leetcode.com/problems/sort-colors/)
    2.  [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)
    3.  [Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/)
- **Afternoon (2:00 PM - 5:00 PM): FE & System Design**
  - **FE Fundamentals (Linking with Sorting):** Read the MDN documentation for [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). Understand how the `compare` function works and how the V8 engine uses Timsort (a hybrid of Merge Sort and Insertion Sort).
  - **System Design:** Read about core components: [Load Balancer](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design_topics.md#load-balancer) and [Caching](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design_topics.md#caching).
- **Evening (8:00 PM - 11:30 PM): Practice & English**
  - **English:** Watch and transcribe the next 5 minutes (5:00 - 10:00) of the video.
  - **Object-Oriented Design (OOD):** Read the "[Design a Parking Lot](https://github.com/tssovi/object-oriented-design-case-studies/blob/master/src/main/java/design/parkinglot/README.md)" case study.

---

### **Wednesday: Theme - Quick Sort, Radix Sort & TypeScript**

- **Morning (6:00 AM - 11:00 AM): DSA & Coding**
  - **Udemy:** Section 16 (Quick Sort), Section 17 (Radix Sort).
  - **Cracking the Coding Interview:** Continue Chapter 10: Sorting and Searching, comparing Quick Sort and Merge Sort.
  - **LeetCode Practice (Advanced Sorting):**
    1.  [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) (Application of Quick Select)
    2.  [Sort an Array](https://leetcode.com/problems/sort-an-array/) (Implement Merge Sort or Quick Sort yourself)
    3.  [Maximum Gap](https://leetcode.com/problems/maximum-gap/) (Can be solved with Radix or Bucket Sort)
- **Afternoon (2:00 PM - 5:00 PM): FE & System Design**
  - **FE Fundamentals (TypeScript):** Begin learning TypeScript for a strong FE foundation.
    - Setup: [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
    - Learn basic types: [The Basics (Everyday Types)](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
  - **System Design:** Read about [Data Sharding](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design_topics.md#sharding), a key technique for handling large datasets.
- **Evening (8:00 PM - 11:30 PM): Practice & English**
  - **English:** Watch and transcribe the next 5 minutes (10:00 - 15:00) of the video.
  - **Behavioral:** Practice answering 2-3 behavioral questions using the STAR method.

---

### **Thursday: Theme - Linked Lists**

- **Morning (6:00 AM - 11:00 AM): DSA & Coding**
  - **Udemy:** Section 18 (Data Structures Intro), Section 19 (Singly Linked Lists).
  - **Cracking the Coding Interview:** Read Chapter 2: Linked Lists.
  - **LeetCode Practice (Linked Lists):**
    1.  [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
    2.  [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
    3.  [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
- **Afternoon (2:00 PM - 5:00 PM): FE & System Design**
  - **FE Fundamentals (Practical):** JavaScript doesn't have a built-in Linked List. Your task is to **implement a Singly Linked List from scratch using TypeScript**, including the methods: `push`, `pop`, `shift`, `unshift`, `get`, `set`, `insert`, `remove`.
  - **System Design:** Read about [SQL vs. NoSQL](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design_topics.md#sql-vs-nosql) and the [CAP Theorem](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design_topics.md#cap-theorem).
- **Evening (8:00 PM - 11:30 PM): Practice & English**
  - **English:** Watch and transcribe the next 5 minutes (15:00 - 20:00) of the video.
  - **OOD:** Read the "[Design an ATM](https://github.com/tssovi/object-oriented-design-case-studies/blob/master/src/main/java/design/atm/README.md)" case study.

---

### **Friday: Theme - Stacks, Queues & The Event Loop**

- **Morning (6:00 AM - 11:00 AM): DSA & Coding**
  - **Udemy:** Section 20 (Doubly Linked Lists), Section 21 (Stacks + Queues).
  - **Cracking the Coding Interview:** Read Chapter 3: Stacks and Queues.
  - **LeetCode Practice (Stacks & Queues):**
    1.  [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) (Stack)
    2.  [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)
    3.  [Min Stack](https://leetcode.com/problems/min-stack/)
- **Afternoon (2:00 PM - 5:00 PM): FE & System Design**
  - **FE Fundamentals (Direct Link):** The NodeJS Event Loop uses a Call **Stack** and a Message **Queue**. Read the official documentation to deeply understand this connection: "[The Node.js Event Loop, Timers, and `process.nextTick()`](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick)".
  - **System Design (Direct Link):** Queues are the foundation of asynchronous systems. Read about "[Message Queues](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design_topics.md#message-queue)".
- **Evening (6:00 PM - 9:00 PM): SCHEDULED BREAK**
- **Late Evening (9:00 PM - 11:30 PM):**
  - **English:** Finish transcribing the remainder of the video.
  - **Behavioral:** Record yourself answering a behavioral question, listen back, and critique it.

---

### **Saturday & Sunday: Review & Consolidation**

- **Saturday (Review by theme):**
  - **Morning:** Review and re-do LeetCode problems on **Recursion and Sorting**.
  - **Afternoon:** Review and re-do LeetCode problems on **Linked Lists, Stacks, and Queues**.
  - **Evening:** Redraw diagrams for the System Design concepts learned (Load Balancer, Caching, Sharding, SQL/NoSQL, Message Queues). Re-explain the NodeJS Event Loop mechanism to yourself.
- **Sunday (Deep Dive & Prep for Week 2):**
  - **Morning:** Get a head start on Section 22 (Binary Search Trees) on Udemy.
  - **Afternoon:** Continue with TypeScript, reading about "[Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)" and "[Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)".
  - **Evening:** Plan Week 2 in detail and relax.
