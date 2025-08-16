// Import the function you want to test
import { maxArea } from './0815_maxArea';

describe('maxArea', () => {
  const testCases = [
    {
      description: 'Example 1: Basic case',
      input: [1, 8, 6, 2, 5, 4, 8, 3, 7],
      expected: 49,
    },
    {
      description: 'Example 2: Two elements',
      input: [1, 1],
      expected: 1,
    },
    {
      description: 'Edge case: All same height',
      input: [4, 4, 4, 4],
      expected: 12,
    },
  ];

  testCases.forEach(({ description, input, expected }) => {
    it(`should ${description}`, () => {
      const actualOutput = maxArea(input);
      expect(actualOutput).toBe(expected);
    });
  });
}); 