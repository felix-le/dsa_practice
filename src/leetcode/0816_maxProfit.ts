// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 10^5
0 <= prices[i] <= 10^4
*/

/**
 * @param prices: number[] - An array where prices[i] is the price of the stock on day i.
 *
 * @output number - The maximum profit that can be achieved.
 *
 * @notice
 * 1. We must buy before we can sell. This means the index of the buy day must be less than the index of the sell day.
 * 2. If no profit can be made (e.g., the prices are always decreasing), the maximum profit is 0.
 * 3. A brute-force O(n^2) solution (checking every possible buy/sell day pair) is too slow for the given constraints.
 * An O(n) solution is required.
 *
 */

export function maxProfit(prices: number[]): number {
  /**
   * THOUGHT FLOW
   * When I read the requirements, "buy one stock and choosing a different day in the future",
   * my first thought was to use two pointers.
   * My initial idea would be a nested loop where one pointer is the 'buy' day and the other is the 'sell' day,
   * but the constraints show that an O(n^2) solution is too slow.
   * (n <= 5,000 for O(n^2)); n <= 10^5	O(n log n) or O(n)
   *
   * So, I need a more efficient, single-pass O(n) approach.
   *
   * To find the maximum profit, I know I'll need to declare a `maxProfit` variable, which will start at 0.
   * This also means that as I loop through the prices, I'll be calculating a `currentProfit` to compare against `maxProfit`.
   *
   * The profit for any 'sell' day is `currentPrice - buyPrice`.
   * To maximize this, I need to make `buyPrice` as small as possible.
   *
   * I only need to keep track of one thing from the past: the minimum price I have seen so far.
   *
   * We cannot use from the first index and the last index for this exercise.
   * Only use the method if it is a sorted array OR it depends width between the first
   * and last pointer (Like contain water maximum)
   */
  /** HOW TO RESOLVE
   * Single-pass method
   *
   * To take the maximum benefit --> take the smallest of buy and maximum of sell.
   *
   * So we will declare 2 variables: minPrice and maxProfit to store
   *
   * currentProfit = currentPrice - minPrice
   *
   * compare minPrice with currentPrice to get the correct minPrice
   *
   * compare maxProfit with currentProfit
   * ==> if currentProfit is bigger than maxProfit ==> max profit = currentProfit.
   */
  // So we will declare 2 variables: minPrice and maxProfit to store
  let maxProfit = 0;
  let minPrice = Infinity; // if we let minPrice = 0 ==> if the array has all elements are bigger than 0 --> we will get the wrong result

  // create a loop to find minPrice and maxProfit

  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i]!;

    minPrice = minPrice < currentPrice ? minPrice : currentPrice;
    const potentialProfit = currentPrice - minPrice;
    maxProfit = maxProfit < potentialProfit ? potentialProfit : maxProfit;
  }
  return maxProfit;
}
