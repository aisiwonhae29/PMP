/**
 * * a02: fs with folder
 */

const fs        = require("fs").promises;
const fs_sync   = require("fs");
const path      = "./file_read";

// # case 1: Read files in a folder.

function testa01(type){
    if(type == 1){
        fs_sync.readdir(path, (err, files) => {
            if (err) {return console.error("Error reading folder:", err)};

        files.forEach((el) => {
            console.log(el);
        })
        })
    }else{
        let files = fs_sync.readdirSync(path);
        files.forEach((el) => {
					console.log(el);
        });
    }
}

// # case 2: Generate folder.

function test02(){
    let folderPath = "./file_read/test_fuck";v
    fs.mkdir(folderPath, {recursive: true}, err => {
        if (err) { return console.error('Error: ' + err)};
        console.log("folder created.");
    }).then((result) => {
        fs.writeFile("./file_read/test_fuck")
    });
}test02();

// # case 3: delete folder.

function test03(){
    
}