/**
 * * a01: string control
 * 
 * # index
 * 
 * - 1. case 1: split()                                 [str]
 * - 2. case 2: replace()                               [str, target, replace]
 * - 3. case 3: toUpperCase(str) && toLowerCase()       [str]
 * - 4. case 4: trim() && trimStart() && trimEnd()      [str]
 * - 5. case 5: slice()                                 [str]
 * - 6. case 6: substring()                             [str]
 * - 7. case 7: concat()                                [str]
 * - 8. case 8: includes() && startsWith() && endsWith()[str]
 * - 9. case 9: indexOf() && lastIndexOf()              [str, target]
 * - 10. case 10: repeat()                              [str]
 * - 11. case 11: search()                              [str, target]
 * - 12. case 12: charAt() && charCodeAt()              [str]
 */

// # validation

let str = "hello World";
let target = "W";
a11_case(str, target);

// # case 1: split()

function a01_case(str){
    let arr = str.split(" ");
    console.log(arr);
    // [ 'hello', 'world' ]
}

// # case 2: replace()

function a02_case(str, target, replace){
    let new_str = str.replace(target, replace);
    console.log(new_str);
    // hello earth
}

// # case 3: toUpperCase() && toLowerCase()

function a03_case(str){
    let up_case = str.toUpperCase();
    console.log(up_case);

    let lw_case = up_case.toLowerCase();
    console.log(lw_case);
}

// # case 4: trim() && trimStart() && trimEnd()

function a04_case(str){
    console.log(str.trim());
    console.log(str.trimStart());
    console.log(str.trimEnd());
    // hello world
    // hello world   
    //
}

// # case 5: slice() - Extracts a portion of a string and returns it as a new string

function a05_case(str){
    console.log(str.slice(0, 5));
    console.log(str.slice(-5));
}

// # case 6: substring() - Similar with slice(), but it does not accept negative index

function a06_case(str){
    console.log(str.substring(0, 5));
    console.log(str.substring(6));
}

// # case 7: concat()

// # case 8: includes() && startsWith() && endsWith()

// # case 9: indexOf() && lastIndexOf() - Finds the index of the first/last occurrence.

function a09_case(str, target){
    console.log(str.indexOf(target));
    console.log(str.lastIndexOf(target));
}

// # case 10: repeat()

function a10_case(str){
    console.log(str.repeat(3));
}

// # case 11: search() - similar with indexOf() but this permission to use the regex

function a11_case(str, target){
    console.log(str.search(target));
}

// # case 12: charAt() && charCodeAt()

function a11_case(str){
    console.log(str.charAt(3));
    console.log(str.charCodeAt(3));
}