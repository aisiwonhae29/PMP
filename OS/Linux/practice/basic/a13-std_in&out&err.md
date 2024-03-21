# Standard stream: std

### about

- Standard Input: This is where a process reads its input. It's connected to the keyboard. When type something into the terminal, it is sent to the standard input of the currently running process.


### usecase

```

- >     +   filename : Redirects standard output to a file. If file contents exists, Overitten it or not exists file then create file.
- >>    +   filename : Redirects standard output to a file. But appends to end of the file.
- <     +   filename : Redirects standard input from a file. ex) cat < file.txt
- 2>    +   filename : Redirects standard error to a file.
- &>    +   filename : Redirects standard input and error to a file.

```
