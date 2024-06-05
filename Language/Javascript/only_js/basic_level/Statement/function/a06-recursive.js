/**
 * * a06: recursive
 * 
 * ! Three parts of a Recursive function
 * 
 * - 1. The function definition
 * - 2. The base condition
 * - 3. The recursive call
 */

function recursiveFunc(n){
    if(n > 5){  // base condition
        return console.log("this is over");
    }
    console.log(`This number is ${n}`)
    recursiveFunc(n+1)
}

recursiveFunc(0);