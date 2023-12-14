// a05-fs The file system
let fs = require('fs');

fs.readFile('a04-eval.js', function (err, data){
    if(err){
        console.err(err);
    }

    console.log(data.toString())
})