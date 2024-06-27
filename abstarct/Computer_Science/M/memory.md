# memory

### type

1. Primary memory(RAM)

|       Name        | Specification                                                           |
| :---------------: | :---------------------------------------------------------------------- |
| Dynamic Ram: DRAM | Commonly used for system memory, needs to be refreshed periodically.    |
| Static RAM: SRAM  | Faster than DRAM, used for cache memory, does not need to be refreshed. |


2. Secondary Memory

|          Name           | Specification                                                     |
| :---------------------: | :---------------------------------------------------------------- |
|  Hard Disk Drives: HDD  | Magnetic storage, mechanical parts, slower but higher capacity.   |
| Solid State Drives: SSD | Flash memory, no moving parts, faster and more reliable than HDD. |

3. Cache memory

|       Name       | Specification                                                                           |
| :--------------: | :-------------------------------------------------------------------------------------- |
| L1, L2, L3 Cache | Small, fast memory located close to the CPU to speed up access to frequently used data. |


4. Regiseters

|     Name      | Specification                                                        |
| :-----------: | :------------------------------------------------------------------- |
| CPU Registers | Small storage locations within the CPU for immediate data processing |

### comparison

\# speed

Register > Cache > Main Memory(RAM) > Secondary Memory

\# size

Secondary Memory > Main Memory(RAM) > Cache > Register

### memory addressing

- Physical Addressing   : Direct addressing of memory locations.
- Virtual Addressing    : Uses a memroy management unit(MMU) to map virtual addresses to physical addresses.

### memory allocation

- Static Allocation     : Memory size and location are determined at compile time.
- Dynamic Allocation    : Memory is allocated at runtime, managed by functions like `malloc` and `free` in C, or `new` and `delete` in C++.