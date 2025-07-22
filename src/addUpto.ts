export function addUpTo(n: number): number {
  return (n * (n + 1)) / 2;
}


export function addUpTo2(n: number): number {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}