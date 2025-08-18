<!-- https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344102#overview -->

# Section 7: Recursion

## Objectives:

1. What is recursion:

- A process that calls itself

2. It is everywhere:

- document.getElementById and DOM traversal algorithms
- Object traversal

## Call stack

- It is a stack data structure - we'll talk about that later
- When a function is invoked it is placed (pushed) on the top of the stack
- when JS sees the return keyword or when function ends, the compiler will remove (pop)

```js

function takeShower
function eatBreakFast
function cookFood

function weakUp(){
  takeShower()
  eatBreakfast
  console.log("Ok ready to go to work!")
}

```

`wakeUp` -> `eatBreakFast` -> `cookFood` -> `console.log`

### Why do I care?

- You're used to functions being pushed on the call stack and popped off when they are done.
- when we write recursive functions, we keep pushing new function on the call stack.
  FILO: first in last out.

### Parts of Recursion:

1. Base Case: when the recursion function stop working.
2. Call the same function but the input should be smaller, simpler.

```ts
function countDown(num) {
  if (num < 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// it is same with:

function countDown2(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
}
// other

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}
function factorial2(num) {
  if (num === 1) return 1;
  return num * factorial2(num - 1);
}
```
