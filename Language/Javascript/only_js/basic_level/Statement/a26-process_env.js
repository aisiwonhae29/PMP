/**
 * * a26: process.env
 * 
 * - process.env is environment variables using process.env object
 * - affects only the current Node.js process and any child processes spawned by it.
 * - process is the global object.
 */

process.env.test = "hello ,worlds!";

console.log(process.env.test);
console.log(process.env.HOME);