export const letterToIndex = (s: string): number[] => {
  return [...s].map((c) => c.charCodeAt(0) - 96);
};
