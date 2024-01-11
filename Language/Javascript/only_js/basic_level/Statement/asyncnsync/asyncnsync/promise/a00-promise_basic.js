/**
 * a00: promise basic
 *
 * # difference of async and callback
 *
 * - type callback  : afunction(a, b, err)
 * - type async     : afunction(a).then(b, err)
 *
 * # State of Promise
 *
 * 1. pending: initial state, neither fulfilled nor rejected.(thenable is passed)
 * 2. fulfilled: meaning that the operation was completed successfully. (non-thenable value is passed)
 * 3. rejected: meaning that the operation failed.(invalid resolution value)
 *
 *
 *  */

let b = 1;

function a() {
	for (let i = 0; i < b; i++) {}
}

/**
 * # deeply nested Promise poped first.
 *
 * (promise D, (promise C, (promise B, (promise A)))) > (promise D, (promise C, (promise B)))
 *
 * # if use .then()
 *
 * Returns a new Promise immediately.
 */

console.log(
	new Promise((resolve, reject) => {
		resolve(5);
	})
		.then(
			(value) =>
				new Promise((resolve, reject) => {
					resolve(value);
				})
		)
		.then((result) => {
			console.log(123);
		})
);


