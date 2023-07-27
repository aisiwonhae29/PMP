/*

    promise 

    the basic code structure is 
    >> const promise = new Promise((resolve, reject) => {
        set Timeout((=> resolve("Done!"), 2000));
    });

    From my opinion at new Promise, resolve parameter store =>{} < this object
    resolve() store value, and we make it with this

    and variable with then make process
*/

// var promise = new Promise((resolve, reject)=>{
//     resolve(2222);
// })
// console.log(promise);
// promise.then(val=>{
//     console.log(val);
// })

var promise = new Promise((resolve, reject) =>{
    resolve(2202);
})
console.log(promise);
promise.then(val =>{
    console.log(val);
})
