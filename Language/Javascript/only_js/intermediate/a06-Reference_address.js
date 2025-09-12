/**
 * * a06: Reference address
 * 
 * # index
 * 
 * !1. is org object modified when inner objects are modified?
 */

// # case 1

function a01_case(){
    const json = { lol : {alice: 'spider'}};
    function modify(json){
        json.alice = 'human';
        return json;
    };
    let test = modify(json.lol);

    console.log(json);
    console.log(test);
}

a01_case();