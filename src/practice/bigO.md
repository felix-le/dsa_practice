# **Question 1: In your own words, what is Big O notation? Why is it important to us, as developers, to understand it?**

In my own words, Big O notation is a way to describe the performance or efficiency of an algorithm. Specifically, it tells us how an algorithm's runtime or memory usage scales as its input size grows.

- A great example is finding a specific name in a phone book. We could use two methods:

The first method is to start from page one and check every single page until we find the name. The amount of work grows linearly with the input size, 'n', so this method's time complexity is rated as O(n).
The second method is to open the book to the middle, see if the name is in the first or second half, and then repeat that process on the correct half. This is much more efficient. Even if the book doubles in size, we only need one extra step. This method's time complexity is rated as O(log n).

- And understanding this is essential for us as developers for three main reasons:

First, it helps us make smart choices. We can select the most appropriate algorithm for a task, ensuring our application is fast and scalable.
Second, it allows us to predict future problems. We can identify inefficient code that might work fine now but will likely fail as our data or user base grows.
Finally, it provides us with a common language. It enables the team to effectively discuss the trade-offs between different solutions.

# **Question 2:**

Can you explain the differences between the most common Big O complexities: **O(1)**, **O(log n)**, **O(n)**, **O(n log n)**, and **O(n²)**?
Also, provide a very simple TypeScript code example for each.

---

## **O(1) – Constant Time**

The function always executes in the same amount of time, regardless of the input size `n`.

```ts
function returnFirst(arr: number[]): number {
  return arr[0];
}
```

---

## **O(log n) – Logarithmic Time**

Very fast. When the input size doubles, the number of operations increases by only 1.

```ts
function logarithmic(n: number): void {
  for (let i = 1; i < n; i *= 2) {
    console.log(i);
  }
}
```

---

## **O(n) – Linear Time**

Very common. The work grows in a straight line with `n`, as the algorithm needs to check each element once.

```ts
function linear(n: number): void {
  for (let i = 0; i < n; i++) {
    console.log('step', i);
  }
}
```

---

## **O(n log n) – Log-Linear Time**

Typically occurs when a logarithmic process is repeated `n` times.

```ts
function logLinear(n: number): void {
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j *= 2) {
      console.log('step', i, j);
    }
  }
}
```

**Example 2: Sorting (most built-in sorts are O(n log n))**

```ts
function logLinear2(arr: number[]): number[] {
  return arr.sort((a, b) => a - b);
}
```

---

## **O(n²) – Quadratic Time**

This is slow and usually appears when a linear loop is nested inside another linear loop.

```ts
function quadratic(n: number): void {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```

# Question 3: What is the difference between Time Complexity and Space Complexity?

Time Complexity is the total time that needs to finish all operations.
Space Complexity: is the total space that need to finish all operations.

For examples:
I want to invite my friends to my party. I have to write their name on invitation cards.
All cards are space complexity.
The whole time I write my friend's names on all cards is time complexity.

```ts
function createInvitations(friends: string[]): string[] {
  // 1. We create a new, empty pile for our finished cards. This is our 'extra space'.
  const finishedCards: string[] = [];

  // 2. We loop through every friend. This is our 'time spent working'.
  for (const friend of friends) {
    // 3. We write a card and add it to our new pile.
    finishedCards.push(`Invitation for ${friend}`);
  }

  return finishedCards;
}
```

# Analytic code:

## Question 4: improve code

```ts
function hasDuplicates(array: number[]): boolean {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return true;
      }
    }
  }
  return false;
}
```

1. Current code:

Time complexity: O(n²) (n squared).

Reason: Nested loops compare each element with the others.

Very slow for large arrays.

2. Improved code:

Use a Set to remember seen numbers.

Time complexity: O(n).

Space complexity: O(n).

```ts
const hasDuplicates = (arr: number[]):boolean{

  const seenNumbers = new Set<number>(); // O(1)

  for(const num of arr){ // O(n)
    if(seenNumbers.has(num)){
      return true;
    }
    seenNumbers.add(num)
  }
  return false
}
```

The trade-off is that we use a little extra memory to store the seenNumbers Set, but the performance is O(n) in stead of O(n^2) - O n squared

## Question 6: Why would we generally prefer using a Hash Table or a Set for lookups, instead of just using an Array?

Array: we need to check each value of elements -> O(n)
Map or Set: we can use has operation which has time complexity is O(1)

Example:
We need to find a house in a street.
Array: we need to knock on every single door.
Map or Set: we will use GPS to check

## Question 7: Imagine our application has a feature that is very slow. From a Big O perspective, what kind of operations would you suspect might be causing the bottleneck?

- Check O(n^2) - quadratic time by checking the nested loop.
- check an O(n) inside another loop. For example: some method while looping an array:
  .includes(), .find(), .indexOf() ==> we will create an O(n^2)
  we might replace them by using Map or Set.
