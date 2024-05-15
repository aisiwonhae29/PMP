# heap

## memory related

### about

- refers to the memory space where objects, variables, and closures are stored.
- part of memory where dynamic memory allocation occurs during runtime.

### reason of separated with stack

1. Memory management        : This makes easier to manage and allocate memory for different purposes.
2. Security and Protection  : Separation helps for protect of errors and attacks. For example, buffer overflow attack is more harder to success the object when the system is seperated.
3. Performance Optimization : Stack and heap management method is different, and each method is more efficient for each object. For example local variables and function call, dynamic memory allocation.
4. Data Lifetime            : Similar with no .3
5. Memory Fragmentation     : Separtaion makes this error mitigate to solve.

---

## data structure related

### about

- heap refers to a specific type of data structure, not to be confused with the mmory heap used for dynamic memory allocation