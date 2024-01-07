# CORS: Cross Origin Resource SHaring

### about

- It's security feature implemented by web browsers to control which resources (like fonts, JS, etc..) on a web page are allowed to be requested from another domain outside the domain from which the first resource was served

- When a web page requests a resource from a different domain, the browser uses CORS to determine whether the request should be allowed.

- This helps prevent potentially malicious scriopts on one site from accessing sensitive information on another site without permission.

### logic

- operates by the web server including specific HTTP headers in tis responses to indicate which origins (domain) are permitted to access its resources.

- if requesting domain matches the allowed domains specified in the server's CORS policy, browser allows the request to proceed.

- can configure CORS policies on the server-side to specif which origins are permitted to access their resources.