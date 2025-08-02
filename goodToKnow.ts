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
