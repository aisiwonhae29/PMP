# socket

### about

- A socket is one endpoint of a two way communication link between two programs running on the network.
- The socket mechanism provides a means of inter-process communication (IPC) by establishing named contact points between which the communication take place.
- Like 'pipe', is used to create pipes and sockets is created using 'socket' system call.

### feature

- The socket provides bidirectional FIFO communication facility over the network.
- A socket connecting to the network is created at each end of the communication.
- Each socket has a specific address

- The server creates a socket, attaches it to a network port addresses then waits for the client to contact it.