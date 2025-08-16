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

function maxProfit(prices: number[]): number {}
