function naiveSearch(l: string, s: string): number {
  var count = 0;

  for (var i = 0; i <= l.length - s.length; i++) {
    for (var j = 0; j < s.length; j++) {
      if (s[j] !== l[i + j]) {
        break;
      }
    }

    if (j === s.length) {
      count++;
    }
  }
  return count;
}

console.log(naiveSearch('lorie loled', 'lol'));
