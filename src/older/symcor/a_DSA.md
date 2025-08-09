## Question 1: What is Big O notation and why is it critically important for software developers?

In my own words, Big O notation is a way to describe the performance of efficiency of an algorithm. More details, it tells us how an algorithm's runtime or memory usage scales as its input size grows.

- An example is finding a specific name in a phone book. we could use two methods:

* The first method is to start from page one and check every single page until we find the name. The amount of work grows linearly with the input size, 'n', so this method's time complexity is read as O(n).
* The second method is to open the book to the middle, see if the name is in the first or second half, and then repeat that process on the correct half. This is much more efficient. Even if the book doubles in size, we only need one extra step. This method's time complexity is rated as O(log n).

- there are three main reasons that developers need to understand:

* it helps us make smart choices. We can select the most suitable algorithm for a task, ensuring our application is fast and scalable.
* Second, it allows us to predict future problems while the data or user base grows.
* It provides us with common language. We can discuss the trade-offs between different solutions with cross team.

## Question 2: different between O(1), O(n) and O(n^2) time complexity?

- O(1): constant time
  The function always executes in the same amount of time, regardless of the input size 'n'.

```ts
const returnFirst = (arr: number): number => {
  return arr[0];
};
```

- O(n): linear time:
  It is a very common case. The time complexity is a straight line with `n`, as the algorithm needs to check each element once.

```ts
function linear(n: number): void {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
```

- O(n^2): quadratic time:
  it is often when we have a nested loop.

```ts
function quadratic(n: number): void {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```

## Question 3: What is the difference between time complexity and space complexity?

Time complexity is the total time that needs to finish all operations.
Space complexity is the total space that need to finish all operations.

For example:
I want to invite my friends to my party. I have to write their name on invitation cards.
The whole time I write my friend's names on all cards is complexity.
All cards are space complexity

```ts
function createInvitations(friends: string[]): string[] {
  const finishedCards: string[] = [];
  for (const friend of friends) {
    finishedCard.push(`friend's name: ${friend}`);
  }
  return finishedCards;
}
// in this example: we have time complexity is O(n) and space complexity is O(n)
```

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

this function has time complexity is O(n^2).
We can use Set to compare:

```ts
function hasDup(arr: number[]) {
  const seenNumbers = new Set<number>();

  for (const num of arr) {
    if (seenNumber.has(num)) return true;
  }
  return false;
}
```

This method will trade-off a small space complexity and its time complexity will down from O(n^2) to O(n)

## Question 5: Hash Table, why would we prefer using a Hash Table for search, instead of an array?

With the same method search, while array has time complexity is O(n), Hast Table Map only has time complexity O(1)

## Question 6: how to improve performance of feature with big O:

- Check O(n^2): nested loop.
- check O(n) inside another loop.
  For example:
  Inside a loop, we have some methods like includes, find, indexOf
  => we will have O(n^2)
  to improve, we can replace them by Map or Set
