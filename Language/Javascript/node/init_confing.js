let fs = require('fs');
let readline = require('readline');

let ipchk = require('./modules/os/checkIp');
let ip = ipchk.getCurrentIP();

let loc1 = "172.28.80.1";
let root = "../../config_pool/";
let suffix = ".properties"
let route = {
    [loc1] : "home",
    "loc2": "company",
    "loc3": "starbuks"
}

let target ="";

if(!ip.startsWith("No active")){
    target = compPath(route[ip.split("/")[0]]);
}

fs.readFileSync(compPath, ())


function compPath(str){
    return root+str+suffix;
}