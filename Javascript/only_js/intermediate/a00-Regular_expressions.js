// a00 - Regular expressions

// This part indicates about Regular expressions
// link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions

/*  # Chapter 1. Regex flags

    d: Generate indices for substring matches
    g: Global search
    i: Case-insensitive search
    m: Allows ^ and $ to match newline characters
    s: Allows . to match newline characters
    u: 'unicode' treat a pattern as a sequence of Unicode code points
    v: An upgrade to the u mode with more Unicode features
    y: Perform a "sticky" search that matches starting at the current position in the target string
    / ~ /: the start and end of regex

    ex) /(...)/g
*/


/*  # Chapter 2. Regex Function*/

    let C2_01_txt = 'hello world, hello korea';
    let C2_01_regex = /hello (\w+)/
    

    /* exec */      console.log(C2_01_regex.exec(C2_01_txt))
    /* test */      console.log(C2_01_regex.test(C2_01_txt))
    /* match */     console.log(C2_01_txt.match(C2_01_regex))
    /* replace */   console.log(C2_01_txt.replace(C2_01_regex, 'hi'))
    /* split */     console.log(C2_01_txt.split(C2_01_regex))


/* # Chapter 3. Backreference */

//usage
console.log(/(b)\2/i.test('b-bbb'));
console.log(/(a)\7/.test('a\x07'))
console.log(/(?:a|(b))\1c/.test('ac'))
console.log(/(a+)-(b+)\2/i.test('aaaaaa-bb'));


/* # Chapter 4. Character class escape 
   
   \d, \D: Matches any digit character. Equivalent to [0-9]
   \w, \W: Mayches any word character includes letters (A-Z, a-z), numbers (0-9), and underscore(_) if Unicode aware and i flag 
   \s, \S: Mayches any whitespace or line terminator(e.g. \n) character

   ex) str.split(/\w/)
*/

/* # Chapter 5. Character class: [...]. [^...]

    [],  [abc],  [A-Z]
    [^], [^abc], [^A-Z]
    @ in [A-Z] case, each character's type is unicode integer type. first One must be smaller than second one.
    @ [a-zA-Z0-9] indicates all characters

    parameters: Can be a single character, another square-bracket-enclosed character class, a character class escape, a Unicode character class escape, or string sing the \q sintax

    @ 'v' mode only 
      [operand1&&operand2] [operand1--operand2] [\q{substring}]
*/ 

/* @@ Remarks

    theme 1 [exec function finds word by word]
      ex) a.exec(test) > a.exec(test) > in here if any matches with patterns skipped with words

    theme 2 [Unicode character class escape]
      ex) \p{...}, \P{...}

    theme 3 Unicode 
      Content: Unicode is Hexadecimal 
      Usage: '\u41'
      ex) {30:0} {39:9} 
          {41:A} {5A:Z} 
*/

// case 1: /(go)+/ig  > means check 'go' patterned word not only first case of word.

let re_01 = /(go)+/g;

console.log('gogogogo go-go gogo go/go gooogo'.match(re_01))
console.log('gogogogo go-go gogo go/go gooogo'.replace(re_01))

// case 2: 

let re_02 = /(\w+\.)+\w+/g;

console.log(("site.com my.site.com").match(re_02));
 
