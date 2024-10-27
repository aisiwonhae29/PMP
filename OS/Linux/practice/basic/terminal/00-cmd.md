# cmd

### list

```
# std_in&out

- >     +   filename : Redirects standard output to a file. If file contents exists, Overitten it or not exists file then create file.
- >>    +   filename : Redirects standard output to a file. But appends to end of the file.
- <     +   filename : Redirects standard input from a file. ex) cat < file.txt
- 1>    +   filename : Redirects standard output to a file. ex) 1> log.txt
- 2>    +   filename : Redirects standard error to a file. ex) 2> error.txt
- &>    +   filename : Redirects standard input and error to a file.
- file_name + arg    : argument applied on file.

# process related

- & + command        : execute the process on the background side.

- jobs               : List all background jobs in the current shell session.

- fg + $(job_number) : Bring a background job to the foreground.

- bg + $(job_number) : Resumes a suspended job in the background.

- nohub              : Runs a command immune to hangups with output to a non-tty.

- kill +$(proccessid): Sends a signal to a process to terminate background processes.

- ps                 : Shows information about active processes.


```
