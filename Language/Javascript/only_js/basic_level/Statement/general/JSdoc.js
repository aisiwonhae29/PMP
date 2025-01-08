/**
 * * JSdoc: It's a documentation standard for JS that allows developers to annotate their code.
 * 
 * # command
 * 
 * - jsdoc [filename.js] -d docs
 */

/**
 * Brief description of the function
 * 
 * @param {Type} paramName: Description of the parameter
 * @returns {Type}: Description of the return value.
 */

function exampleFunc(paramName){

}

/**
 * Multiple parameters expected.
 * 
 * @param {number} num
 * @param {string} str
 * @param {Array<number|string>} arr
 * @throws {TypeError}
 * @returns {string}
 */

function multiParam(num, str, arr){
    if(typeof str != "string"){
        throw new TypeError("The type is ");
    }
    return "finally";
}

/**
 * The description about constant.
 * @constant {number} fixedNum
 */
const fixedNum = 100;

/**
 * A list of alphabet.
 * @type {string[]}
 */
let alphabet = ["a", "b", "c"]

/**
 * The description about class.
 */
class nonamed{
    
    /**
     * Constructor.
     * @param {string} name
     * @param {number} number
     */
    constructor(name, number){
        this.name = name;
        this.number = number;
    }

    /**
     * Describe the function
     * @returns {string}
     */
    result(){
        return "hello, worlds"
    }
}