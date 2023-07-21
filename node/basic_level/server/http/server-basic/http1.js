var http = require('http');
var url = require('url');
var fs = require('fs');

const server = http.createServer((req, res)=>{
    let pathname = url.parse(req.url).pathname;

    console.log(`Request for ${pathname} received`);

    if (pathname == '/'){
        pathname = '/index.html';
    }else if (pathname == '/contact'){
        pathname = 'contact.html'
    }
});

