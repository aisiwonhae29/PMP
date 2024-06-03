# exists status

### about

- Exit Status 0 (Success): Indicates successful completion of the command without any errors. Example: A program successfully executed its intended task.
- Exit Status 1 (General Error): Indicates a general error condition. Example: A command failed due to an unspecified error.
- Exit Status 2 (Misuse of Shell Builtins): Indicates misuse of shell built-in commands. Example: Incorrect usage of shell built-in commands like cd.
- Exit Status 126 (Command Not Executable): Indicates that the command cannot be executed. Example: Trying to execute a file without execute permissions.
- Exit Status 127 (Command Not Found): Indicates that the command was not found. Example: Trying to execute a command that does not exist in the system's PATH.
- Exit Status 128 (Invalid Argument to Exit): Indicates an invalid argument given to the exit command. Example: Incorrect usage of the exit command in a script.
- Exit Status 130 (Script Terminated by Ctrl+C): Indicates termination by the user pressing Ctrl+C. Example: Interrupting a running script or program in the terminal.
- Exit Status 255 (Exit Status Out of Range): Indicates that the exit status is out of the valid range (0-255). Example: An unexpected error occurred during the execution.