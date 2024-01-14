/**
 * * a03: async_usage
 *
 * # struncture
 *  
 * - async function wrap contents
 * - await keyword placed in async function
 * - more cleaner, because of abscence of thenable chain
 */


// # case 1:

function test1(){
    function promise(){
        return new Promise((resolve, reject)=>{
            resolve('resolved')
        })
    }

    async function asyncCall(){
        let a = await promise();
        console.log(a);
    }

    asyncCall();
} 

// # case 2: below three code same function

function test2(){
    async function foo1(){
        return 1;
    }

    function foo2(){
        return new Promise((resolve)=>{
            resolve(1);
        })
    }
    
    function foo3(){
        return Promise.resolve(1)
    }
}

// # case 3: async function behave different whether await is exists inside async function or not

function test3(){
    async function foo1(){
        await 1;
    }
    function foo2(){
        return Promise.resolve('1').then(() => undefined)  ;
    }
}

// # case 4: async throw Exception

function test4(){
    async function foo1(){
        const p2 = new Promise((_, reject)=>setTimeout(()=>{reject(new Error("hello worlds"))},500));
        const p1 = new Promise((resolve)=>setTimeout(()=>{resolve('hello worlds')},1000));
        const result = [ await p2, await p1];
    }
    function foo2(){
        let a = new Promise ((resolve)=>{

        })
    }
    foo1().catch((e)=>{console.error(e)})
}
// test4()
//# case 5: async function return test

function test5(){
    async function foo1(){
        const result1 = await new Promise(
            (resolve)=>{resolve(1)}
        )

        const result2 = await new Promise(
            (resolve)=>{resolve(2)}
        )
        return result2;
    }
    console.log(foo1());
}
// test5()