# cmd: child_process

### about

- cmd module provides functionalities to interact with the command line or shell of the operating system.

### features

1. Spawning child Processes

    > cmd module used to spawn child processes to execute external commands or scripts.

2. Asynchronous Execution

    > provides asynchronous methods for executing shell commands. Except exec(), execFile() wait for command completes.

3. Standard Input/Output Streams

    > When execute a command using the cmd module, we can access the standard input, output, and error streams of the child process.
    > allows you to read input from the command, as well as capture its output from and error messages.

4. Event Emitter

    > The child process object returned by methods like exec() and spawn() is an instance of eventEmiiter. We can use 'exit', 'error', 'close'

5. Security Considerations

    >  Becareful for using malicius user for attact with shell command.


### logic

\# Eventhandler

- when we call the 'cmd()' function, we receive a 'ChildProcess' object the instance of the 'EventEmitter' class.