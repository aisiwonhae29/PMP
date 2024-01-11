// a02: promise sequence order

function test1() {
	let test1 = new Promise((resolve, reject) => {
    console.log("promise is fast!");
		resolve('promise');
	});
  test1.then((val)=> console.log(val))
	console.log("no normal object is first!");
  for(let i=0; i<1000; i++){
    if(i==999){
      console.log('stack is almost cleared');
    }
  }
}

test1();

function test2(){
  
  

  console.log("no normal object is first!");

}