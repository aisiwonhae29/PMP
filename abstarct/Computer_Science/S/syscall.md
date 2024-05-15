# syscall: System call

### about

- A 'syscall' is a mechanism used by an operating system to provide an interface for app (user space) to interact with the kernel (kernel space)
- In simpler terms, a syscall is request made by a program to the operating system's kernel to perform tasks that require elevated privileges or access to system resources.
- These tasks can include operations such as reading or writing files, creating new processes, allocating memory, managing hardware devices, and more.

### work

- When a program needs to perform such privileged operations, it cannot directly access the underlying hardware or perform these these tasks on its own.
- Instead, it makes a syscall, which switches the execution omde from suer space to kernel space, aallowing the kernel to carry out the requested oepration program.
- Once the operation is completed, control is returned to the user space program.

### remark

- Syscall are typically invoked through dedicated assembly language instructions or library functions provided by the operation system.
- Each syscall is identified by a unique number, and the parameters required for the operation are passed to the kernel via registers or a define calling convention.
- Syscalls play a fundamental role in the interaction between app and the operating system, enabling programs to utilize the full range of functionality provided by system.
- While maintaining security and stability through controlled access to system resources.

### usage

\# node.js

```
const { exec } = require('child_process);

exec('ls', (error, stdout, stderr) => {
    ...
});

```