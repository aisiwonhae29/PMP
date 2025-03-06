# nginx

### index

- [basic](../implement/Nginx/basic.nginx)

### about

- web server    : nginx can be used as a standalone web serve. It is well-suited for serving high-traffic websites and applications.
- reverse proxy : nginx can act as a reverse proxy server, forwarding client requests to upstream servers and returning the responses back to client. for load balancing, caching, ssl termination.
- load balancing: nginx can distribute traffic across multiple upstream servers based on algorithms, improving performance, fault tolerance, and scalability.
- caching       : nginx provides excellent caching capabilities, which can significantly reduce the load on upstream servers and improve response times for clients.
- configuration : nginx conf files are simple and easy to understand, making it relatively straightforward to configure and manage.
- low resource use: nginx has a small memory footprint and consumes fewer system resources compared to many other web servers, making it a popular choice for high-traffic environments.
- event-driven architecture: nginx uses an event-driven, non-blocking architecture allowing it to handle a large number of concurrent connection with minimal memory usage.
- upstrem       : This refers to  group of backend servers (or pp instnces) that handle client requests. This define the pool of servers tht Nginx distributes traffic to.

### component

- nginx.conf: Handling the nginx process.

### code

\# main block

1. about

- This is the top-level config of Nginx.
- It contains global directives tht apply to the entire Nginx instance.

2. code components

- worker_processes: specifies the number of worker processes. Use auto to set it equal to the number of CPU cores.
- error_log: Defines where error logs are stored.
- pid: location of the process ID file.

3. code

```nginx
worker_processes auto;  # Automatically set the number of worker processes based on CPU cores
error_log /var/log/nginx/error.log warn;  # Path to the error log
pid /var/run/nginx.pid;  # Location of the PID file
```

\# event block

1. about

- This block defines how nginx handles connections.

2. code components

- worker_connections: Maximum number of connections ech worker can handle.

3. code

```nginx
events {
    worker_connections 1024;  # Maximum number of simultaneous connections per worker
}
```

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

3. code 

```nginx
http {
    include       /etc/nginx/mime.types;  # Include MIME type definitions
    default_type  application/octet-stream;

    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                     '$status $body_bytes_sent "$http_referer" '
                     '"$http_user_agent" "$http_x_forwarded_for"';

    access_log /var/log/nginx/access.log main;

    sendfile        on;
    keepalive_timeout 65;

    # Upstream block (optional)
    upstream my_app {
        server 127.0.0.1:3001;
        server 127.0.0.1:3002;
    }

    # Include server blocks
    include /etc/nginx/conf.d/*.conf;
}
```

\# server{}

1. about

- The server block defines a virtual server configuration.

2. code components

- listen: Specifies the port or IP ddress to listen on.
- server_name: Defines the domain names for the server block.
- location: Configures how req to specific paths are handled.
- error_page: Specifies custom error pages.

3. code

```nginx
server {
    listen 80;  # Listen on port 80
    server_name example.com www.example.com;  # Domain names

    location / {
        proxy_pass http://my_app;  # Forward traffic to the upstream block
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    error_page 404 /404.html;  # Custom error page
}
```

\# Upstrem block{}

1. about
 
- UPstream block defines a group of backend servers for lod balancing.
- This declared within http block.

2. code components

- server: Specifies the backend server address and port

3. code 

```nginx
upstream my_app {
    server 192.168.1.101:3001; # Server 1
    server 192.168.1.102:3001; # Server 2
    server 192.168.1.103:3001; # Server 3
}
```

\# Location block{}

1. about

- The Location block is used to configure routing for specific URl paths.

2. code components

- /: Matches all requests.
- =: Matches the exact request.
- ~: Performs a case-sensitive regex match.
- ~*: Performs a case-insensitive regex match.
- ^~: Gives priority to this location if it matches the request.

3. code

```nginx
location / {
    root /var/www/html;  # Serve files from this directory
    index index.html index.htm;  # Default files to serve
}

location /api/ {
    proxy_pass http://my_app;  # Forward /api/ requests to the upstream block
}

location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
    expires 30d;  # Cache static files for 30 days
    access_log off;
}
```