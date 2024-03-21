# Buffer

### about

\# definition 

- Buffer is a generic term that means different things in different contexts.
  - In general, buffer is a tool that mitigates the effects of fluctuations in supply and demand.
  - In computer science, a buffer is temporary storage we use when one component feeds data to the other, but their speeds aren't the same. 


\# description

- Most operating systems come with predefined buffers  used for various purposes. 
  - For example, data transfers between a fast CPU and a slow with external device are impossible without a buffer in between them.
- If buffer size big, underutilization, if small then data loss and will get inaccurate results.
- We need a large buffer at both the transmitter and receiver ends if our application uses networking to connect them, especially on video.


\# buffer size

- We usually choose a buffer size that is a multiple of the difference between the data generation and consumption rates to avoid bufer overflow.
  - 1000 * item_size * (generate_rate - consumed_rate)


\# buffer location

- This also determines the buffer size. If we use the system disk space as a buffer, the read and write operations will be slower as compared to a buffer in RAM.


