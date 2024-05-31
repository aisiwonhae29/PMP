# cpu

### top

\# about 

- this indicates about cpu usage rate.

\# command

- top (-opt) (-opt ...)
- top -b -n1 | grep "CPU(s)"    : %Cpu(s):  1.0 us,  0.5 sy,  0.0 ni, 98.0 id,  0.3 wa,  0.0 hi,  0.2 si,  0.0 st
  - us (user space)             : The percentage of CPU time spent on user processes. This includes normal user processes that are not niced (i.e., not running with a lower priority).
  - sy (system space)           : The percentage of CPU time spent on system (kernel) processes.
  - ni (nice)                   : The percentage of CPU time spent on user processes with a positive nice value (lower priority).
  - id (idle)                   : The percentage of CPU time spent idle. A high value here means most of the CPU time is not being used.
  - wa (I/O wait)               : The percentage of CPU time spent waiting for I/O operations to complete.
  - hi (hardware interrupts)    : The percentage of CPU time spent handling hardware interrupts.
  - si (software interrupts)    : The percentage of CPU time spent handling software interrupts.
  - st (steal time)             : The percentage of CPU time stolen from this virtual machine by the hypervisor for other tasks (only relevant in virtualized environments).

\# option

- -b    : batch mode
- -n1   : 1 iteration
