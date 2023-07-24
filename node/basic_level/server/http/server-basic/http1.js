var http = require('http');
var fs = require('fs');
var url = require('url')

var server = http.createServer((req,res)=>{
    let pathname = url.parse(req.url).pathname;

    console.log(`Request for ${pathname} received`);

    if (pathnameme == '/'){
        pathname = '/inde.html';
    }
})