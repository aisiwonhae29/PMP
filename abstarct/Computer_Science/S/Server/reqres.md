# Request / Response

### Request

- It reporesents the HTTP request that the server receives from the client. It contains information about the request made by the client, such as URL, parameters, headers
  query strings, cookies, and often the body of the request(In case of POST or PUT requests)

- 'req' objects

1. req.params: contains route parameters(in a URl like '/uers/:id');
2. req.query: Contains query parameters(in a URl like '?id=123')
3. req.body: contains parsed request body(in case of POST or PUT requests when used with middleware like 'body-parser' or 'express.json()')
4. req.headers: Contains request headers
5. req.cookie: Contains parsed cookies(when using cookie-parser middleware)
6. req.method: Contains the HTTP method of the request(GET, POST, PUT, Delete, etc..)
7. req.path: Contains the path par of the URL
8. req.url: Contains the full URL of the request
9. req.get('headerName'): Method to get a specific header value

### Response

- It represents the HTTP response that the server sends back to the client. It allows you to control what data is sent back to the client, including setting headers,
  status codes, and sending a response body

- 'res' objects

1. res.send(): sends a presponse back to the client. It automatically sets the appropriate content-type based on the data provided.
2. res.json(): sends a JSON response back to the client
3. res.status(): sets the HTTP status code for the response
4. res.cookie(): sets a cookie in the response
5. res.redirect(): redirects the request to a different URL
6. res.header(): Sets response headers
7. res.locals: an object containing response local variables scoped to the request, available to template rendered during that request/response cycle

### Conclusion

- These objects are passed to route handlers in Express, allowing you to access information about the incoming request and send an appropriate response back to the client based on that request.