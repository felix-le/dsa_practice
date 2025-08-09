### **Final Study Guide - Based on Your Answers**

#### **Part 1: Data Structures & Algorithms (DSA)**

**1. "What is Big O Notation? Explain in your own words why it is a critical concept for a software developer."**

**Your Answer (Polished):**
"In my own words, Big O notation is a way to describe the performance and efficiency of an algorithm. It shows how an algorithm's Time Complexity (runtime) and Space Complexity (memory usage) scale as its input size grows.

I'd like to give an example of time complexity to explain why it is important. My task is to find a specific name in a phone book. There are at least two methods:

- First, I could open the phone book from the first page and search page by page until I find the name. The amount of work grows linearly with the size of the phone book. As a result, this is **O(n)** time complexity.
- Another method is to open the book in the middle, see which half the name is in, and then repeat the same process on the correct half. This is much more efficient. Even if the phone book doubles in size, we only add about one more step. This method is **O(log n)**.

As a developer, Big O is really important for three main reasons:

1.  It helps me **make smart choices**. I can compare and select the most suitable solution for a task.
2.  It helps me **predict future problems** that might arise as the user base or data grows.
3.  It gives our team a **common language** when discussing the trade-offs between different solutions."

---

**2. "Explain the differences between O(1), O(n), and O(n²) time complexities, providing a simple, practical code example for each."**

**Your Answer (Polished):**
"**O(1)** is constant time. This means the algorithm always takes a constant amount of time, and it is independent of the input size 'n'. For example, a function that returns the first element of an array.

```typescript
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}
```

**O(n)** is linear time. This means the time complexity grows linearly with the size of 'n'. It's a common situation when we use a single loop to check every element of an array.

```typescript
function printAllElements<T>(arr: T[]): void {
  for (const item of arr) {
    console.log(item);
  }
}
```

**O(n²)**, or "O of n squared", is a slower time complexity. We often see it when there is a **nested loop**—a loop inside another loop—which is a pattern we should try to avoid if possible."

```typescript
function logAllPairs<T>(arr: T[]): void {
  for (const item1 of arr) {
    for (const item2 of arr) {
      console.log(item1, item2);
    }
  }
}
```

---

**3. "What is the difference between Time Complexity and Space Complexity?"**

**Your Answer (Polished):**
"The names themselves hint at the difference. While **Time Complexity** describes how the total number of operations grows, **Space Complexity** describes how the extra memory usage grows.

My favorite example is writing invitations for a party:

- The total **time that I spend** writing each name on each card is the **Time Complexity**.
- The **pile of blank cards** that I need represents the **Space Complexity**.
  In this case, a function that creates a new array of invitations from a list of friends would have both **O(n) time and O(n) space complexity**."

---

**4. "Contains Duplicate"**

**Your Answer (Polished):**

```typescript
function containsDuplicate(nums: number[]): boolean {
  const seenNumbers = new Set<number>();
  for (const num of nums) {
    if (seenNumbers.has(num)) {
      return true;
    }
    seenNumbers.add(num);
  }
  return false;
}
```

**Your Explanation:** The brute-force solution is O(n²). To improve it, I use a Hash Table, specifically a `Set`. I iterate through the array once. For each number, I check if the Set already has it. If it does, I return `true`. Otherwise, I add the number to the Set. This optimized method has a time complexity of O(n).

---

**5. "Valid Anagram"**

**Your Answer (Polished):**

```typescript
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const charCounts = new Map<string, number>();
  for (const char of s) {
    const count = charCounts.get(char) || 0;
    charCounts.set(char, count + 1);
  }
  for (const char of t) {
    const countInMap = charCounts.get(char);
    if (!countInMap) {
      return false;
    }
    charCounts.set(char, countInMap - 1);
  }
  return true;
}
```

**Your Explanation:** Anagrams must have the same characters with the same counts. First, I check if the lengths are equal. Then, I create a frequency map from the first string, `s`. Finally, I iterate through the second string, `t`, and decrement the counts. If I find a character not in the map or its count is zero, I return `false`.

---

**6. "Two Sum"**

**Your Answer (Polished):**

```typescript
function twoSum(nums: number[], target: number): number[] {
  const numMap = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i]!;
    const complement = target - currentNum;
    if (numMap.has(complement)) {
      return [numMap.get(complement)!, i];
    }
    numMap.set(currentNum, i);
  }
  return [];
}
```

**Your Explanation:** My approach is to create a Map to store numbers and their indices. I loop through the array once. For each number, I calculate its complement. If the complement is already in the map, I return its index and the current index. Otherwise, I add the current number and its index to the map for future elements to find.

---

**7. "Valid Parentheses"**

**Your Answer (Polished):**

```typescript
function isValid(s: string): boolean {
  const stack: string[] = [];
  const bracketMap = new Map<string, string>([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);
  for (const char of s) {
    if (bracketMap.has(char)) {
      if (stack.pop() !== bracketMap.get(char)) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}
```

