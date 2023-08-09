const fs = require('fs');

fs.readFile('./test11/test1.txt', 'utf8', (err, data)=>{
    if(err) throw err;
    console.log(data);
});