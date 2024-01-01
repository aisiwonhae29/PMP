// path(): control path module
let path = require('path');


// case 1: simple function 

let filepath = "/users/admin/website/index.html";

console.log(path.basename(filepath));
console.log(path.dirname(filepath));
console.log(path.isAbsolute(filepath));
console.log(path.extname(filepath));
console.log(path.join(filepath, "test" , "" , "test2"));
// console.log(path.(filepath));

// case 2: format

let test_01 = path.format({
    root: "/ignored/root/",
    dir: "/home/user/personal",
    base: "details.txt",
});
console.log("test_01: ", test_01);

let test_02 = path.format({
    root: "/",
    base: "game/dat",
    ext: ".noextension",
})
console.log("test_02: ", test_02);

let test_03 = path.format({
    root: "/images/",
    name: "image",
    ext: ".jpg",
})
console.log("test_03: ", test_03);