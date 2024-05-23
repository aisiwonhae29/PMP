// a15 - Map() object

/* Map object is consisted with key-value pairs 

    difference with json is more flexible with use key.
*/

// Creating a Map
let nmp = new Map();

// case 1: Set() set elements

nmp.set('key1', 'value1');
nmp.set(2, 'value2');
nmp.set({}, 'value3');

console.log(nmp)


// case 2: get() get value with key

console.log(nmp.get('key1'));
console.log(nmp.get(2));


// case 3: has() chk existence of key

console.log(nmp.has(3))
