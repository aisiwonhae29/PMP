var http = require('http');
var url = http('url');

http.createServer((req, res) => {
    let q = url.parse(req.url, true).query;

    res.write(req.url);
    res.end();
}).listen(3000);