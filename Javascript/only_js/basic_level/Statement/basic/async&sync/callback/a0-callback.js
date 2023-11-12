// a0-callback 
// variable act like function

function cb(cb){
    cb()
}

function test(){
    console.log('***********************\n'+
                'callback function test//\n'+
                '************************');
}

cb(test);