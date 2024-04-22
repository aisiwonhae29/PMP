# WASI: WebAssembly System Interfase

### about

- WASI is a system interface that allows WebAssembly modules to interact with different system resources like files, network, and other operating system services.
- WASI provides a standardized set of APIs that can be used by WebAssembly applications to access these system resources in a consistent and securemanner with different platforms and environments


### Object

1. Portability

- By providing a standard set of APIs, WebAssembly modul es an be run on different operating systems and environments without requiring platform-specific modifications.
  
2. Security

- WASI defines a secure sandbox model that isolates WebAssembly modules from accessing system resources directly, ensuring that accsss to sensitive resources is controlled and restricted.

3. Modularity

- WASI is designed to be modular, allowing different subsets of APIs to be implemented based on the requirements of the target environment of application

4. Embedding: WASI allows Wasm programs to be embedded into different host environments like web bvowsers.

5. Language-agnostic