# **"Explain how the Node.js event loop works and how it enables non-blocking I/O."**

Node.js uses a single-threaded Event Loop to handle asynchronous tasks.

It offloads I/O to the system, and when they finish, their callbacks are queued and executed when the Call Stack is free.

This keeps the main thread non-blocking and allows Node.js to handle many requests concurrently.

# What are Promises, and how does `async/await` make working with them easier?

A Promise is an object that represents the result of an asynchronous operation.
It can be in one of three states: pending → fulfilled → rejected.
Instead of using nested callbacks, Promises let us attach .then() and .catch() for cleaner asynchronous flow.

async/await makes working with Promises easier by allowing us to write asynchronous code that looks synchronous:

async automatically returns a Promise.

await pauses execution until the Promise resolves or rejects, making code easier to read and debug.

# How do you handle errors in asynchronous code? For example, in a chain of `.then()` calls or inside an `async` function.

With Promises, use .catch() at the end of the chain.
With async/await, use try...catch to handle errors like synchronous code.
This ensures all rejections are properly caught.

# What is the difference between `Promise.all` and `Promise.race`?

Promise.all waits for all Promises to succeed and fails fast if any reject.

Promise.race returns the first settled Promise, success or error.

Use all for gathering all results, race for fastest response or timeout.

# What is a closure in JavaScript? Provide a practical, real-world use case

A closure is when a function remembers and can use variables from its outer scope, even after that scope has finished.
Closures are great for private data or stateful functions like counters.

```ts
type CounterFunction = () => void;

function createCounter(): CounterFunction {
  // 'count' is a "private" variable living in the outer scope.
  // TypeScript infers its type as 'number'.
  let count = 0;

  // We return a new function that matches the CounterFunction type.
  // This function is the closure.
  const incrementAndLog = (): void => {
    // Because it's a closure, it "remembers" the 'count' from where it was created.
    count++;
    console.log(`Current count is: ${count}`);
  };

  return incrementAndLog;
}
```

# What is the difference between an `interface` and a `type`? When would you choose one over the other?

both of them are using to shape of an object.

`interface`: i use it for definding an object structure that might need to be extended later on.
`type`: is more flexible like define unions. i use it for variant like in button components

# "Why is TypeScript valuable in a team-based project? How has it helped you prevent bugs in your past projects?

As it will check the data type before running the opreations. It will report to us any errors from data type.
In my project that I worked with my teammates, I often check the structure of the data type.

# What is the purpose of the useEffect hook, and why is the dependency array critical for preventing bugs and performance issues?

The useEffect hook runs code (side effects) after a component renders, like fetching data or updating the DOM.

The dependency array tells React when to run the effect:

If empty [], it runs only once.

If with variables, it runs when those change.

This is important because:

Without it, effects run every render (slow performance).

Wrong dependencies can cause missed updates or infinite loops (bugs).

So, the dependency array helps control when the effect runs, keeping your app fast and bug-free.

# How do you manage state in your React applications? Can you explain the difference between local state (useState) and global state, and when to use each?

Managing state in React:

Local state is state inside a single component, managed with useState. It’s great for things like form inputs, toggles, or anything only that component needs to know.

Global state is shared across many components, managed with tools like React Context, Redux, or Zustand. Use it when you need multiple parts of your app to access or update the same data, like user info, theme, or a shopping cart.

When to use each:

Use local state (useState) when the data is used by one component only.

Use global state when the data needs to be accessed or changed by many components in your app.

In short: local state for simple, isolated data; global state for shared, app-wide data.

# you've used both SQL and NoSQL databases. Can you explain the main differences and describe a specific scenario from your projects where you chose one over the other, and why?

I use both SQL and NoSQL, but since I’m not an expert in SQL, I usually choose NoSQL—like MongoDB. Although I still define schemas, it’s easier to handle complex or changing data structures.

For example, in my language learning app, users have different profiles with varying data, so MongoDB helps me store that without complicated joins. Plus, it’s easy to improve query performance by adding indexes on key fields.

# What are the key principles you follow when designing a RESTful API? (e.g., proper use of HTTP verbs, status codes, and consistent naming).

First, I follow REST rules for endpoints and HTTP methods. I use clear names like /users and /products. I use GET to get data, POST to create, PATCH/PUT to update, and DELETE to remove. This way, the API is easy to understand.

Second, I make sure responses are clear and consistent. I use standard status codes like 200 for success, 201 for created, 400 for bad requests, 404 for not found, etc. I also include a success flag and clear error messages with code so frontend developers can easily handle errors.

Third, I focus on security and clean code. I use JWT authentication and return 401 if a user is not authorized. I keep routing code separate from business logic to make the code easier to maintain and test.

# Can you talk about your experience with Azure? What services have you used, and for what purpose in your projects (e.g., SpeakFocus)?

I have experience using Azure mainly with Azure Virtual Machines and the Azure OpenAI API.

I used Azure VMs to host backend servers for my projects, giving me flexible control over the environment.

I also integrated Azure OpenAI API to add AI-powered features, like natural language processing, in my apps such as SpeakFocus.

These services helped me build scalable and smart applications without managing complex infrastructure.

# Can you explain in simple terms what Docker is and what problem it solves? Have you ever written a Dockerfile?

Docker is a tool that helps package an application and all its parts—like code, libraries, and settings—into one container. This container can run the same way on any computer, so it solves the problem of “it works on my machine but not on yours.”

I have basic experience with Docker and have written simple Dockerfiles to set up my apps in containers, which made deployment easier and more consistent.