**Your Explanation:** For this problem, I would use the Stack technique. An open bracket gets pushed to the stack. A close bracket must match the last open bracket that was pushed, so we pop from the stack and compare. If it's a match, we continue. If it's not a match or the stack is empty, it's invalid. Finally, the stack must be empty for the whole string to be valid.

---

### **Part 2: Technical Knowledge**

**8. "Explain how the Node.js event loop works."**

**Your Answer (Polished):**
"Node.js uses a single-threaded Event Loop to handle asynchronous tasks. It offloads slow I/O operations to the system. When those operations finish, their callbacks are placed in a queue. The Event Loop's job is to move these callbacks to the Call Stack to be executed, but only when the Call Stack is free. This keeps the main thread non-blocking and allows Node.js to handle many requests concurrently."

---

**9. "What are Promises, and how does `async/await` syntax relate to them?"**

**Your Answer (Polished):**
"A Promise is an object that represents the result of an asynchronous operation. It has three states: pending, fulfilled, and rejected. Instead of using nested callbacks, Promises let us attach `.then()` and `.catch()` for a cleaner asynchronous flow. `async/await` is a more modern way to work with Promises. It lets us write asynchronous code that looks synchronous, using `try...catch` blocks to handle errors, which makes the code much clearer and easier to read."

---

**10. "What is the difference between `interface` and `type` in TypeScript?"**

**Your Answer (Polished):**
"Both can be used to describe the shape of an object. My approach is to use an **`interface`** when I'm defining an object that might need to be extended, because interfaces support a feature called 'declaration merging'. I use a **`type`** for everything else, especially for creating union types, for example, defining the possible `variant` props for a Button component, like `'primary' | 'secondary'."

---

**11. "What is the purpose of the `useEffect` hook in React?"**

**Your Answer (Polished):**
"`useEffect` is used to handle side effects in a component, like fetching data or setting up event listeners, which run after the component renders. The dependency array is critical for controlling it. An **empty array** makes the effect run only once. An **array with variables** makes the effect re-run only when those variables change. This prevents performance issues and bugs from stale data."

**4. "What is a closure in JavaScript? Provide a practical use case."**

**Your Answer (Polished):**
"A closure is when a function remembers and can use variables from its outer scope, even after that scope has finished. Closures are great for creating private data or stateful functions. A simple, practical example is a `createCounter` function, where the returned inner function 'remembers' its own private `count` variable each time it's called."

**5. "What are Streams in Node.js, and what is the main problem they solve?"**

**Your Answer (Polished):**
"A Stream in Node.js is a way to handle data that is read or written **continuously in chunks**, instead of all at once. The main problem they solve is **memory efficiency**. They allow you to process very large files or network data without loading the entire thing into RAM, which prevents the application from crashing."

---

#### **TypeScript**

**6. "What is the difference between an `interface` and a `type` in TypeScript?"**

**Your Answer (Polished):**
"Both are used to define the shape of an object. My approach is to use an **`interface`** when I'm defining an object that might need to be **extended**, because interfaces support 'declaration merging'. I use a **`type`** for everything else, especially for creating **union types**. For example, I'd use a `type` to define the `variant` props for a Button component, like `'primary' | 'secondary'."

---

#### **React**

**7. "What is the purpose of the `useEffect` hook?"**

**Your Answer (Polished):**
"The `useEffect` hook is used to handle **side effects** after a component renders, like fetching data or updating the DOM. The **dependency array** is critical for controlling it. An **empty array** makes the effect run only once. An **array with variables** makes the effect re-run only when those variables change, which is important for performance and preventing bugs."

**8. "How would you optimize a React component that is re-rendering too often?"**

**Your Answer (Polished):**
"There are a few React tools I would use. I would first wrap the component in **`React.memo`** to prevent it from re-rendering if its props don't change. Then, I'd use **`useCallback`** to memoize function instances passed as props, and **`useMemo`** to cache the results of expensive calculations. For very large components, I would also consider **lazy loading** so they are only loaded when needed."

---

#### **Databases & APIs**

**9. "What are the main differences between SQL and NoSQL databases?"**

**Your Answer (Polished):**
"**SQL** databases use tables with relationships between them, which is great for structured data. **NoSQL** is more flexible and is often like JSON data with no required relationships. As I am more experienced with NoSQL, I often use **MongoDB**. In my project, it was easier to handle complex and changing user profile data with MongoDB because its flexible schema avoids complicated JOINs. It's also easy to query faster by **adding an index** to key fields."

**10. "What are the key principles you follow when designing a RESTful API?"**

**Your Answer (Polished):**
"I have three main principles when designing an API:

1.  **Follow REST Rules:** I use clear, noun-based endpoints like `/users` and the correct HTTP methods: `GET` to read, `POST` to create, `PATCH` for updates, and `DELETE` to remove.
2.  **Use Consistent Responses:** I use standard status codes like `200` for success, `201` for creation, and `404` for not found. I also ensure error responses have a clear message.
3.  **Implement Standard Security:** I use security practices like JWT for authentication to protect endpoints."
