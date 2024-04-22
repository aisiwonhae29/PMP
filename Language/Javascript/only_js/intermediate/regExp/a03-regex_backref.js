/* # Chapter 3. Backreference */

//usage

console.log(/(b)\2/i.test("b-bbb"));
console.log(/(a)\7/.test("a\x07"));
console.log(/(?:a|(b))\1c/.test("ac"));
console.log(/(a+)-(b+)\2/i.test("aaaaaa-bb"));
