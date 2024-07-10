# OSI(Open Systems Interconnection) layers

### about

- The OSI model is a conceptual framework used to understand and implement network protocols in seven distinct layers.
- Each layer serves a specific function and communicates with the layers directly above and below it.

### component

1. Physical layer

| Name         | specification                                                                                         |
| :----------- | :---------------------------------------------------------------------------------------------------- |
| Function     | This layer is transmission and reception of raw bit streams over physical medium                      |
| Key Elements | Cabling, switches, network interface card(NICs), hubs, repeaters and physical aspects of the network. |
| Protocol     | Ethernet(Physical layer aspects), USB, Bluetooth                                                      |

2. Data Link Layer

| Name         | specification                                                                                                                                                                   |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Function     | Provides node-to-node data transfer by detecting and possibly correcting errors that may occur in the physical layer. This ensures transferred corretly over the physical link. |
| Key Elements | MAC(Media Access Control) addresses, swiches, bridges.                                                                                                                          |
| Protocol     | Ethernet(data link layer aspects), PPP(Point-to-Point protocol), HDLC.                                                                                                          |

3. Network Layer
   
| Name         | specification                                                                                                                  |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------- |
| Function     | Manages the delivery of packets across multiple networks. It determines the best path to move data from source to destination. |
| Key Elements | IP addresses, routers.                                                                                                         |
| Protocol     | IP, ICMP, RIP, OSPF                                                                                                            |

4. Transport Layer

| Name         | specification                                                                                                                                         |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Function     | Provides reliable data transfer services to the upper layers. It is responsible for error recovery, flow control, and ensuring complete data transfer |
| Key Elements | Ports, segmentation, error correction.                                                                                                                |
| Protocol     | TCP, UDP, SCTP                                                                                                                                        |

5. Session Layer

| Name         | specification                                                                                                   |
| :----------- | :-------------------------------------------------------------------------------------------------------------- |
| Function     | Manages sessions or connections between app. It establishes, maintains, and terminates connections between app. |
| Key Elements | Session establishment, maintenance, and termination.                                                            |
| Protocol     | NetBIOS, PPTP, RPC                                                                                              |

6. Presentation Layer

| Name         | specification                                                                                                                                                |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Function     | Translates data between tha app layer and the network format. It ensures that data is in a usable format and is where data encryption and compression occur. |
| Key Elements | Data translation, encryption/decryption, data compression.                                                                                                   |
| Protocol     | SSL/TLS, JPEG, MPEG, ASCII, EBCDIC.                                                                                                                          |

7. Application Layer

| Name         | specification                                                                                                                                          |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Function     | Closest to the end user, this layer interacts with software app to implement a communictating component. It provides network services directly to app. |
| Key Elements | Network processes to app, user interfaces.                                                                                                             |
| Protocol     | HTTP, FTP, SMTP, DNS, POP3.                                                                                                                            |