// glob - file globbing - matching file patterns

// case 1: glob async test

// const {
//     glob,
//     globSync,
//     globStream,
//     globStreamSync,
//     Glob
// } = require("glob");

let glob = require('glob');
async function a(){
    await glob('el/**.txt', function(err, files){
        if (err){
            console.error(err);
            return;
        }
    
        console.log(files);
    })
}

// case 2: glob sync
console.log(glob.sync('el/**.txt'))


console.log(123)