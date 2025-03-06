/**
 * * a01 - Map iterator
 * 
 * # index
 * 
 * !1. keys() - iterate keys
 * !2. values() - iterate values
 * !3. entries() - iterate key-value pairs
 * !4. Symbol.iterator - iterate key-value pairs
 * !5. Destructing with - Map Iterator
 * 
 */
let map = init();
// a01_case();
// a02_case();
// a03_case();
// a04_case();
a05_case();
function init(){
    let map = new Map();
    
    map.set('a', 1);
    map.set('b', 2);
    map.set('c', 3);
    map.set(1, 'one');
    map.set(true, 'boolean');
    map.set({ key: 'objectKey' }, [1, 2, 3]);
    map.set(Symbol('symbolKey'), { nested: 'object' });
    map.set(function() {}, 'function');
    return map;
}

// case 1: keys() - iterate keys

function a01_case(){
    for (let key of map.keys()){
        console.log(key);
    }
};

// case 2: values() - iterate values

function a02_case(){
    for (let value of map.values()){
        console.log(value);
    }
}

// case 3: entries() - iterate key-value pairs

function a03_case(){
    for (let entry of map.entries()){
        console.log(entry);
    }
}

// case 4: Symbol.iterator - iterate key-value pairs

function a04_case(type='keys'){
    switch(type){
        case 'keys':
            const keys = map.keys();
            console.log(keys.next());
            console.log(keys.next());
            return keys;
        case 'values':
            const values = map.values();
            console.log(values.next());
            console.log(values.next());
            return values;
        case 'entries':
            const entries = map.entries();
            console.log(entries.next());
            console.log(entries.next());
            return entries;
        default: 
            break;
    }
}

// case 5: Destructing with - Map Iterator

function a05_case(type='keys'){
    let map = a04_case(type);
    for (let [key, value] of map){
        console.log(key, value);
    }
}