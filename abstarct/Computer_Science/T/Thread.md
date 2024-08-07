# Thread

<details> <summary style="font-size: 1.25rem;"> Folding </summary>

### about

- A thread is the smallest unit of processing that can be performed in an operating system.
- It is a sequence of executable instructions that can be managed independently by a scheduler.

### MultiThreading

- This is the capability of a CPU, or a single core in a multi-core processor, to provide multiple threads of execution cuncurrently
- Thread within the same process share the same memory space but can execute indeendently, enabling efficient and faster task execution.

### Thread vs Process

- A process is an independent, self-contained unit of execution with its own memory space.
- A thread is a subset of a process, sharing the same memory but running independently.
- Multiple threads within a process can communicate more easily compared to IPC

### Thread lifecycle

- New               : The thread is created but not yet started.
- Runnable          : The thread is ready to run and waiting for CPU time.
- Blocked/ Waiting  : The thread is waiting for some resource or waiting for another thread to perform an action.
- Timed waiting     : The thread is waiting for a specified amount of time.
- Terminated        : The thread has completed execution or has been aborted.

</details><br>

### ThreadGroup

\# about

- This is a way to group multiple threads into a siingle object for easier management and control.

\# usecase

1. Managing groups of threads
2. Security and isolation
3. Resource management.

# Thread in java

<details> <summary style="font-size: 1.25rem;"> Folding </summary>

> quote: https://www.infoworld.com/article/2074217/java-101--understanding-java-threads--part-1--introducing-threads-and-runnables.html

### index

1. Concept of thread

2. Thread contents
   -  Synchronization(via locks)
   -  Synchronization problems(such as deadlock)
   -  The wait/notify mechanism
   -  scheduling(with and without priority)
   -  Thread interruption
   -  timers
   -  volatility
   -  Thread groups
   -  thread local variables

## Concept of thread

### about

- The thread is an independent path of execution through program code.
- When multiple threads execute, one thread's path through the same code usually differs from the others.
  - For example, suppose one thread executes the byte code equivalent of an if-else statement's if part.
  - While another thread executes the byte code equivalent of the else part.
- The JVM knows about thread with method-call stack.

</details>