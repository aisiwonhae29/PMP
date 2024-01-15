/**
 * * a06: await
 *
 * - The await operator is used to wait for a Promise and get its fulfillment value.
 * - It can only be used inside an async function or at the top level of a module.
 * - never blocks the main thread and only defers execution of codem that actually depends on the result.
 */

// # case 1: basic shape ( await use fulfillment of Promise like object )

function test1() {
	function promise() {
		return new Promise((resolve, reject) => {
			resolve("hello worlds");
		});
	}
	async function async() {
		let a = await promise();
		console.log(a);
	}
	async();
}
// # case 2: Thenable objects resolve sequence

function test2() {
	async function async() {
		const thenable = {
			then(resolve, reject) {
				resolve("resolved!");
			},
		};
		console.log(await thenable);
	}
	async();
}
// test2()

// # case 3: test normal function can use await or not

function test3() {
	const a = {
		then(resolve, reject) {
			resolve("hello worlds");
		},
	};
	console.log(a);
	return a;
}

// test3().then(value=>{console.log(value)})

// # case 4: usecase 1
function test4() {
	function foo(name) {
		return new Promise((resolve) => {
			console.log(name, "start");
			console.log(name, "middle");
			console.log(name, "end");
			resolve();
		});
	}
	foo("jake");
}
// # case 5: usecase 2
function test5() {
	function foo(name) {
		return new Promise((resolve) => {
			console.log(name, "start");
			resolve(console.log(name, "middle"));
		}).then(() => {
			console.log(name, "end");
		});
	}
    foo("jake")
}
test5();