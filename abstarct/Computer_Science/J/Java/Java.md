# Java

### Component

\# javac    : Java compiler

**about**

- javac is a tool that translates Java source code into Java bytecode.
- This bytecode can then be executed by the Java Virtual Machine.

**package**

- Java Class libraries      : A set of dynamically loadable libraries that Java applications can call at runtime.
- Java Virtual Machine(JVM) : The cor component that executes Java bytecode.
- Supporting Files          : configuration files, property files, and other resources needed by the JVM and Java applications.

\# java     : Java runtime

**about**

- The term "runtime" refers to the period when a program is running, as oppesed to other phases such as compilation or linking.

**package**

- Class Loader              : Loads class files into the JVM.
- Bytecode verifier         : Checks the bytecode to ensure it adheres to Java;s security and correctness constraints.
- Interpreter/JIT compiler  : Executes the bytecode, either by interpreting it or by compiling it into native machine code for better performance.
- Garbage Collector         : Memory management 

### java SE: Standard Edition

- Java SE is a computing platform for development and deployment of portable code for desktop and server environments.
- Java SE includes the JDK and JRE.

\# components

- Java Language Specification   : Defines the syntax and semantics of the java programming language.
- Java Standard APIs            : Core libraries and APIs for Java programming.
- Java SE API Documentation     : Official documentation for Java SE.

### JDK: Java Development Kit

- JDK is a full-featured software development kit required for developing Java applications.

\# components

- Java compiler(javac)          : Converts java source code into bytecode.
- Java Runtime Environment(JRE) : Below passage.
- Java debugger(jdb)            : Helps in debugging java programs.
- Java Documentation(javadoc)   : Generates documentation from java source code.
- Additional tools              : For monitoring, security, and other purposes.

### JRE: Java Runtime Environment

- The JRE is a package of tools used to run java applications.

\# components

- Java Virtual Machine(JVM) : Executes java bytecode on a particular platform.
- Corelibraries             : Essential class libraries and supporting files.
- Supporting files          : Configuration files, properties files, etc.

### JVM and OS Interaction

\# process management

- The JVM itself runs as a process on the OS. WHen we start a java app, the OS creates a new process for the JVM.
- The JVM process can create and manage multiple threads, which are scheduled and managed by the OS.

\# memory management

- Heap Memory
  - The JVM requests memory from the OS to create the java heap, where objects are allocated
  - The JVM's garbage collector manages this memory and interacts with the OS to allocate and free memory as needed.
- Stack memory
  - Each java thread has its own stack, and the JVM interacts with the OS to allocate memory for these stacks.

\# File I/O operations

- The JVM interacts with the OS to perform file operations. Java's I/O classes(e.g., 'fileinputstream') use native methods to interact with the OS file system.

\# Network operations

- The JVM uses the OS's networking capabilities to perform network operations. Java's networking classes rely on the OS's networking stack.

\# Thread management

- The JVM relies on the OS to schedule and manage threads. Java's threading model maps to native OS threads, and the JVM interacts with the OS to handle thread createion, scheduling, synchronization, and termination.

\# Native method invocation

- The JVM uses the Java Native Interface (JNI) to call methods implemented in other programming languages like C or C++. This allows java app to use OS-specific features or libraries.

\# System calls

- The JVM makes system calls to the OS to perform low-level operations like process control, file operations, memory management, and inter-process communication.