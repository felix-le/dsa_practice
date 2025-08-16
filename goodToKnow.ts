// Index all char into number
export const letterToIndex = (s: string): number[] => {
  return [...s].map((c) => c.charCodeAt(0) - 96);
};

const char = 'A'; // Unicode = 65
const binary = char.charCodeAt(0).toString(2);

console.log(binary); // 👉 "1000001"
String.fromCharCode(parseInt('1000001', 2)); // 👉 "A"
// Number
const num = 5; // Unicode = 65
const numBinary = num.toString(2);
// kiểm tra có phải là chữ hoặc số không:
// !/[a-zA-Z0-9]/.test

// The sum of 5 and 3 is 8.
// The product of 5 and 3 is 15.
// The difference between 5 and 3 is 2.
// The quotient of 6 and 2 is 3.
