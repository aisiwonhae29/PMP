# https

### about

### code

\# csms

```
let https = require('https');

let intermediateCertificate = fs.readFileSync('newChainCert.pem', 'utf8);
let option = {
    key         : fs.readFilesync('key.pem', 'utf8'), // read server's cert file.
    cert        : fs.readFileSync('cert.pem', 'utf8'),
    ca          : [intermediateCertificate],
    passphrase  : 'password'
}

let secureHttp = https.createServer(options, app);
secureHttp.listen(443);

http.createServer(function (req, res){
    res.writeHead(301, { 'Location': 'https://' + req.headers['host'] + req.url});
    res.end();
}).listen(80);
```