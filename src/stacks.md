# Stack

Last in -> First out

## Use cases:

- Managing function invocations.
- undo / redo
- Routing (the history object)

### Operations:

```js
const stack = [];
stack.push('o');
stack.push('h');
stack.push('l');
// => ["o","h","l"]
// stack.pop() => "l"
// stack.pop() => "h"
// stack.pop() => "o"
// => stack = []

stack.unshift('first');
stack.unshift('second');
stack.unshift('third');
// ["first", 'second','third']
// ==> stack.shift() => three
// ==> stack.shift() => second
// ==> stack.shift() => first
```
