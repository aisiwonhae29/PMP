/**
 * * a00 - Map object
 * 
 * # about
 * 
 * - Map object is consisted with key-value pairs 
 * 
 * # difference with json
 * 
 * - difference with json is more flexible with use key().
 * 
 * # index
 * 
 * !1. Creating a Map
 * !2. Set() set elements
 * !3. get() get value with key
 * !4: has() chk existence of key
 */


// case 1: Creating a Map

function a01_case(){
    let nmp = new Map();
    console.log(nmp)
}

// case 2: Set() set elements

function a02_case(){
    let nmp = new Map();
    nmp.set('key1', 'value1');
    nmp.set(2, 'value2');
    nmp.set({}, 'value3');
    console.log(nmp)
}

// case 3: get() get value with key

function a03_case(){
    let nmp = new Map();
    nmp.set('key1', 'value1');
    nmp.set(2, 'value2');
    nmp.set({}, 'value3');
    console.log(nmp.get('key1'));
    console.log(nmp.get(2));
}


// case 4: has() chk existence of key

function a04_case(){
    let nmp = new Map();
    nmp.set('key1', 'value1');
    nmp.set(2, 'value2');
    console.log(nmp.has('key1'));
}

