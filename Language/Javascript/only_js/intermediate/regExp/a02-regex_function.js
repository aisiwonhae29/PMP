// * # Chapter 2. Regex Function

let a01_txt = "hello world, hello korea";
let b01_reg = /hello (\w+)/;
function test_reg(log){
    console.log(log);
}

/**
 * # case 01: $(string).exec($(pattern))
 * 
 * - The exec() method of RegExp instances executes a search with regex match in a specified string and returns a result array, or null
 */

console.log(b01_reg.exec(a01_txt));


/**
 * # case 02: $(string).test($(pattern))
 * 
 */ 

console.log(C2_01_regex.test(C2_01_txt));

/**
 * # case 03: match */ console.log(C2_01_txt.match(C2_01_regex));
/* replace */ console.log(C2_01_txt.replace(C2_01_regex, "hi"));
/* split */ console.log(C2_01_txt.split(C2_01_regex));
