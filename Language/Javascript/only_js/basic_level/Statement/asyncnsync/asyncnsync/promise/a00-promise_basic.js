/**
 * a00: promise basic
 * 
 * # difference of async and callback
 * 
 * - type callback  : afunction(a, b, err)
 * - type async     : afunction(a).then(b, err)
 *  */ 

let b = 1;

function a(){
    for(let i =0; i<b; i++){
        
    }
}

/**
 * # deeply nested Promise poped first.
 * 
 * (promise D, (promise C, (promise B, (promise A)))) > (promise D, (promise C, (promise B)))
 * 
 */