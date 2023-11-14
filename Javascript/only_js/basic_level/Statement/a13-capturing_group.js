// a13 capturing group

/* description
 
# A part of a pattern can be enclosed in parentheses (...). called with 'capturing group'.
# after parentheses we can apply quantifier after the parentheses.

*/


// case 1: /(go)+/ig  > means check 'go' patterned word not only first case of word.

let re_01 = /(go)+/g;

console.log('gogogogo go-go gogo go/go'.match(re_01))


// case 2: 

let regexp = /(\w+\.)+\w+/g;

console.log(("site.com my.site.com").match(regexp));
 
