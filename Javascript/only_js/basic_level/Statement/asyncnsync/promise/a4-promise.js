let promise = new Promise((resolve, reject)=>{
    let a=2;

    if(a==1){
        resolve(22)
    }

    // if(a==1){
    //     resolve(2131);
    // }else{
    //     reject('eee')
    // }

    
})
doWork().catch(err=>{
    console.log(err);
});
async function doWork(){
    let res = await promise;
    console.log(res);
}





