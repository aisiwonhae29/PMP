# IPC: Inter Process Communication

> quote: https://www.geeksforgeeks.org/inter-process-communication-ipc/

### about

- An Independent process is not affected by the execution of other processes, while a co-operating process can be affected by other executing processes.
- Independent process is more effective we may think, but many situations increasing computational speed.
- IPC is a mechanism that allows processes to communicate with each other and synchronize their actions.

### concept

<img src='../zzz_image/I_IPC.png' style='height:500px;'>

\# main idea

- The communication between these processes can be seen as a method of co-operation between them.
  - Shared Memory
  - Message passing

\# types of process

- Independent process
- Co-operating process

### logic

\# shared memory method

- There are two processes: Producer and Consumer.
- The two processes share a common space or memory location known as a buffer. When consumer consumes the item if they needed.
  - Two problem exist on this process
    - Unbounded buffer problem  : Producer can keep on producing items and there is no limit on the size of the buffer
    - Bounded buffer problem    : Producer can produce up to a certain items before it start waiting for consumer to consume it. latency problem
- javascript code: [code](../../../Language/Javascript/node/concept/producer_consumer.js)

\# messaging passing method

- This method processes communicate with each other without using any kind of shared memory.
- If process p1 and p2 want to communicate, then proceed follows below constraint
  - Establish a communication link
  - Start exchanging msg using basic primitives: send(msg, destination), receive(msg, host)
- The msg size fixed or flexible. When the msg size is flexible, that things makes programmer easy OS designer hard, fix reverse.
- A standard msg can have two parts, header is used for storing msg type destination, control info, etc meta data.
- The control info contains buffer space, sequnce number, priority ...
- Generally, message is sent using FIFO style.

<details><summary>Easy, Hard implement reason from data size </summary>

### Fixed-Size msg

**Easy for OS Designers**

- Simplified Memory Manage
- Predictable Buffer Allocation
- Simplified Synchronization

**Complicated for Programmers**

- Wasted spaces
- Msg fragmentation
- Lack of flexibility

### Variable-Size msg

**Complicated for OS Designer**

- Dynamic memory Allocation: This can lead to memory fragmentation and increased complexity in memory management
- Buffer management: Dynamically allocate appropriate sizes.
- Complex Synchronization
- Overhead of length info: The OS needs to manage the additional overhead of keeping track of the length of each msg.

**Easy for programmers**

- Flexibility
- Efficient use of space
- Simplified app logic

</details>

**implement point**

- How are links established?
- Can a link be associated with more than two processes?
- How many links can there be between every pair of communicating processes?
- what is the capacity of a link? is the size of a msg that the link can accommodate fixed or variable?
- Is a link unidirectional or bi-directional?

**link capacity**

- A link has some capacity that determines the number of messages 
- Every link has a queue associated with it which can be of zero capacity, bounded capacity, unbounded capacity.
- In zero capa sender waits until the receiver informs the sender about msg, non-zero case sender must anounce about receive msg.

**Communication type**

1. Direct Communication links : implemented when the processes use a specific identifier for the communication, but its hard
2. In-direct Communication    : This is done via a shared mailbox (port), which consists of a queue of msg. sender keeps receiver pick up

\# message passing through exchanging the messages

**Synchronous and Asynchronous Message passing**

- IPC is possible betw the processes on same computer as well as on the processes running on different computer
- Blocking is considered synchronous and blocking send means the sender will be blocked until msg received by receiver.
- Similarly, blocking receive has the receiver block until a msg is available.
- Non blocking is considered asynchronous and Non blocking send has the sender sends the msg and continue.
- Naturally senders are looks blocking process, and receivers are non-blocking. (sender:s, receiver:r)
  - Blocking s & blocking r
  - N Blocking s & N Blocking r
  - N Blocking s & Blocking r (Mostly used)

**Direct msg passing**

- The process which wants to communicate must explicitly name the recipient or sender of the communication(e.g. send(p1, msg))
- In this method of communication, the link get established automatically.
- But one link can be used between one pair of the sender 
- Receiver and one pair of sender and receiver should not possess more than one pair of links.
- Symmetry and asymmetry between sending and receiving can also be implemented i.e. either both processes will name each other for sending and receiving the msg
- Or only the sender will name the receiver for sending and no need for the receiver for naming the sender for receiving the msg.
- The problem with this method, if the name of one process changes, this method will not work.

**Indirect msg passing**  

- Processes use mailboxes (also referred to as ports) for sending and receiving messages.
- Each mailbox has a unique id and processes can communicate only if they share a mailbox.
- Link established only if processes share a common mailbox and a single link can be associated with many processes.
- Each pair of processes can share several communication links and these links may be unidirectionalor bi-directional.
- Suppose two processes want to communicate through indirect msg passing the required operations are:
  - create mailbox: Use this for communicate and then destroy.
  - There is a problem with this mailbox implementation.
    - Suppose there are more than two processes sharing the same mailbox and suppose the process p1 sends a msg to the mailbox, which process will be the receiver?
      - This problem makes the ambiguity in receiver selection, possibility to pass the data with not original sender process.
      - Load balancing and fairness. Some processes might receive more msg than others.
        - Msg arrival timing 
          - In a real-world, msg do not arrive at the mailbox at perfectly regular intervals. 
          - So this makes might receive more msg beause it was available at the right moment
        - Process availability
          - Processes may have different states of availability based on their current tasks. 
          - when process is busy to processing to some work, this can be result to taken by another process.
        - Handling Time Variation
          - Processes are different computation time, this invoke the load msg problem.
        - Fairness in shared resources
          - If one process consistently receives more msg, it might monopolize shared resources leading to inefficiencies and bottleneck.
        - System efficiency
          - Effective load balancing improves overall system efficiency by ensuring that all processes are utilized optimally.
        - Resolve solution
          - Round-robin scheduling
          - Priority-based scheduling
          - Random selection
    - This can be solved by either enforcing that only two processes can share a single mailbox or enforcing that only one process is allowed to execute the receive at a given time or select randomly 
    - And notify the sender about the receiver.
    - A mailbox can be made private to a single sender/receiver pair and can also be shared between multiple sender/receiver pairs.
      - This is used in client/server apps.(In here server is receiver)
    - Port is an implementation of such mailbox that can have multiple senders and a single receiver.
    - The port is owned by the receiving process and created by OS on the request of the receiver process and can be destroyed
      - And can be destroyed either on request of the same receiver processor when the receiver terminates itself.
    - Enforcing that only one process is allowed to execute the receive can be done using the concept of mutual exclusion.
      - mutual exclusion is a principle in concurrent programming and operating systems that ensures that multiple processes or threads do not simultaneously access a shared resources.
        - Such as a critical section of code, a data structure, or a hardware device.
        - This main goal is to prevent race condition.
    - Mutex mailbox is created which is shared by n process.
    - The sender is non-blocking and sends the msg.
    - The first process which executes the receive will enter in the critical sectiona ald all other processes will be blocking and will wait.

### usage

- Posix: uses shared memory method
- Mach uses msg passing
- Windows xp: uses msg passing using local procedural calls.

### Communication 

c code make into js

### keywords

- Shared memory exists?
- Fixed or flexible size?
- Direct or In-direct communication