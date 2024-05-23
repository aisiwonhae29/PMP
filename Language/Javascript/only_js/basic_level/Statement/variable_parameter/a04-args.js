/** 
 * * a29: args
 * 
 * # Powershell style
 * 
 * - $env:ARG1="value1"
 * - $env:ARG2="value2"
 * - node jsfile.js
 * 
 * # UNIX-based systems
 * 
 * - ARG1=value1 ARG2=value2 node jsfile.js
 */ 

let arg1 = process.env.ARG1;
let arg2 = process.env.ARG2;

console.log(`argument 1: ${arg1}`);
console.log(`argument 2: ${arg2}`);