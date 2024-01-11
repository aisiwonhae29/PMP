/**
 * * a01: promise_constructor
 * 
 * > qutoe: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#executor 
 * 
 * - It is primarily used to wrap callback-based APIs that do not already support promises.
 * - promise is also constructor function, so it constructed with new command.
 * 
 * # Return value
 * 
 * - when called via new, the 'promise' constructor returns a promise object
 * - The promise object will become resolved when either of the functions 'resolveFunc' or 'rejectFunc' are invoked
 * 
 * # remarks
 * 
 * - we can't access them after the promise is constructed
 * - If we want to construct the promise before deciding how to resolve it, you can use the Promise.withReslovers() method instead, which exposes the resolve and reject functions.
 */

// # case 1:

function test1(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            // resolve('foo');
            // throw new Error('foo');
        }, 500)
    })
    promise.then((rs)=>{
        console.log(rs);
        return 123;
    })
    .catch((err)=>{
        console.error(err)
    })
}

// # case 2:

function test2(){
    let readFilePromise = (path)=>
        new Promise((resolve, reject) => {
            readFile(path, (error, result) =>{
                if(result){
                    resolve(result);
                }else{
                    reject(error);
                }
            })
        })
    
    readFilePromise("./a00-promise_basic.js")
			.then((result) => console.log(result))
			.catch((error) => console.error("Failed to read data"));
}

// # case 3: how much last in then env.
// * > without return value, just affect on first thenable function

function test3(){
    let promise = new Promise((resolve, reject) =>{
        resolve (3);
    })

    promise.then((value)=>{
        return 3
    }).then((value1)=>{
        console.log()
    })
}

// # case 4: resolve function
// ! error is not entirely same with reject function
function test4(){
    
    let thenable = new Promise((resolve, reject)=>{
        resolve(3)
    })
    // let thenable = ;

    // type a
    // let promise_a = new Promise((resolve, reject)=>{
    //     resolve(thenable)
    // })

    // type b
    let promise_b = new Promise((resolve, reject)=>{
        reject(new Error('hello worlds'))
        thenable.then((value)=> resolve(value), (reason) => reject(new Error('hello worlds')));
        reject (e.message);
    })
    promise_b.catch((error)=>{
        console.error(error)
    })
    // type a and type b is same effect

}

test4()
