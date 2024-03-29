let async = require('async');
async.parallel([
    function(callback){
        setTimeout(() => {
            console.log("I'm 1 sec")
        }, 1000);
        let e = new Error("error");
        throw e;
    },
    function(callback){
        setTimeout(() => {
            console.log("I'm 2 sec")
        }, 2000);
    }, 
], function(err, results){
    if (err){
        console.err(err);
        console.err('kikiki fuck off maggot!')
    }else{
        console.log('Results:', results);
    }
})
