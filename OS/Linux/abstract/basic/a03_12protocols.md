# 12 protocols

### about

1. Address REsolution Protocol: ARP

- translates IP addresses to MAC addresses and vice versa so LAN endpoints can communicate with one another.

2. Border Gateway Protocol: BGP
   
- BGP makes the internet work.
- This routing protocol controls how packets pass through routers in an autonomous system(AS)
- one or multiple networks run by a single organization or provider and connect to different networks.

3. Domain name system: DNS

- DNS is database that includes a website's domain name and its corresponding IP addresses.
- DNS translate the doman name into IP addresses.

4. Dynamic Host Configuration Protocol: DHCP

- DHCP assigns IP addresses to network endpoints so they can coomunicate with other network endpoints over IP.
- Whenever a device joins a network with a DHCP server for the first time, DHCP automatically assigns it a new IP address and continues to do each time when move.

5. File Transfer Protocol: FTP

- FTP is a client-server protocol, FTP runs over TCP/IP(suite of communictaions protocols) and requires a command channel and a data channel to communicate file.
- Clients request file through the command channel. 
- FTP has grown less popular but used in banking for security reason.

6. Hypertext Transfer Protocol: HTTP

- Runs over TCP/IP protocol.
- when a user enters a website domain and aims to access it, HTTP provides the access.

7. Internet Protocol: IP

- IP functions similarly to a postal service.
- When users send and receive data from their device, the data gets spliced into packets.
- When packets leaves the sender, it goes to a gateway and travel through gateways until they reach their destinations.
- Paired with TCP, IP sends packets to their destinations, and TCP arranges the packets in the correct order 
  
8. Open Shortest Path First: OSPF > now use Routing information protocol: RIP

- OSPF works with IP to send packets to their destinations.
- OSPF helps quickest route find to IP.

9. Simple Mail Transfer Protocol: SMTP

- Email servers use SMTP to send email messages from the client to the email server to the receiving email server
- However, SMTP doesn't control how email clients receive messages, just how clients send messages.

10. Telnet

- Telnet is designed for remote connectivity and it establishes connections between a remote endpoint and host machine.
- Telnet prompt the user at the remote endpoint to log on.

11. Transmission Control Protocol: TCP

- TCP numbers individual packets because IP can send packets to their destinations through different routes and get them out of order.
- TCP detects errors in the sending process, and find out missing based on TCP'numbered system, and requires IP to retransit befor IP deleved.

12. User Datagram Protocol: UDP

- UDP is alternative to TCP.
- UDP enables low-latency data transmissions between internet applications, making it ideal for audio and video requirements.
- Unlike TCP, UDP doesn't wait for all packets to arrive or organize the packets.
- Instead, UDP transmits all packets even if some haven't arrived.
- UDP is quickly than TCP but less reliable.