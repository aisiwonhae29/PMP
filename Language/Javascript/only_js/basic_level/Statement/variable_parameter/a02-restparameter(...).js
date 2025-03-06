/**
 * a02: rest parameter(...values)
 * 
 * # about
 * 
 * - rest parameter makes multi parameter as array
 * 
 * # index
 * 
 * !1. Handling parameter dynamically
 * !2. Spread operator
 * !3. Destructing with rest
 * !4. Rest operator
 */

// a01_case(1,2,3,4,5);
// a02_case();
// a03_case(2);
a04_case(1,2,3,4,5);

// #1. Rest operator

function a01_case(...values){
    console.log(values)
    return values;
}

// #2. Spread operator

function a02_case(){
    const arr1 = [1,2,3];
    const arr2 = [4,5,6];
    const combined = [...arr1, ...arr2];
    console.log(combined);
}

// #3. Destructing with rest

function a03_case(num){
    if(num === 1){
        const [first, ...rest ] = [1,2,3,4,5];
        console.log(first, rest);
    } else if(num === 2){
        const person = { name: 'james', age: 30, city: 'seoul' }
        const { name, ...rest } = person;

        console.log(name + " / "+ JSON.stringify(rest));
    }
}

// #4. Rest operator

function a04_case(...numbers){
    console.log(numbers.reduce((acc, current) => acc + current, 0));
}
