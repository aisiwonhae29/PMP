/**
 * * a01: Loop
 */


// # case 1: forEach

function test1(){
    let a = [1,2,3,4,5];
    
    a.forEach((el, n) => {
        console.log(el + ':' + 'element')
        console.log(n + ':' + 'number')
    
    })
}


// # case 2: while

function test2(){
    let num = 1;
    while ( num <= 5){
        console.log(num);
        num++;
    }
}