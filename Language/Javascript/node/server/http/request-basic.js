var http = require('http');
http.createServer((req, res)=>{
    if(req.url=='/a'){
        res.write(`<script>alert("er")</script>`);
        res.end();
    }else if(req.url=='/hi'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(req.url);
        res.end();
    }else{
        res.end('invalid page');
    }
}).listen(3000);