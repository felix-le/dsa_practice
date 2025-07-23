export const checkPangram = (str: string): boolean => {
  const lowcase = str.toLowerCase().replace(' ', '');

  const letterOnly = [...lowcase].filter((char) => char !== ' ');
  const uniqueLetter = new Set(letterOnly);

  return uniqueLetter.size === 26;
};
