// a01 async_sequence_test

async function asy(){

    let promise = new Promise((resolve, reject) => {
        setTimeout(()=> resolve("done"), 2000)
    });
    let result = await promise;
    console.log(result)
}

asy();
