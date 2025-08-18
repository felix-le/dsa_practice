function bigOOne(n: number[]): number {
  return n[0]!;
}

function bigON(n: number[]): void {
  for (let i = 0; i < n.length; i++) {
    console.log(n[i]);
  }
}

function bigOSquared(n: number[]): void {
  for (let i = 0; i < n.length; i++) {
    for (let j = 1; j < n.length; j++) {
      console.log('i:', i, 'j:', j);
    }
  }
}
