# network

# netstat

### cmd

- option
  - -a  : Displays all sockets.(both listening and non-listening sockets).
  - -n  : Displays addresses and port numbers in numerical format (rather than resolving hostnames and service names).
  - -p  : Shows the process ID (PID) and the name of the program associated with each socket.
  - -t  : Displays TCP connection
  - -u  : Displays UDP connection
  - -l  : Shows only listening sockets
  - -e  : Displays extended information.

ex) 
- netstat -tulpen  
- netstat -anp              

- telnet ip port

# nmap: network mapper

### about

- nmap is a versatile open-source tool used for network discovery and security auditing.

### purpose

- Network exploration
- Security scanning
- Port scanning
- OS detection
- Service/version detection

### feature

- Port sccanning    : Determines open, closed, and filtered ports on target systems.
- OS fingerprinting : Attempts to identify the operating system of target hosts.
- Version scanning  : Detects services and their versions running on open ports.
- Scripting engine  : Allows for custom and pre-written scripts to extensd functionality.

### Usage

- Network inventory
- Managing service upgrade schedules
- Monitoring host or service uptime
- Security audits
- Penetration testing

### cmd

- nmap [scan type] [option] [target specification]

### NSE:Nmap Scripiting Engine

\# about

- NSE is a feature Nmap that allows users to write an share scripts to automate a wide variety of networking tasks.
- These scripts are typically written in Lua programming language.
- when called something with script like this `--script="rsync-brute"` then the rsync-brute script is called and apply.