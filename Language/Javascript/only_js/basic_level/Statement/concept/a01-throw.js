// a19: throw

// 'catch block' prevent the program break
function test1() {
  function a() {
    console.log(123);
    throw new Error("Hello, Error");
  }
                      
  try {
    a();
  } catch (e) {
    console.error(e);
  }

  console.log(123);
}

// User-defined error

function test2(){
    function isNumeric(x){
      return ["number","bigint"].includes(typeof x);
    }

    function sum(...values){
      if (!values.every(isNumeric)){
        throw new TypeError("can only add numbers");
      }
      return values.reduce((a,b) => a+b);
    }
    console.log(sum(1,2,3));
    try {
      sum(1, 2);
    } catch (e){
      console.error(e);
    }
}

// Throwing an existing object