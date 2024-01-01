// glob - file globbing - matching file patterns

// case 1:

let glob = require('glob');

glob('*.js', function (err, files){
    if (err) {
        console.log('error: ' , err);
        return;
    }
    console.log(files);
    files.forEach(function (file) {
        console.log(file);
    })    
})