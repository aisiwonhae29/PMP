const http = require('http');
options = {
    host: 'webcode.me',
    port: 80,
    path: '/',
    method: 'GET'
};

const req = http.request(options, (res)=>{
    res.on('data', (D) =>{
        process.stdout.write(D);
    });
});

req.end();