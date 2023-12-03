// module - file system

let fs = require('fs');

/* # Chapter 1. read                                                        */

// Asynchronously
fs.readFile('file.txt', 'utf8', (err,data)=>{
    if(err){
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:',data);
})

// Synchronously
try{
    const data = fs.readFileSync('file.txt', 'utf8');
}catch(err){
    console.error('Error reading file:', err);
}

/* # Chapter 2. readdir - handle directory                                  */

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

/* # Chapter 3. file Creation */

let content = 'Hello, this is the content of the file!';

try{
    fs.writeFileSync('fs.txt', content);
    console.log('File created synchronously');
} catch(err){
    console.error('Error createing file:', err);
}