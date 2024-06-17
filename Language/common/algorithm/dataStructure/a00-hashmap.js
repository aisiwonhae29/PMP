/**
 * * a00: hashmap
 * 
 * # Hashmap is the "key-value" pairs object and remebers the original insertion order of the keys.
 * 
 * ! Method list
 * 
 * - set()
 * - get()
 * - delete()
 * - has()
 * - size()
 * - forEach || for .. of
 */

// Generate hash map object.

let map = new Map();

// Set hash map object.

map.set('name', 'Siwon');
map.set('age', 34);

// get hash map object.

console.log(map.get('name'));

// delete hash map object.

console.log(map.delete('name'));

// checking existence

console.log(map.has('name'));

// Getting the size of hash map object

console.log(map.size);

// Clearing the map

map.clear();