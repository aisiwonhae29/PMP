var http = require('http');

http.createServer((req, res)=>{
    res.write('say hi');
    res.end();
}).listen(3000);