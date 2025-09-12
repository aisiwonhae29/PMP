/**
 * a03: Reference management || pointer-like behavior
 * 
 * # about
 * 
 * - In js and node js, don't expose memory addresses, they work with object references.
 * 
 * # Address
 * 
 * !1. High-level language
 * 
 * - In high-level languages, variables that hold non-primitive types store references to their memory locations, not the actual values.
 * 
 * !2. Low-level language
 * 
 * - In low-level languages, pointers are variables that store memory addresses directly, to allowing the developerts manipulating memory explicitly.
 * 
 * 
 */



let map = new Map();
let obj = { name: "Alice" };

map.set(obj, "Engineer");
obj = null; // The object is still strongly referenced by the Map
// obj["name"] = "sss"

console.log([...map.keys()]); // Output: [{ name: "Alice" }]