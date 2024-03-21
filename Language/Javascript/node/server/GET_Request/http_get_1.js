const http = require('http');

const options = {
    hostname: 'webcode.me',
    port: 80,
    path: '/',
    method: 'GET'
};

http.createServer((req, res)=>{
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', (d)=>{
        process.stdout.write(d);
    });
});

req.on('error', (err) => {
    console.log(err);
})

req.end();