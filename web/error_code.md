# error code


### Informational Codes (1xx)

- 100 Continue: The server acknowledges the initial part of the request and expects the client to continue with the rest of the request.

### Successful Codes (2xx)

- 200 OK: The request was successful.
- 201 Created: The request resulted in the creation of a new resource.
- 204 No Content: The server successfully processed the request but does not need to return any content.

### Redirection Codes (3xx)

- 301 Moved Permanently: The requested resource has been permanently moved to a different location.
- 302 Found/Temporary Redirect: The requested resource temporarily resides under a different URI.
- 304 Not Modified: The resource has not been modified since the last requested time, and the server does not need to send it again.

### Client Error Codes (4xx)

- 400 Bad Request: The server cannot process the request due to a client error.
- 401 Unauthorized: Authentication is required to access the resource.
- 403 Forbidden: The client does not have permission to access the resource.
- 404 Not Found: The requested resource could not be found on the server.
- 405 Method Not Allowed: The method used in the request is not allowed for the specified resource.

### Server Error Codes (5xx)

- 500 Internal Server Error: A generic error message indicating the server encountered an unexpected condition.
- 502 Bad Gateway: The server, acting as a gateway or proxy, received an invalid response from an upstream server.
- 503 Service Unavailable: The server is currently unable to handle the request due to maintenance or overload.
- 504 Gateway Timeout: The server, acting as a gateway or proxy, did not receive a timely response from an upstream server.