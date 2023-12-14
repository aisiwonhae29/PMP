var fs = require('fs');

fs.readdir(".", (err, filenames) =>{
    for (let i=0; i<filenames.length; i++){
        console.log(filenames[i]);
        fs.readFile(`./${filenames[i]}`, 'utf8', (err, data)=>{
            if(err){
                throw err;
            }
            console.log(data);
        })
    }
    console.log("Ready.");
})