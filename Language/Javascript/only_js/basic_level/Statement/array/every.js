/**
 * * a28: array.every();
 * 
 * # description
 * 
 * - define the whole array element meet the conditions.
 */

// # case 1: basic syntax

// - Create array

let test = [100, 90, 80, 88, 90];

// - Create test Function

function PassFail(score){
    return score > 60;
}

// - check the result

console.log(test.every(PassFail));