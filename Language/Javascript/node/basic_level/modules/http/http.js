// * http module

// # case 1: basic http

function test1(){
const http = require('http');
http.createServer((req, res)=>{
    res.write('hello worlds');
    res. end();
}).listen(3000);

console.log('server listen on 3000');
}

// # case 2: 
