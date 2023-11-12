// a0-sync-test 
// test the start sequence of code


// case 1
// sequence not skip for statement

console.log('first sequence');
for(let i = 0; i<10000004; i++){
    if(i==10000000){
        console.log('finished!!')
    }
}
console.log('final sequence');


//case 2
// also same with abouve test

function test_1(){
    console.log('first sequence');
}

function test_2(){
    for(let i=0; i<10000000002; i++){
        if(i==10000000000){
            console.log('finished!!');
        }
    }
}

function test_3(){
    console.log('final sequence');
}

test_1();
test_2();
test_3();