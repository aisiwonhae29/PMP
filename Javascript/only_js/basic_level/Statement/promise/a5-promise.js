let p = new Promise((resolve) => {
    resolve(1);
})

let r = p.then(val => val +2).then(val => val +3).then(val=>val+4).then(val=> console.log(val));

