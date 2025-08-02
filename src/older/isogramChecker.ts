export const isogramCheck = (str: string): boolean => {
  const charCount: { [key: string]: number } = {};

  for (let c of str) {
    charCount[c] = (charCount[c] || 0) + 1;
  }

  const allValues = Object.values(charCount);
  return !Object.values(charCount).some((n) => n > 1);
};
