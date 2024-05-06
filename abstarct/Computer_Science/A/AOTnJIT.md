# AOT & JIT compilation

### AOT: Ahead Of Time

- AOT compilation is the process of converting a high-level programming language into native machine code before the program is executed.
- This compilation happens ahead of time, before the program runs.
- The resulting native code can be directly executed by the computer's processor withoud need for virtual machine or interpreter at runtime

### JIT: just in time

- JIT compilation is the process of compiling code from a higher level language into native machine code at runtime, just before it is executed.

### remark

- Java uses a combination of interpretation.
- .Net core supports both JIT and AOT compilation.
- Android Runtime (ART) introduced an AOT compilation option in addition to its traditional JIT compilation for improved performance on mobile devices.