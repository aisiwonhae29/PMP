# linux process

### About linux process

- It has 5 digin ID number called PID.
- Each process has PID
- Cannot exists same PID and used PID can use again.

### Initializing a process

1. Method 1 : Foreground Process

- when started runs in foreground by default receives input from the keyboard and sends output to the screen.
- when a command/process is running in the foreground and is taking a lot of time, no other processes can be run or started
  (because the prompt would not be available until the program finishes processing and comes out)

2. Method 2 : Background Process

- It runs in the background without keyboard input and waits till keyboard input is required
- Thus, other processes can be done in parallel with the process running in the background since they do not have to wait for.
- adding & along with the command starts it as a background process