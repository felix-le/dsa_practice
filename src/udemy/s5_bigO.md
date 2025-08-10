# What is Big O

Big O notation is a way to talk about how fast or slow an algorithm is, and how much memory it uses.
There are two main parts: time complexity (how long it takes) and space complexity (how much memory it needs).
It tells us how the algorithm changes when the amount of input grows.

Example with time complexity:

Let’s say I need to find a specific name in a phone book.
I can do it in two ways:

Method 1: Start from the first page and check each name until I find the one I want.
If the phone book is bigger, it takes more time. This is O(n).

Method 2: Open the phone book in the middle, pick the half that might have the name, and keep repeating until I find it.
Even if the phone book doubles in size, I only add one extra step. This is O(log n).

## O(1), O(n), O(n²)

O(1) – Always takes the same time, no matter the size of the input.
Example: Get the first item from a list.

O(n) – Time grows in proportion to the input size.
Example: Check each item in a list one by one.

O(n²) – Time grows much faster, usually when you have a loop inside another loop.
