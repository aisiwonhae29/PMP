const http = require('http');
const url = require('url');

// http.createServer((req, res) =>{

//     let q = url.parse(req.url, true).query;

//     let msg = `${q.name} is ${q.age} years old`;

//     res.write(msg);
//     res.end();
// }).listen(3000);

// console.log('server running on port 3000');

var server = http.createServer(a);

function a(req, res){
    let q = url.parse(req.url, true).query;

    let msg = `${q.name} is ${q.age} years old`;

    res.write(msg);
    res.end();
} 

server.listen(3000);