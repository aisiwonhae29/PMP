var http = require('http');
var fs = require('fs');
var url = require('url');

const server = http.createServer((req, res)=>{

    let pathname = url.parse(req.url).pathname;
    console.log(`Request for ${pathname} received`);

    if(pathname == '/'){
        pathname = '/index.html';
    }else if(pathname == '/contact.html'){
        pathname = '/contact.html';
    }else{
        pathname = '/about.html';
    }

    fs.readFile(pathname.substr(1), (err, data) =>{
        if(err){
            console.error(err);

            res.writeHead(404, { 'Content-Type' : 'text/plain'});
            res.write('404 - file not found');
        } else {
            console.log(pathname);
            console.log(pathname.substr(1));
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write(data.toString());
        };
        res.end();
    });
});

server.listen(3000);

console.log('server running on port 3000');
