/**
 * * a03: json iterate
 */

const obj = {
    x:"zzcc",
    z:"sdsd",
    b: "sss",
    a: "ccc",
    33: "xcc",
    "2": "val",
    key1: "value1",
    key2: "value2",
    key3: "value3"
};

// # case 1: iterate the whole json key. ex) for ( let key in obj ){ ~~ }
function a01_case(){
    for ( let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(key);
        }
    }
}

// # case 2: iterate the whole json key. ex) Object.keys(obj).forEach((el) => ~~)
// - The Object.keys(obj) has an order logic that arrange from number to string. ex) [1. 2. 100, "z", "c", "a" ..]
function a02_case(){
    Object.keys(obj).forEach(el => {
        console.log(el);
    })
}


a02_case();
