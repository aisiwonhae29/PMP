# socket

### about

- Working for IP address, port number, socket.
- A socket is one endpoint of a two way communication link between two programs running on the network.
- This provides a way for programs to communicate with each other, either on the same machine or over a network, using standard protcols.
- The socket mechanism provides a means of inter-process communication (IPC) by establishing named contact points between which the communication take place.
- Like 'pipe', is used to create pipes and sockets is created using 'socket' system call.

### feature

- The socket provides bidirectional FIFO communication facility over the network.
- A socket connecting to the network is created at each end of the communication.
- Each socket has a specific address

- The server creates a socket, attaches it to a network port addresses then waits for the client to contact it.

### vs [http](../H/HTTP.md)

|      division      | socket                                            | http                                                                                                  |
| :----------------: | :------------------------------------------------ | :---------------------------------------------------------------------------------------------------- |
| Level of Operation | OSI Layer 4. primarily using TCP and UDP          | OSI Layer 7. Built on top of the TCP protocol.                                                        |
|      Feature       | Flexibility: Socket provide a low-level interface | Simplicity: provides a high-level, standardized way of exchanging information between server & client |
|      Protocol      | Sockets can use TCP or UDP                        | http is a request-response protocol. Clients send requests to servers, like GET, POST, PUT DELETE.    |

### code

\# node.js

**Code example**

- [code](../../../Language/Javascript/node/implement/S/S_socket_server.js)
- [code](../../../Language/Javascript/node/implement/S/S_socket_client.js)

**Code explain**

- new net.socket(): net.Socket object is commonly used to create a TCP client in Nodejs. This client can connect to a TCP server, send and receive data, and handle events like connection, data receipt, errors, and disconnection.
- net             : The net module provides and API for creating both servers and clients that communicate over TCP or local Unix sockets. This gives our to low-level control over the communication process.

