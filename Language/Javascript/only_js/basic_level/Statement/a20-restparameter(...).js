// a20: rest parameter(...values)

// rest parameter makes multi parameter as array
function test(...values){
    console.log(values)
    return values;
}

test(1,2,3,4,5).forEach(el=>{
    console.log(el)
})