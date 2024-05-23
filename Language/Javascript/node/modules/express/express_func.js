/**
 * * a22: request & response
 * 
 * - request    : deal with client > server logic
 *              : represents the HTTP request and contains information about the incoming request, such as the request headers, parameters, query strings, and the request body.
 * 
 * 
 * - response   : deal with server > client logic
 *              : represents the HTTP response that Express will send to the client.
 * 
 */

let express = require('express');
let app = new express();

app.get('/', (req, res) =>{
    req.params;     // object containing route parameters
    req.query;      // object containing the parsed query parameters
    req.body;       // object containing the parsed request body
    req.headers;    // object containing the request headers
    req.method;     // HTTP method of the request
    req.url;        // The URL of the request
    req.cookies;    // object containing the cookies sent by the client
})

app.get('/', (req, res)=>{
    res.send();     // sends the HTTP response
    res.json();     // sends a JSON response
    res.status();   // sets the HTTP status code for the response
    res.redirect(); // Redirects the client to a different URL
    res.render();   // Renders a view template
    res.cookie();   // sets a cookie in the response.
})