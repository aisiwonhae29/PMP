// * a24: chaining
// in synchronous environment, then function doesn't make sense
function test1() {
    console.log(' this is test1() chain');
    return 'this is test2() chain';
}
function test2(string){
    console.log(string);
}
test1()
