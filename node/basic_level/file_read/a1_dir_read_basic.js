const fs = require('fs');

readDirContentSync('..');
console.log("Ready.");
readDirContentSync('.');

function readDirContentSync(mydir){
    const filenames = fs.readdirSync(mydir);

    console.log(filenames);

    for(var i=0; i<filenames.length; i++){
        console.log(filenames[i])
    }
}