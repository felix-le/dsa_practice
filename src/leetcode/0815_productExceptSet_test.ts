// Import the function you want to test
// Make sure the file path is correct. I'm assuming you have two versions.
import { productExceptSelf } from './0815_productExceptSet';

// Create a nested array of test cases.
// Each element is an object containing the input, expected output, and a description.
const testCases = [
  {
    description: 'Example 1: Basic case with positive integers',
    input: [1, 2, 3, 4],
    expected: [24, 12, 8, 6],
  },
  {
    description: 'Example 2: Case with a single zero',
    input: [-1, 1, 0, -3, 3],
    expected: [0, 0, 9, 0, 0],
  },
  {
    description: 'Edge case with multiple zeros',
    input: [1, 2, 0, 4, 0],
    expected: [0, 0, 0, 0, 0],
  },
  {
    description: 'Case with negative numbers (even count)',
    input: [-1, -2, 3, 4],
    expected: [-24, -12, 8, 6],
  },
  {
    description: 'Case with negative numbers (odd count)',
    input: [-1, 2, -3, 4],
    expected: [-24, 12, -8, 6],
  },
  {
    description: 'Boundary case: shortest possible array',
    input: [5, 10],
    expected: [10, 5],
  },
  {
    description: 'Case with the number 1',
    input: [1, 2, 3, 1],
    expected: [6, 3, 2, 6],
  },
];

// We can test both of your functions using the same test cases.
// Let's choose the O(1) space complexity version for this test run.
const functionToTest = productExceptSelf;

// Use a single loop to run all test cases
console.log(`--- Testing: ${functionToTest.name} ---`);
export function test(): void {
  testCases.forEach((test, index) => {
    // Calculate the actual output from your function
    const actualOutput = functionToTest(test.input);

    // Log the results in a structured way
    console.log(`\n--- Test Case ${index + 1}: ${test.description} ---`);
    console.log(`Input:    [${test.input.join(', ')}]`);
    console.log(`Expected: [${test.expected.join(', ')}]`);
    console.log(`Actual:   [${actualOutput.join(', ')}]`);

    // Check if the test passed or failed by comparing the stringified versions of the arrays
    if (JSON.stringify(actualOutput) === JSON.stringify(test.expected)) {
      console.log('Result:   ✅ Pass');
    } else {
      console.log(`Result:   ❌ Fail`);
    }
  });
}
