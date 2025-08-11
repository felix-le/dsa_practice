# Map

## declare Map

```ts
const scores = new Map<string, number>();

const charCounts = new Map<string, number>();

const seenNum = new Map<number, boolean>();
```

## .set(key,value)

```ts
scores.set('Alice', 90);
```

## .get(key) =>value

```ts
scores.get('Alice');
console.log(scores.get('Alice'));
```

## .has(key) => boolean

```ts
scores.has('Alice'); // true
```

## .size => number

```ts
scores.size; // number
```

## practice:

```ts
const countChar = (str: string): Map<string, number> => {
  const counts = new Map<string, number>();
  for (const char of str) {
    const currentCount = count.get(char) || 0;
    counts.set(char, currentCount + 1);
  }
  return counts;
};
```

## return unique characters

```ts
function getAllUniqueChars(str: string): string[] {
  const uniqueCharsSet = new Set(str.split(''));
  return Array.from(uniqueCharsSet);
}

function getSingleUniqueChars(str: string): string[] {
  const counts = new Map<string, number>();
  const singleChars: string[] = string;

  for (const [char, count] of counts.entries()) {
    if (count === 1) {
      singleChars.push(char);
    }
  }
  return singleChars;
}
console.log(getSingleOccurrenceChars('hello world')); // Output: [ 'h', 'e', 'w', 'r', 'd' ]
// (lưu ý: khoảng trắng ' ' cũng được tính, nhưng bị ẩn khi in ra)

function findFirstUniqueChar(str: string): string | null {
  const counts = new Map<string, number>();

  for (const char of str) {
    if (counts.get(char) === 1) {
      return char;
    }
  }
  return null;
}
```
