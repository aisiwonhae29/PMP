let glob = require("../../Language/Javascript/node/node_modules/glob");

let path = process.cwd() + "/**/**.md";

let globFind    = glob.GlobSync(path);
let array       = globFind.found;
let files       = [];

array.forEach(el => {
    let tmpArr  = el.split('/');
    let file    = tmpArr.splice(0, tmpArr.length-2)
    console.log(" - " + tmpArr[0] + tmpArr[1])
});

