const http = require('http');

const request = http.request({hostname: 'webcode.me' }, (res) =>{
    res.setEncoding('utf8')
})