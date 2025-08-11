1. For an array containing 100 elements, provide the number of steps the following operations would take:
   a. Reading -> 1
   b. Searching for a value not contained within the array 100
   c. Insertion at the beginning of the array 101
   d. Insertion at the end of the array 1
   e. Deletion at the beginning of the array 100 (1 delete and 99 shifts the remaining)
   f. Deletion at the end of the array 1
2. For an array-based set containing 100 elements, provide the number of steps the following operations would take:
   a. Reading 1
   b. Searching for a value not contained within the array 100
   c. Insertion of a new value at the beginning of the set 201 (search 100, shift all 100 to right, add 1 step)
   d. Insertion of a new value at the end of the set: search 100, add 1 -> 101
   e. Deletion at the beginning of the set 100
   f. Deletion at the end of the set 1
3. Normally the search operation in an array looks for the first instance of a given value. But sometimes we may want to look for every instance of a given value. For example, say we want to count how many times the value “apple” is found inside an array. How many steps would it take to find all the “apples”? Give your answer in terms of N.
   n steps?

| Operation                                  | Array (Steps) | Array-Based Set (Steps) |
| ------------------------------------------ | ------------- | ----------------------- |
| Reading                                    | 1             | 1                       |
| Searching for a value **not in array/set** | 100           | 100                     |
| Insertion at the **beginning**             | 101           | 201                     |
| Insertion at the **end**                   | 1             | 101                     |
| Deletion at the **beginning**              | 100           | 100                     |
| Deletion at the **end**                    | 1             | 1                       |
