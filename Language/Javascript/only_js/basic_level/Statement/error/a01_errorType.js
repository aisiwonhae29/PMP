/**
 * * a01: errorType
 * 
 * # object
 * 
 * - Throw error and define the which error occured.
 */

try{
    throw new TypeError("This is the target Error");
} catch (err) {
    if (err instanceof SyntaxError){
        console.error('SyntaxError: wrong....');
    } else if( err instanceof TypeError){
        console.error('kuwaiii...: ', err.message);
    } else {
        console.error('.....');
    }
}