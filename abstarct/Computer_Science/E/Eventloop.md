# Event loop

### about

- The event loop is a core mechanism in node.js that handles asynchronous operations.
- It continuously checks for and executes tasks, such as I/O operations, timers, and callbacks, allowing Node.js to perform non-blocking operations.

### functionality

- Phases: The event loop operaties in phases, each handling different types of callbakcs. (e.g., timers, I/O callbacks, idle/prepare, poll, check, and close callbacks).
- Execution: It processes one phase completely before moving to the next, handling callbacks in the queue for each phase
- Asynchronous execution