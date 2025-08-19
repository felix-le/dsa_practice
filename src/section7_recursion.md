<!-- https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344102#overview -->

# Section 7: Recursion

## Objectives:

1. What is recursion:

- A process that calls itself

2. It is everywhere:

- document.getElementById and DOM traversal algorithms
- Object traversal

3. Tips:
   instead of modifying the original input ==> we copy

- For arrays: use `slice`, `the spread operator`, `concat`
- strings: `slice`, `substr`,`substring`
- Copy Objects: `Object.assign`, `spread operator`

## Call stack

- It is a stack data structure - we'll talk about that later
- When a function is invoked it is placed (pushed) on the top of the stack ([1,2,3]) => [1,2,3,4] => pop()=> `4`
- when JS sees the return keyword or when function ends, the compiler will remove (pop)

```js

function takeShower
function eatBreakfast {
  cookFood()
}
function cookFood

function weakUp(){
  takeShower()
  eatBreakfast()
  console.log("Ok ready to go to work!")
}
// Stack = LIFO (Last In, First Out)
```

`wakeUp` -> `eatBreakfast` -> `cookFood` -> `console.log` in the wakeUp function
1 wait for 2, 2 wait for 3

### Why do I care?

- You're used to functions being pushed on the call stack and popped off when they are done.
- when we write recursive functions, we keep pushing new function on the call stack.
- Last in, first out.

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

### Helper method recursion

```js
function outer(input) {
  let outerScopedVariable = [];
  function helper(helperInput) {
    helper(helperInput--);
  }
  helper(input);
  return outerScopedVariable;
}
```

```js
function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
  // slice ==> return new array and remove the first element
  // [1,2,3,4,5].slice => [2,3,4,5]
}
// collectionOddValues([1,2,3,4,5])
// => [1,3,5]
```

### exercises

```ts
/**
 * power
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
 */

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

/**
 * Requirements:
 *
 * @params number, number
 *
 * @output power of base to the exponent
 *
 * @Notice mimic the functionality of Math.pow()
 * Do not worry about negative bases and exponents
 */

function power(base, exponent) {
  // always write the base case first

  if (exponent < 0) return 1;

  return base * power(base, exponent - 1);
}
```

### Case 2

```ts
/**
 * factorial
Write a function factorial which accepts a number and returns the factorial of that number. 
A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  
factorial zero (0!) is always 1.
 */
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
```

### Case 3

```ts
/**
 * Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
 */

function productOfArray(arr) {
  if (arr.length === 0) return 1;

  return arr[0] * productOfArray(arr.slice(1));
}
```

### Case 4:

```ts
/**
 * Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
 */

function recursiveRange(n) {
  if (n === 0) return 0;
  return n + recursiveRange(n - 1);
}
```

### Case 5

```ts
/**
 * fib
Write a recursive function called fib which accepts a number
and returns the nth number in the Fibonacci sequence.
Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
 */

function fib(n) {
  /**
   * @param number
   *
   * @output number
   *
   * @Notice
   * return nth number
   * fib is the sequence of whole number 1,1,2,3,5,8
   * start with 1 and 1
   * every number thereafter is equal to the sum of the previous two numbers
   */
  /**
   * How to resolve
   *
   * Find the base case:
   * As the array start with 1 ,1 --> `n = 1, n = 2` we will have return is 1
   * if(n<=2) return 1
    * The problem also gives us the formula: "...every number thereafter is equal to the sum of the previous two numbers."
    Translated into code:
    fib(n) is equal to fib(n-1) plus fib(n-2).
   */

  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);


  /**
   * the time for this method is O(2^n)- it is extremely slow
   * As each call to fib(n) we will create two more branches for fib(n-1) and fib(n-2)
   * so, we will repeat some unnecessarily step (for example: fib(5) calculates fib(3) twice)
   *
   * space complexity = O(n)
   *
   * how to optimize: use Memorization which is from of Dynamic programming.
   * we will create a map and store the results of fib(k) that calculated.
   *
   * this method would reduce the time complexity to O(n)
   */
}


function fibNew(n:number):number{
  const memo:{[key:number]:number} ={}
  function fibHelper(num:number):{
    if(memo[num]){
      return memo[num]
    }
  if(num <=2){
    return 1;
  }
  const result = fibHelper(num-1) + fibHelper(num-2)
  memo[num] = result;
  return result;
  }
  return fibHelper(n)
}
```
