/**   
 * * &&: Logical AND operator
 * 
 * ! usage
 * 
 * - 1. Default Assignment
 * - 2. Ensuring Required Values
 * - 3. Chaining conditions
 */

// # case 1: 

function defaultAssignment() {
    let condition   = 'this is the test';
    let word        = 'my name is siwon';
    let test        = condition && word;
    
    console.log(test);
}

// # case 2:

function ensuringRequiredValue(){
    let port    = 3000;
    let confirm = 3000;
    let test    = port && confirm;

    console.log(test);
}

// # case 3:

function chainingCondition(){
    function work(){
        console.log('The flow has been permitted.');
    }

    let condition1  = true;
    let condition2  = 10>4;

    let test        = condition1 && condition2 && work();
}