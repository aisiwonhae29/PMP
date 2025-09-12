// * Date Module
let now = new Date();


// # case 1: generate date modules.

function test1(){
	let a01 = new Date();
	let a02 = new Date("2011-11-11T11:11:11Z");
	let a03 = new Date(2022, 22, 22, 22, 22, 22); // [year, month, day, hour, minute, second, millisecond]
    let a04 = new Date('2033-03-03');
}

// # case 2: Getting parts of a date.

function test2(){
    let year    = now.getFullYear();
    let month   = now.getMonth();
    let date    = now.getDate();
    let hours   = now.getHours();
    let minutes = now.getMinutes();
    let mili    = now.getMilliseconds();
    let day     = now.getDay();

    console.log("today is" + year + month );
}

// # case 3: Setting parts of a date.

function test3(){
    now.setFullYear(3000);
    now.setMonth(5);
    now.setDate(10);
    now.setHours(5);
    now.setMinutes(40);
    console.log(now);
}

// # case 4: Date Comparisons

function test4(){
    let a01 = new Date("2020-12-19");
    let a02 = new Date("2025-12-30");
    console.log(a01<a02); // true
};

// # case 5: Generate the 

function test5(){
    let a01 = Date.now();

    console.log(a01)
}

// # case 6: offset to korean time

function test6(){
    let korea = new Date(Date.now()+9*60*60000);
    console.log(korea)
}