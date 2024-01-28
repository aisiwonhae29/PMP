# HTTP (Hyper Text Transfer Protocol)

### about

- set of rule which is used for transferring the files like, audio, video, graphic image, text, and other multimedia files on the WWW (World Wide Web).
- http is an application-level protocol. The communication usually takes place through TCP/IP sockets, but any reliable transport can also be used.
- standard (default) port for HTTP connection is 80, but other port can also be used.

### three important things about HTTP

1. Connectionless: HTTP client, browser initiates an HTTP request and after a request is made, the client waits for the response. The server processes the request and sends a response back after
        which client disconnect the connection. So client and server knows about each other during current request and response only.
2. Media independent: can deliver any sort of data, as long as the two computers can read it.
3. Stateless: HTTP is connectionless and it is a direct result of HTTP being a stateless protocol. The server and client are aware of each other only during a current request. afterwards, both of
        them forget about each other. Due to this nature of the protocol, both can't retain information between different requets across the web pages.