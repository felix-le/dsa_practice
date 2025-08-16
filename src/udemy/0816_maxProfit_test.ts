// Import the function you want to test
import { maxProfit } from './0816_maxProfit'; // Make sure the file path is correct

// The `describe` block creates a test suite, a collection of related tests.
describe('maxProfit', () => {
  // Create a nested array of test cases.
  // Each element is an object containing the input, expected output, and a description.
  const testCases = [
    {
      description: 'Example 1: Basic profitable case',
      input: [7, 1, 5, 3, 6, 4],
      expected: 5, // Buy at 1, sell at 6
    },
    {
      description: 'Example 2: No profit possible (descending prices)',
      input: [7, 6, 4, 3, 1],
      expected: 0,
    },
    {
      description: 'Edge case: Shortest possible array with profit',
      input: [2, 5],
      expected: 3,
    },
    {
      description: 'Edge case: Shortest possible array with no profit',
      input: [5, 2],
      expected: 0,
    },
    {
      description: 'Profit is not from the absolute min to the absolute max',
      input: [3, 3, 5, 0, 0, 3, 1, 4],
      expected: 4, // Buy at 0, sell at 4
    },
    {
      description: 'Ascending prices, profit is last day - first day',
      input: [1, 2, 3, 4, 5],
      expected: 4,
    },
    {
      description: 'A valley shape, buy low sell high',
      input: [10, 7, 5, 8, 11, 9],
      expected: 6, // Buy at 5, sell at 11
    },
    {
      description: 'All prices are the same',
      input: [5, 5, 5, 5, 5],
      expected: 0,
    },
  ];

  // Loop through each test case and create a test for it.
  testCases.forEach(({ description, input, expected }) => {
    // The `it` or `test` function defines an individual test case.
    // The first argument is a string that describes what the test should do.
    it(`should ${description}`, () => {
      // Call the function with the test input.
      const actualOutput = maxProfit(input);

      // The `expect` function is used to create an "assertion".
      // We expect the `actualOutput` to be equal to the `expected` value.
      // `.toBe()` is a "matcher" used for comparing primitive values like numbers.
      expect(actualOutput).toBe(expected);
    });
  });
});
