/**
 * * node rest client
 * 
 * - This module provides an easy-to-use interface for making HTTP requests from a NODE.js application to RESTful web services.
 * - Light wegihted, Promise-based client that simplifies the process of making HTTP requets and handling responses.
 */

const Client = require('node-rest-client').Client;
const client = new Client();

client.get("https://google.com", function(data, response) {
    console.log(data);
    console.log(response);
})