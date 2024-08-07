# nginx

### about

- web server    : nginx can be used as a standalone web serve. It is well-suited for serving high-traffic websites and applications.
- reverse proxy : nginx can act as a reverse proxy server, forwarding client requests to upstream servers and returning the responses back to client. for load balancing, caching, ssl termination.
- load balancing: nginx can distribute traffic across multiple upstream servers based on algorithms, improving performance, fault tolerance, and scalability.
- caching       : nginx provides excellent caching capabilities, which can significantly reduce the load on upstream servers and improve response times for clients.
- configuration : nginx conf files are simple and easy to understand, making it relatively straightforward to configure and manage.
- low resource use: nginx has a small memory footprint and consumes fewer system resources compared to many other web servers, making it a popular choice for high-traffic environments.
- event-driven architecture: nginx uses an event-driven, non-blocking architecture allowing it to handle a large number of concurrent connection with minimal memory usage.

### component

- nginx.conf: Handling the nginx process.

### code

\# http{}

1. about

- The http block is used to define general HTTP configuration that apply to all server blocks within it.
- This Related to HTTP handling, such as proxy settings, caching, compression, and more.
- It's a higher-level context that encapsulates all the server blocks and their associated directives.

2. code components

- include       : Includes other configuration files, helping modularize the configuration.
- log_format    : Defines the format for log entries.
- access_log    : Specifies the location and format of the access log.
- sendfile      : Enables or disables the use of sendfile() to transfer files.
- gzip          : Enables gzip compression.

\# server{}

1. about

- The server block defines a virtual server configuration.