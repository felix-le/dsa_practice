const strings = ["ab", "abc", "ab"];
const queries = ["ab", "abc", "bc"];

export const matchingString = (strings: string[], queries: string[]): number[] => {
  const result: number[] = []

  for (let i = 0; i < queries.length; i++) {
    let count = 0;
    for (let j = 0; j < strings.length; j++) {
      if (queries[i] === strings[j]) {
        count++
      }
    }
    result.push(count)
  }
  return result
}

console.log(matchingString(strings, queries))