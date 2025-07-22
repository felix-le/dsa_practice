# Data Structures and Algorithms Practice

A TypeScript repository for practicing data structures and algorithms based on the [JavaScript Algorithms and Data Structures Masterclass](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/).

## Setup

1. Install dependencies:
```bash
yarn install
# or
npm install
```

2. Run TypeScript in watch mode:
```bash
yarn build:watch
```

3. Run a TypeScript file directly:
```bash
yarn start
# or run specific files with
npx ts-node src/your-file.ts
```

## Available Scripts

- `yarn build` - Compile TypeScript to JavaScript
- `yarn build:watch` - Compile TypeScript in watch mode
- `yarn test` - Run Jest tests
- `yarn test:watch` - Run Jest tests in watch mode
- `yarn test:coverage` - Run tests with coverage report
- `yarn lint` - Run ESLint
- `yarn format` - Format code with Prettier
- `yarn start` - Run src/index.ts with ts-node

## Project Structure

```
src/
├── algorithms/          # Algorithm implementations
├── data-structures/     # Data structure implementations  
├── leetcode/           # LeetCode problem solutions
└── utils/              # Utility functions

__tests__/              # Test files
├── algorithms/
├── data-structures/
└── leetcode/
```

## Technologies

- **TypeScript** - Type-safe JavaScript
- **Jest** - Testing framework with ts-jest
- **ESLint** - Code linting with TypeScript support
- **Prettier** - Code formatting
- **ts-node** - Direct TypeScript execution

## Getting Started

1. Create your practice files in the `src/` directory
2. Write corresponding tests in the `__tests__/` directory
3. Use `yarn test:watch` to get immediate feedback while coding
4. Run `yarn lint` to check code quality

Happy coding! 🚀