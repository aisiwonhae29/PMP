// module - file system

let fs = require('fs');

/* # Chapter 1. read
 */

/* # Chapter 2. readdir - handle directory */

let dir_pth = 'C:\\project\\android\\webapp_push-main\\AppWeb\\eveco';

fs.readdir(dir_pth, (err, files) => {
    if(err){
        console.error(err);
        return;
    }

    console.log('Files in the directory:');
    files.forEach(file => {
        console.log(file)
    })
})