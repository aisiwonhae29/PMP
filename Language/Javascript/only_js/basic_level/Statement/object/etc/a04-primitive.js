/**
 * * a04: primitive type
 * 
 * # about
 * 
 * !1. primitive type     : This refers to a basic data type that is not an object and has no methods.
 *   - Immutable    : We can't change value, but create new value.
 *   - Comparable   : We can compare with each reference's value.
 * 
 * !2. non-primitive type : This refers to data types that are not basic and can store collections of values or more complex data.
 *   - Mutable      : non-p types are mutable(changable) 
 *   - This is stored and compared by reference rather than by value. ex) a={c:1} b={c:1} => a!=b == true
 * 
 * # store logic
 * 
 * !1. primitive type
 *   - Stored in stack memory
 *   - Follow the stack like array rules.(last in first out)
 *   - Fixed size
 *   - independant variables
 *   - Fast access (Stack memory characteristic)
 * 
 * !2. non-primitive type
 *   - Stored in heap memory
 *   - memory layout => let obj1 = { key: 'value' }; let obj2 = obj1; obj2.key = 'new value';
 *      - stack : obj1  --> Heap memory address 0x001
 *      - Heap  : 0x001 --> {key: 'value' } --> modified to {key: 'new value' }
 * 
 * # index
 * 
 * !1. primitive
 * !2. non-primitive
 */


// # primitive

let string  = "hi";
let num     = 123;
let bool    = true;
let unde    = undefined;
let nu      = null;
let symbol  = Symbol("sym");

// # non primitive

let obj     = { name: 'alice', age: 25};
let arr     = [1, 2, 3];
function great() { console.log("hi") };
let now     = new Date();
let set     = new Set([1,2,3,4,5,]);
let map     = new Map();

